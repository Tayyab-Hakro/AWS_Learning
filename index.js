import express from 'express';

const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const userData = [
  {
      name: 'John Doe',
      age: 30,
  },
  {
      name: 'Jane Smith',
      age: 25,
  },
  { 
    name :"Alice Johnson",
    age: 28

  }
];

app.post('/data', (req, res) => {
  userData.push(req.body);

  res.send('Data received!');
});

app.listen(PORT, () => {
  console.log(`Server is running on:${PORT}`);
});