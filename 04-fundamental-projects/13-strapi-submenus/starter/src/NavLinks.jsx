import { useCustomHook } from './context';
import subLinks from './data';

const NavLinks = () => {
  const { setPageId } = useCustomHook();
  return (
    <div className="nav-links">
      {subLinks.map((item) => {
        const { pageId, page } = item;
        return (
          <button
            key={pageId}
            className="nav-link"
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
