import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: 'tim' });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <>
      {user ? (
        <div>
          <h4>Hello there, {user.name}</h4>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
          <button onClick={login}>Login</button>
        </div>
      )}
    </>
  );
};

export default UserChallenge;
