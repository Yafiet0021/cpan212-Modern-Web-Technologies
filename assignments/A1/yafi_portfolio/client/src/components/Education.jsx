import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Education() {
  const [edu, setEdu] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/getEdu')
      .then(res => setEdu(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="education" style={{ padding: '30px 20px' }}>
      <h2>Education</h2>
      {edu.map((item, index) => (
        <div key={index}>
          <p><strong>{item.school}</strong></p>
          <p>{item.degree} — {item.year}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;
