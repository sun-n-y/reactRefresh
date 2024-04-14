import { FaChevronCircleRight } from 'react-icons/fa';

const JobInfoComponent = ({ jobs, jobIndex }) => {
  const { company, dates, duties, title } = jobs[jobIndex];

  return (
    <>
      <h1>{title}</h1>
      <h3>{company}</h3>
      <h4>{dates}</h4>
      {duties.map((duty, index) => {
        return (
          <p key={index}>
            <FaChevronCircleRight />
            {duty}
          </p>
        );
      })}
    </>
  );
};

export default JobInfoComponent;
