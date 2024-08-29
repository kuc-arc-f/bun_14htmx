//const express = require('express');
import express from 'express';
const router = express.Router();
//require('dotenv').config();
import axios from 'axios';

/*****************************
todos -index
******************************/
router.post('/send_post', async function(req: any, res: any) {
  try {
    //console.log("url=", process.env.API_URL);
    const url = import.meta.env.VITE_API_URL; 
//console.log(req.body);
    const path = req.body.api_url;	
console.log("path=", url + path);
    const response = await axios.post(url + path, req.body, 
    {headers: { 'Content-Type': 'application/json'}
    });
    const data = response.data;
/*
           if(response.data.result_code !== 200) {
               console.error(response.data);
               throw new Error(`Error, result_code <>200`);
           }      
*/
//console.log(data);
    //@ts-ignore
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/**
 * user_login
 * @param
 *
 * @return
 */
router.post('/user_login', async function(req: any, res: any) {
  const resObj = {ret: 500, data: {}, message: "", config: {} };
  try {
console.log(req.body);
    resObj.config = {appName: process.env.VITE_APP_NAME};
    const email = process.env.VITE_AUTH_USER;
    const password = process.env.VITE_AUTH_PASSWORD;
    //console.log("email=", email);
    //console.log("password=", password);
    if(
        (req.body.email === email) && (req.body.password === password)
    ){
      //@ts-ignore
      resObj.ret = 200;
      return res.json(resObj);
    }
//console.log(data);
    //@ts-ignore
    return res.json(resObj);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

export default router;
