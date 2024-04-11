import { useEffect } from 'react';
import { useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? 'hide' : 'show'}
      </button>
      {toggle && <SecondComponent />}
    </>
  );
};

const SecondComponent = () => {
  useEffect(() => {
    const someFunc = () => {};
    window.addEventListener('scroll', someFunc);
    return () => {
      window.removeEventListener('scroll', someFunc);
    };
  }, []);

  return <h2>simple return</h2>;
};

export default CleanupFunction;
