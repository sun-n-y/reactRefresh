import SingleItem from './SingleItem';

const Items = ({ items, removeItem }) => {
  return (
    <div>
      {items.map((item) => {
        return <SingleItem key={item.id} {...item} removeItem={removeItem} />;
      })}
    </div>
  );
};
export default Items;
