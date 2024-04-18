import { nanoid } from 'nanoid';

const Form = ({ items, setItems }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const inputValue = formData.get('item');
    if (!inputValue) {
      console.log('please enter value');
      return;
    }
    const groceryItem = { id: nanoid(), name: inputValue, completed: false };
    setItems([...items, groceryItem]);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="item" />
      <button type="submit">add item</button>
    </form>
  );
};
export default Form;
