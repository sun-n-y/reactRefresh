import { useState } from 'react';
import text from './data';

const App = () => {
  const [count, setCount] = useState(0);
  const [loremIpsum, setLoremIpsum] = useState([]);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoremIpsum(text.slice(0, parseInt(count)));
  };

  return (
    <form>
      <label htmlFor="number">paragraph</label>
      <input
        type="number"
        id="number"
        min={1}
        max={8}
        step={1}
        value={count}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        generate
      </button>
      <div className="text-container">
        {loremIpsum.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </form>
  );
};
export default App;
