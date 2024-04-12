import { useState } from 'react';

const Tour = (props) => {
  const [readMore, setReadMore] = useState(false);

  const { id, name, info, image, price, removeTour } = props;

  return (
    <div className="single-tour">
      <span className="tour-price">{price}</span>
      <img src={image} className="img" />
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.slice(0, 250)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'read less' : 'read more'}
          </button>
        </p>
        <button onClick={() => removeTour(id)} className="btn delete-btn">
          not interested
        </button>
      </div>
    </div>
  );
};
export default Tour;
