import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import middleware from './middleware';
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const authentication = require('./router/auth/authentication');
const crud = require('./router/crud');
app.use('/auth', authentication);
app.use(middleware);
app.use('/api', crud);

const port = 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
