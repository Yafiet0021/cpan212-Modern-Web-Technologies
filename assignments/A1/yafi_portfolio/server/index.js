import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8000;

app.use(cors());

app.get('/getOverview', (req, res) => {
  res.json({
    name: 'Yafiet Habemariam',
    title: 'Software Developer',
    summary: "I’m passionate about creating full-stack applications and learning new technologies.",
  });
});

app.get('/getEdu', (req, res) => {
  res.json([
    {
      school: 'Humber College',
      degree: 'Computer Programming and Analysis',
      year: '2023 - 2026',
    },
  ]);
});

app.get('/getExp', (req, res) => {
  res.json([
    {
      role: 'Web Developer Intern',
      company: 'XYZ Inc.',
      period: 'May 2024 - Aug 2024',
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
