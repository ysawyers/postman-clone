import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/google-login', (req: Request, res: Response) => {
  const googleToken = req.headers.authorization;
});

router.post('/login', (req: Request, res: Response) => {
  const usernameOrEmail = req.body.usernameOrEmail;
  const password = req.body.password;
});

router.post('/register', (req: Request, res: Response) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
});

export default router;
