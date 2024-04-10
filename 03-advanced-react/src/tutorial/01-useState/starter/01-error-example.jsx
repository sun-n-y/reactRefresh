const ErrorExample = () => {
  let count = 0;

  return (
    <>
      <h4>{count}</h4>
      <button
        onClick={() => {
          count++;
          console.log(count);
        }}
      >
        Increase count
      </button>
    </>
  );
};

export default ErrorExample;
