import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';

const Home = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    getData().then(data => setLaunches(data));
  }, []);

  return (
    <div className="Rockets">
      {launches.map(launch => (
        <article className="Rockets-item" key={launch.id}>
          <a href={`#/${launch.id}/`}>
            <img src={launch.links.patch.small} alt={launch.name} />
            <h2>{launch.name}</h2>
          </a>
        </article>
      ))}
    </div>
  );
};

export default Home;


