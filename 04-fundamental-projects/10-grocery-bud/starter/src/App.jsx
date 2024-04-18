import { useState } from 'react';
import Form from './Form';
import Items from './Items';

const App = () => {
  const [items, setItems] = useState([]);

  return (
    <>
      <Form setItems={setItems} items={items} />
      <Items items={items} />
    </>
  );
};

export default App;
