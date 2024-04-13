import SingleMenuItem from './SingleMenuItem';

const Menu = ({ menuItems }) => {
  return (
    <div className="section-center">
      {menuItems.map((item) => {
        return <SingleMenuItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Menu;
