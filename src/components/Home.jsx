import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getData from '../utils/getData';

const Home = () => {
  const [launches, setLaunches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setLaunches(data);
    };
    fetchData();
  }, []);

  const handleNavigate = (id) => {
    navigate(`/rocket/${id}`);
  };

  return (
    <div className="Rockets">
      {launches.map(launch => (
        <article key={launch.id} className="Rockets-item" onClick={() => handleNavigate(launch.id)}>
          <img src={launch.links.patch.small} alt={launch.name} />
          <h2>{launch.name}</h2>
        </article>
      ))}
    </div>
  );
};

export default Home;