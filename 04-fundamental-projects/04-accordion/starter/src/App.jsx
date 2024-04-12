import { useState } from 'react';
import list from './data';
import SingleQuestion from './SingleQuestion';

const App = () => {
  const [questions, setQuestions] = useState(list);

  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        {list.map((item) => {
          return <SingleQuestion key={item.id} {...item} />;
        })}
      </div>
    </main>
  );
};
export default App;
