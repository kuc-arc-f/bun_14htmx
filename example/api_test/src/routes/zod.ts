import express from 'express';
const router = express.Router();
import { z } from 'zod';
//
const FormData = z.object({
  title: z
      .string()
      .min(1, { message: '1文字以上入力してください。' }),
  content: z
      .string()
      .min(1, { message: '1文字以上入力してください。' }),
});
/**
* 
* @param
*
* @return
*/ 
router.post('/test', async function(req: any, res: any) {
  const retObj ={success: false, data:{}, errors: {}}
  try {
console.log(req.body);
    if(req.body){
      FormData.parse(req.body);
    }
    retObj.success = true;
    retObj.data = req.body;
    res.json(retObj);
  } catch (error) {
    //console.error(error);
    retObj.errors = error.flatten().fieldErrors;
    res.json(retObj);
  }
});

export default router;
