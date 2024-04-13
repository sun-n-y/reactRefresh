const SingleMenuItem = ({ id, title, category, price, img, desc }) => {
  return (
    <div className="menu-item">
      <img src={img} className="img" alt="" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <p className="item-price">{price}</p>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </div>
  );
};

export default SingleMenuItem;
