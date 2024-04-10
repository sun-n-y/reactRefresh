import { useEffect } from 'react';
import { useState } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      {users.map((user) => {
        const { avatar_url: image, login, id } = user;
        return (
          <article key={id}>
            <img src={image} style={{ width: '50px' }} />
            <h4>{login}</h4>
          </article>
        );
      })}
    </>
  );
};
export default FetchData;
