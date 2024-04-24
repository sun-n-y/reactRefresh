import Person from './Person';

const List = ({ people }) => {
  // console.log('render');

  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
export default List;
