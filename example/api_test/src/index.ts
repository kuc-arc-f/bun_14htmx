//
import express from "express";
import 'dotenv/config'
//
import Top from './pages/App';
import Htmx2 from './pages/Htmx2';
import Htmx3 from './pages/Htmx3';
//import Login from './pages/Login'
import TestApi from './pages/TestApi';
import TestApiShow from './pages/TestApiShow';
//
import TestApiIndex from "./pages/TestApi/CrudIndex";;
//
import testRouter from './routes/test'; 
import commonRouter from './routes/commonRouter';
import csrRouter from './routes/csr';
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
app.use('/api/csr', csrRouter);

//MPA
app.get('/testapi', async (req: any, res: any) => {
  try {
//console.log(items[0]);
    const htm = TestApi({items: []});
    res.send(htm);
  } catch (error) {
    console.error(error)
     res.sendStatus(500);
  }
});
app.get('/testapishow/:id', async (req: any, res: any) => {
console.log("id=", req.params.id  );
  try {
    const item = await TestApiIndex.get(Number(req.params.id));
console.log(item);
    const htm = TestApiShow({item: item});
    res.send(htm);
  } catch (error) { res.sendStatus(500);}
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
