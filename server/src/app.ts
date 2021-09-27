import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authentication from './router/auth/authentication';
import middleware from './middleware';
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use('/auth', authentication);
app.use(middleware);

const port = 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
