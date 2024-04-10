import { useState } from 'react';
import data from './data';
import List from './List';

const App = () => {
  const [list, setList] = useState(data);

  const clearList = () => {
    setList([]);
  };

  return (
    <main>
      <div className="container">
        <h3>{list.length} birthday list</h3>
        <List list={list} />
        <button onClick={clearList}>clear list</button>
      </div>
    </main>
  );
};
export default App;
