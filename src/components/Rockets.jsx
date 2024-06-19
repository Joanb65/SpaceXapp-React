import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getData from '../utils/getData';

const Rockets = () => {
  const { id } = useParams();
  const [launch, setLaunch] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      const rocket = data.find((item) => item.id === id);
      setLaunch(rocket);
    };
    fetchData();
  }, [id]);

  if (!launch) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Rockets-inner">
      <article className="Rockets-card">
        <img src={launch.links.patch.small} alt={launch.name} />
        <h2>{launch.name}</h2>
      </article>
      <article className="Rockets-card">
        <h3>Numero de vuelo: <span>{launch.flight_number}</span></h3>
        <h3>Fecha de lanzamiento: <span>{new Date(launch.date_utc).toLocaleString()}</span></h3>
        <h3>Detalles: <span>{launch.details || 'Sin detalles disponibles'}</span></h3>
        <h3>Fallas: <span>{launch.failures.length > 0 ? (
          launch.failures.map((failure, index) => (
            <span key={index}>{failure.reason}</span>
          ))
        ) : 'Sin fallas'}</span></h3>
      </article>
    </div>
  );
};

export default Rockets;

