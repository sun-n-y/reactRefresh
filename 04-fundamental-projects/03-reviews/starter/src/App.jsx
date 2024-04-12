import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from 'react-icons/fa';
import reviews from './data';

const App = () => {
  const [index, setIndex] = useState(0);

  const nextPerson = () => {
    if (index == reviews.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  const prevPerson = () => {
    if (index == 0) {
      setIndex(reviews.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  const surprisePerson = () => {
    return Math.floor(Math.random() * reviews.length);
  };

  const { image, job, name, text } = reviews[index];

  return (
    <main>
      <div className="review">
        <div className="img-container">
          <img src={image} alt="" className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button onClick={prevPerson} className="prev-btn">
            <FaArrowLeft />
          </button>
          <button onClick={nextPerson} className="next-btn">
            <FaArrowRight />
          </button>
        </div>
        <button onClick={() => setIndex(surprisePerson())} className="btn">
          Surprise Me
        </button>
      </div>
    </main>
  );
};
export default App;
