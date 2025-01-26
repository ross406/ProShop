import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('12345678', 10),
    isAdmin: true,
    googleId:"123"
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('12345678', 10),
    googleId:"134"
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('12345687', 10),
    googleId:"145"
  },
];

export default users;
