import { useState } from 'react';

const SingleItem = ({ id, name, completed, removeItem, setItems, items }) => {
  const [isChecked, setIsChecked] = useState(completed);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    const localItems = JSON.parse(localStorage.getItem('items'));
    let item = localItems.find((item) => item.id == id);
    item.completed = !isChecked;
    console.log(item);
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      <h4 style={{ textDecoration: `${isChecked ? 'line-through' : ''}` }}>
        {name}
      </h4>
      <button type="button" onClick={() => removeItem(id)}>
        delete
      </button>
    </div>
  );
};
export default SingleItem;
