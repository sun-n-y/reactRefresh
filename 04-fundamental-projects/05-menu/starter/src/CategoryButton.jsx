const CategoryButtons = ({ categories, filterMenu }) => {
  const handleClick = (e) => {
    filterMenu(e.target.textContent);
  };

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button onClick={handleClick} key={index} className="btn">
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryButtons;
