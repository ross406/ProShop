import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './constants.js';

const generateToken = (id) => {
  return jwt.sign({ id: id }, JWT_SECRET, {
    expiresIn: '30d',
  });
};

export default generateToken;
