import { Router } from 'express';
import universities from './university';

const uniRouter = Router();

uniRouter.get('/', (req, res) => {
  res.json(universities);
});

uniRouter.get('/:id', (req, res) => {
  const uniId = parseInt(req.params.id);
  const uni = universities.find((u) => u.id === uniId);
  if (uni) {
    res.json(uni);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

uniRouter.post('/', (req, res) => {
  const newUni = {
    id: universities.length + 1,
    name: req.body.name,
  };
  universities.push(newUni);
  res.status(201).json(newUni);
});

// // PUT to update an existing user
// uniRouter.put('/:id', (req, res) => {
//   const uniId = parseInt(req.params.id);
//   const uniIndex = universities.findIndex((u) => u.id === uniId);
//   if (uniIndex !== -1) {
//     universities[uniIndex] = {
//       id: uniId,
//       name: req.body.name,
//     };
//     res.json(universities[uniIndex]);
//   } else {
//     res.status(404).json({ message: 'User not found' });
//   }
// });

// DELETE a user by ID
uniRouter.delete('/:id', (req, res) => {
  const uniId = parseInt(req.params.id);
  const uniIndex = universities.findIndex((u) => u.id === uniId);
  if (uniIndex !== -1) {
    const deletedUni = universities.splice(uniIndex, 1);
    res.json(deletedUni[0]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

export default uniRouter;
