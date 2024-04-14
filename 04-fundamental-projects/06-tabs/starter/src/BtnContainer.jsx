const BtnContainer = ({ jobs, setJobIndex }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button key={index} onClick={() => setJobIndex(index)}>
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
