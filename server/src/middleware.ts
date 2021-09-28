import express from 'express';
import jwt from 'jsonwebtoken';

export default function authorizeUser(req: express.Request, res: express.Response, next: express.NextFunction) {
  if (req.headers.authorization) {
    const authType = req.headers.authorization.split(':');
    switch (authType[0]) {
      case 'native':
        const token = authType[1].substring(1);
        jwt.verify(token, 'Y*&FOEGF*#Hh387fqo3hgf7fgw3f', (_, decoded: any) => {
          // @ts-ignore
          req.user = decoded;
        });
        next();
        break;
      case 'googleToken':
        next();
        break;
    }
  } else {
    res.status(409);
    res.json('Please login to continue');
  }
}
