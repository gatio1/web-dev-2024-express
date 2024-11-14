import { Router } from 'express';
import universities from '../university/university';

const userRouter = Router();

let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', uniId: '1', subjects: []},
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', uniId: '1', subjects: []},
];

userRouter.get('/', (req, res) => {
  res.json(users);
});

userRouter.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

userRouter.post('/', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    uniId: req.body.uniId,
    subjects: req.body.subjects || []
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

userRouter.patch('/update-university/:id', (req, res, next) => {
  const userId = parseInt(req.params.id);
  
  const uniId = req.body.universityId;

  if(universities.find((u) => u.id === uniId) === undefined){
    res.status(404).json({ message: 'University not found' });

  } else{ 

    const user = users.find((u) => u.id === userId);
    if(user === undefined){
      res.status(404).json({ message: 'User not found' });
    }
    else
    {
      user.uniId = uniId;
      res.status(200).json(user);
    }
  }
});


userRouter.patch('/update-subjects/:id', (req, res, next) => {
  const userId = parseInt(req.params.id);
  
  const mySubjects = req.body.subjects;

    const user = users.find((u) => u.id === userId);
    if(user === undefined){
      res.status(404).json({ message: 'User not found' });
    }
    else
    {
      user.subjects = mySubjects;
      res.status(200).json(user);
    }
  }
);


// PUT to update an existing user
userRouter.put('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    users[userIndex] = {
      id: userId,
      name: req.body.name,
      email: req.body.email,
      uniId: req.body.uniId,
      subjects: req.body.subjects || []
    };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// DELETE a user by ID
userRouter.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser[0]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

export default userRouter;
