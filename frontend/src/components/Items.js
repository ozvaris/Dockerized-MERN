import React, { useState, useEffect } from 'react';
import api from '../api';

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await api.getItems();
      setItems(response.data);
    };
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Items</h1>
      {items.map(item => (
        <div key={item._id}>
          <h2>{item.name}</h2>
          <button onClick={() => api.deleteItem(item._id)}>Delete</button>
        </div>
      ))}
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const name = event.target.elements[0].value;
          const response = await api.createItem({ name });
          setItems([...items, response.data]);
        }}
      >
        <input placeholder="New item" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Items;
