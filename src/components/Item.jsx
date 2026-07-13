import React from 'react';

function Item({ item, deleteItem, editItem, toggleComplete }) {
  return (
    <li className="list-item">
      <span className={item.completed ? 'item-text completed' : 'item-text'}>
        {item.value}
      </span>

      <div className="button-group">
        <button className="complete-btn" onClick={() => toggleComplete(item.id)}>
          {item.completed ? 'Desmarcar' : 'Completar'}
        </button>

        <button className="edit-btn" onClick={() => editItem(item)}>
          Editar
        </button>

        <button className="delete-btn" onClick={() => deleteItem(item.id)}>
          Eliminar
        </button>
      </div>
    </li>
  );
}

export default Item;