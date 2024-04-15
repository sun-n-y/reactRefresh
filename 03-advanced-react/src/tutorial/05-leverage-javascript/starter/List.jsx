import { people } from '../../../data';

const List = () => {
  return (
    <>
      {people.map((person, index) => {
        return <h4 key={index}>{person.name}</h4>;
      })}
    </>
  );
};

export default List;
