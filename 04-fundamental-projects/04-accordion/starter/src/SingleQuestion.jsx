import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const SingleQuestion = ({ title, info }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="question">
      <header>
        <h5>{title}</h5>
        <button onClick={() => setShowMore(!showMore)} className="question-btn">
          {showMore ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      <p style={showMore ? { display: 'block' } : { display: 'none' }}>
        {info}
      </p>
    </div>
  );
};

export default SingleQuestion;
