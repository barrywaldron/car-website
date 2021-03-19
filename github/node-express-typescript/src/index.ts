import express, {Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { hasOnlyExpressionInitializer } from 'typescript';
import { mainModule } from 'process';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express ();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.get('/',(req: Request, res: Response) => {
  res.send('<h1>Hello from the Typescript world!</h1>');
});

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
git innit
git add .
git commit -m "Initial commit"
git branch -M main 
git remote add origin https://github.com/barrywaldron/node-express-typescript.git
git push -u origin main 