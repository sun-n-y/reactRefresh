import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [value1, setValue1] = useState('tim');
  const [value2, setValue2] = useState('');

  return (
    <>
      {value1 && <h1>{value1}</h1>}
      {value1 || <h1>{value1}</h1>}
      {value2 && <h1>kim</h1>}
      {value2 || <h1>jim</h1>}
    </>
  );
};

export default ShortCircuitOverview;
