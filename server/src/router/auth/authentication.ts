import express, { Request, Response } from 'express';
const router = express.Router();
import pool from '../../connection';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';

// router.get('/google-login', (req: Request, res: Response) => {
//   const googleToken = req.headers.authorization;
// });

router.post('/login', (req: Request, res: Response) => {
  const usernameOrEmail = req.body.usernameOrEmail;
  // @ts-ignore
  const password = req.body.password;

  const queryString = 'SELECT * FROM users WHERE username = $1 OR email = $2';
  const values = [usernameOrEmail, usernameOrEmail];
  pool.query(queryString, values, (_, { rows }) => {
    if (rows.length) {
      jwt.sign(
        { id: rows[0].id, email: rows[0].email, username: rows[0].username },
        'Y*&FOEGF*#Hh387fqo3hgf7fgw3f',
        { algorithm: 'HS256' },
        (_, token) => {
          res.json({
            token: `native: ${token}`,
          });
        }
      );
    } else {
      res.json("User doesn't exist");
    }
  });
});

router.post('/register', (req: Request, res: Response) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  const queryString = 'SELECT * FROM users WHERE email = $1 OR username = $2';
  pool.query(queryString, [email, username], (_, { rows }) => {
    if (rows.length === 0) {
      const saltRounds = 10;
      bcrypt.hash(password, saltRounds, async (_, hash) => {
        const queryString = 'INSERT INTO users(id, email, username, password) VALUES($1, $2, $3, $4)';
        const uuid = uuidv4().split('-')[0];
        const data = [uuid, email, username, hash];
        try {
          pool.query(queryString, data, () => {
            jwt.sign({ id: uuid, email, username }, 'Y*&FOEGF*#Hh387fqo3hgf7fgw3f', { algorithm: 'HS256' }, (_, token) => {
              res.json({
                token: `native: ${token}`,
              });
            });
          });
        } catch (error) {
          res.json(error);
        }
      });
    } else {
      res.json('User already exists');
    }
  });
});
3;
module.exports = router;
