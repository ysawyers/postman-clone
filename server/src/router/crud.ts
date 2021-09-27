import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/user-queries', (req: Request, res: Response) => {});

router.post('/save-query', (req: Request, res: Response) => {});

router.delete('/remove-query', (req: Request, res: Response) => {});

router.put('/edit-query', (req: Request, res: Response) => {});

export default router;
