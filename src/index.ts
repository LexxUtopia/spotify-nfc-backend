import express, { json, urlencoded } from 'express';
import cors from 'cors';

const app = express();
const port = 3030;

app.use(cors());
app.use(json());

app.listen(port, () => {
    console.info(`Server is listening on port ${port}.`);
});