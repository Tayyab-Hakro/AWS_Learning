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
    
  },


  
];

app.post('/data', (req, res) => {
  userData.push(req.body);

  res.send('Data received!');
});

app.listen(PORT, () => {
  console.log(`Server is running on:${PORT}`);
});