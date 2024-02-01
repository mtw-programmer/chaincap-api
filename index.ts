import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors({
  origin: '*',
  credentials: true,
}));

const port = 4000;
export default app.listen(port, () => console.log(`App listening on port ${port}`));
