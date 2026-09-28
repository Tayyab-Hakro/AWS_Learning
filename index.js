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
  {
    name:"DEPLOYED"
  }


  
];

app.post('/data', (req, res) => {
  userData.push(req.body);

});

app.listen(PORT, () => {
  console.log(`Server is running on:${PORT}`);
});