import { useCustomHook } from './AppContext';

const Home = () => {
  const { openModal, openSidebar } = useCustomHook();

  return (
    <div>
      <button onClick={openSidebar}>openSidebar</button>
      <button onClick={openModal}>openModal</button>
    </div>
  );
};

export default Home;
