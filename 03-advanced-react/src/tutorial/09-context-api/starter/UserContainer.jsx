import { useAppContext } from './Navbar';

const UserContainer = () => {
  const { user, logout } = useAppContext();

  if (!user) {
    return <h1>please login</h1>;
  }
  return (
    <div>
      <h4>{user?.name}</h4>
      <button onClick={logout}>{user ? 'logout' : 'login'}</button>
    </div>
  );
};
export default UserContainer;
