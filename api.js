import express from 'express';

const app = express();
const arrResponse = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
    },
   { id: 2,
    name: 'Jane Doe',
    email: 'jane.doe@example.com'
    }
];

app.get('/', (req, res) => {
  res.json(arrResponse);
});

app.listen(3000, () => { console.log('Server is running on port 3000') });


