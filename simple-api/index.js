const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define the list of fictional users
const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// Root route with welcome message
app.get('/', (req, res) => {
  res.send('Welcome to the Simple API!');
});

// GET request: Fetch all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST request: Add a new user
app.post('/api/users', (req, res) => {
  const { id, name, email } = req.body;

  // Error handling for missing fields
  if (!id || !name || !email) {
    return res.status(400).json({ error: 'Please provide id, name, and email' });
  }

  const newUser = { id, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
