import { useState } from 'react';

const SingleItem = ({ id, name, completed }) => {
  const [isChecked, setIsChecked] = useState(completed);

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <h4 style={{ textDecoration: `${isChecked ? 'line-through' : ''}` }}>
        {name}
      </h4>
    </div>
  );
};
export default SingleItem;
