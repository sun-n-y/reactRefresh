import { FaBars } from 'react-icons/fa';
import { useCustomHook } from './context';
import NavLinks from './NavLinks';

const Navbar = () => {
  const { openSidebar, setPageId } = useCustomHook();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null);
    }
  };

  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">MyName</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};
export default Navbar;
