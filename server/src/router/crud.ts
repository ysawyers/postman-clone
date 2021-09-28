import express, { Request, Response } from 'express';
import pool from '../connection';
const router = express.Router();

router.get('/user-queries', (req: Request, res: Response) => {
  const queryString = 'SELECT * FROM requests WHERE userid = $1';
  // @ts-ignore
  const values = [req.user.id];
  pool.query(queryString, values, (_, { rows }) => {
    res.status(200);
    res.json(rows);
  });
});

router.post('/save-query', (req: Request, res: Response) => {
  const requestaddress = req.body.requestAddress;
  const requesttype = req.body.requestType;
  const requestbody = req.body.requestBody;

  const queryString = 'INSERT INTO requests(userid, requestaddress, requesttype, requestbody) VALUES($1, $2, $3, $4)';
  // @ts-ignore
  const values = [req.user.id, requestaddress, requesttype, requestbody];
  pool.query(queryString, values, () => {
    res.status(200);
    res.end();
  });
});

// router.delete('/remove-query', (req: Request, res: Response) => {});

// router.put('/edit-query', (req: Request, res: Response) => {});

module.exports = router;
