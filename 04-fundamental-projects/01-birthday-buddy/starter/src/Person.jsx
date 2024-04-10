const Person = (person) => {
  const { name, age, image } = person;
  return (
    <article>
      <img src={image} className="img" alt="" />
      <h4>{name}</h4>
      <p>{age}</p>
    </article>
  );
};

export default Person;
