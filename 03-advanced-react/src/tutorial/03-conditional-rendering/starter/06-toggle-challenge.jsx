import { useState } from 'react';

const ToggleChallenge = () => {
  const [value, setValue] = useState(true);

  return (
    <>
      <button onClick={() => setValue(!value)}>
        {value ? 'Hide Element' : 'Show Element'}
      </button>
      {value && <h1>Secret Element</h1>}
    </>
  );
};

export default ToggleChallenge;
