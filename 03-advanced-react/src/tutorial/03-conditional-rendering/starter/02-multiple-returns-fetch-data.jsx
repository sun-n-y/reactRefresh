import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const data = await response.json();
        setUser(data);
        console.log(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    getData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error in code!</h2>;
  }

  const { name, company, bio, avatar_url } = user;

  return (
    <div>
      <img style={{ width: '150px' }} src={avatar_url} alt="" />
      <h4>{name}</h4>
      <h4>{company}</h4>
      <p>{bio}</p>
    </div>
  );
};

export default MultipleReturnsFetchData;
