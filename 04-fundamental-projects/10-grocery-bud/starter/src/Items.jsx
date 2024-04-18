import SingleItem from './SingleItem';

const Items = ({ items, removeItem, setItems }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            {...item}
            removeItem={removeItem}
            setItems={setItems}
            items={items}
          />
        );
      })}
    </div>
  );
};
export default Items;
