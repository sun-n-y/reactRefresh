import SingleItem from './SingleItem';

const Items = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return <SingleItem key={item.id} {...item} />;
      })}
    </div>
  );
};
export default Items;
