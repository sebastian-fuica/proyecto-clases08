import React from 'react';
import Item from './Item';

function List({ items, deleteItem, editItem, toggleComplete }) {
  return (
    <ul className="list">
      {items.length === 0 ? (
        <p className="empty-message">No hay elementos para mostrar.</p>
      ) : (
        items.map((item) => (
          <Item
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            editItem={editItem}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </ul>
  );
}

export default List;