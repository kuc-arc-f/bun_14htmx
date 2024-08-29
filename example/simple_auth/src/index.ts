//
import express from "express";
import 'dotenv/config'
//
import Top from './pages/App';
import Htmx2 from './pages/Htmx2';
import Htmx3 from './pages/Htmx3';
import Login from './pages/Login'
//
import testRouter from './routes/test'; 
//import zodRouter from './routes/zod';
import commonRouter from './routes/commonRouter';
//
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("process.env=", process.env.NODE_ENV);
//
const errorObj = {ret: "NG", messase: "Error"};
// router
app.use('/api/test', testRouter);
app.use('/api/common', commonRouter);

//MPA
app.get('/login', (req: any, res: any) => {
  try {res.send(Login({}));} catch (error) { res.sendStatus(500);}
});
app.get('/htmx2', (req: any, res: any) => {
  try {res.send(Htmx2({}));} catch (error) { res.sendStatus(500);}
});
app.get('/htmx3', (req: any, res: any) => {
  try {res.send(Htmx3({}));} catch (error) { res.sendStatus(500);}
});
app.get("/", (req, res) => {
//res.send("Hello World 11");
  const htm = Top({});
  //console.log(htm);
  res.send(htm);
});
//start
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});