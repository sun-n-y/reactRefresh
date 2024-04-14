import { useEffect, useState } from 'react';
import JobInfoComponent from './JobInfoComponent';
import BtnContainer from './BtnContainer';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jobIndex, setJobIndex] = useState(0);

  const fetchJob = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJob();
  }, []);

  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <>
      <BtnContainer jobs={jobs} setJobIndex={setJobIndex} />
      <JobInfoComponent jobs={jobs} jobIndex={jobIndex} />
    </>
  );
};

export default App;
