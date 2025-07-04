import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Overview() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8000/getOverview')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="overview" style={{ padding: '30px 20px' }}>
      <h1>{data.name}</h1>
      <h3>{data.title}</h3>
      <p>{data.summary}</p>
    </section>
  );
}

export default Overview;
