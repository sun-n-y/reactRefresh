import { useState } from 'react';
import Form from './Form';
import Items from './Items';

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  );

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <>
      <Form setItems={setItems} items={items} />
      <Items items={items} removeItem={removeItem} setItems={setItems} />
    </>
  );
};

export default App;
