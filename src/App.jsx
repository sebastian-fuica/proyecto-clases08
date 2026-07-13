import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      setItems(
        items.map((item) =>
          item.id === itemToEdit.id ? { ...item, value } : item
        )
      );
      setItemToEdit(null);
    } else {
      setItems([
        ...items,
        {
          id: Date.now(),
          value,
          completed: false
        }
      ]);
    }
  };

  const deleteItem = (id) => {
    const confirmDelete = window.confirm('¿Seguro que deseas eliminar este elemento?');
    if (confirmDelete) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const editItem = (item) => {
    setItemToEdit(item);
  };

  const toggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const clearAllItems = () => {
    const confirmClear = window.confirm('¿Seguro que deseas borrar todos los elementos?');
    if (confirmClear) {
      setItems([]);
      setItemToEdit(null);
    }
  };

  const filteredItems = items.filter((item) =>
    item.value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">CRUD con LocalStorage</h1>

        <Form
          addOrUpdateItem={addOrUpdateItem}
          itemToEdit={itemToEdit}
        />

        <div className="top-bar">
          <p className="counter">Total: {items.length}</p>

          <input
            type="text"
            className="search-input"
            placeholder="Buscar elemento..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {items.length > 0 && (
          <button className="clear-btn" onClick={clearAllItems}>
            Borrar todos
          </button>
        )}

        <List
          items={filteredItems}
          deleteItem={deleteItem}
          editItem={editItem}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
}

export default App;