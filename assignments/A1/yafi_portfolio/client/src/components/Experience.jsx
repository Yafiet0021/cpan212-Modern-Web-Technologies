import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Experience() {
  const [exp, setExp] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/getExp')
      .then(res => setExp(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="experience" style={{ padding: '30px 20px' }}>
      <h2>Experience</h2>
      {exp.map((item, index) => (
        <div key={index}>
          <p><strong>{item.role}</strong></p>
          <p>{item.company} — {item.period}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;
