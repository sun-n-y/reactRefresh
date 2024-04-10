import Person from './Person';

const List = ({ list }) => {
  return (
    <section>
      {list.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};

export default List;
