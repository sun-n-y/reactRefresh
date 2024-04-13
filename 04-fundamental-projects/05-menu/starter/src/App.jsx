import { useState } from 'react';
import Title from './Title';
import menuList from './data';
import Menu from './Menu';

const App = () => {
  const [menuItems, setMenuItems] = useState(menuList);

  return (
    <div className="menu">
      <Title text={'Our Menu'} />
      <Menu menuItems={menuItems} />
    </div>
  );
};
export default App;
