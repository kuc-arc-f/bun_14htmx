import express from 'express';
const router = express.Router();
//import LibConfig from '../lib/LibConfig';
//import {htmConfirm1} from './test/renderHtml';
//
import axios from 'axios';
import LoadList from './csr/LoadList';
import LoadShow from './csr/LoadShow';

/**
* 
* @param
*
* @return
*/ 
router.post('/get', async function(req: any, res: any) {
  try {
    console.log(req.body);
    const url = process.env.VITE_API_URL;
    const path = "/test/get";	
    console.log("path=", url + path);
    const item  = {
      "id": req.body.item_id,
    } 
    const response = await axios.post(url + path, item, 
      {headers: { 'Content-Type': 'application/json'}
    });
    const data = response.data;
    //console.log(data.data)
    //const htm = renderToString(
    //  LoadShow({item: data.data })
    //);
//console.log(htm);
    res.send("");
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/**
* 
* @param
*
* @return
*/ 
router.post('/load_list', async function(req: any, res: any) {
  try {
console.log("#load_list");
console.log(req.body);
    const url = process.env.VITE_API_URL;  
    const path = "/test/get_list";	
    console.log("path=", url + path);
    const item  = {
      "userId": 0,
    } 
    const response = await axios.post(url + path, item, 
      {headers: { 'Content-Type': 'application/json'}
    });
    const data = response.data;
    //console.log(data.data);
    //console.log("ret=", data.ret);
    const htm = LoadList({items: data.data });
    //console.log(htm);
    res.send(htm);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/*
router.post('/render_confirm1', async function(req: any, res: any) {
  try {
console.log(req.body);
    const htm = htmConfirm1(req.body.id);
    res.send(htm);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
*/
/**
* 
* @param
*
* @return
*/ 
router.post('/delete', async function(req: any, res: any) {
  try {
console.log(req.body);
    res.json(req.body);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/**
* 
* @param
*
* @return
*/ 
router.post('/test', async function(req: any, res: any) {
  try {
console.log(req.body);
    res.json(req.body);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

/**
* 
* @param
*
* @return
*/ 
router.post('/test1', async function(req: any, res: any) {
  try {
console.log(req.body);
    res.json({ret: "OK", data: []});
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

export default router;
