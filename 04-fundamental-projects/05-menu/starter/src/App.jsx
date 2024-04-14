import { useState } from 'react';
import Title from './Title';
import menuList from './data';
import Menu from './Menu';
import CategoryButtons from './CategoryButton';

const uniqueCategories = [
  'all',
  ...new Set(menuList.map((item) => item.category)),
];

const App = () => {
  const [menuItems, setMenuItems] = useState(menuList);
  const [categories, setCategories] = useState(uniqueCategories);

  const filterMenu = (name) => {
    if (name == 'all') {
      setMenuItems(menuList);
      return;
    }
    const filteredArray = menuList.filter((item) => item.category == name);
    setMenuItems(filteredArray);
  };

  return (
    <div className="menu">
      <Title text={'Our Menu'} />
      <CategoryButtons categories={categories} filterMenu={filterMenu} />
      <Menu menuItems={menuItems} />
    </div>
  );
};
export default App;
