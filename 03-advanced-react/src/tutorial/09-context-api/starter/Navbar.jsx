import { createContext, useContext, useState } from 'react';
import NavLinks from './NavLinks';

export const NavbarContext = createContext();

//custom hook
export const useAppContext = () => {
  return useContext(NavbarContext);
};

const Navbar = () => {
  const [user, setUser] = useState({ name: 'tim' });

  const logout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <NavLinks />
    </NavbarContext.Provider>
  );
};
export default Navbar;
