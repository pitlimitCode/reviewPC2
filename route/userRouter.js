import express from 'express';
const Router = express.Router()
import userController from '../controller/userController.js';

export default Router
  .get('/gets', userController.Gets) // READ ALL
  .get('/getid/', userController.GetById) // READ BY IDENTITY NUMBER
  .get('/getacc/', userController.GetByAcc) // READ BY ACCOUNT NUMBER
  .post('/post', userController.Post) // CREATE ONE
  .post('/posts', userController.PostMany) // CREATE MANY
  .put('/put', userController.Put) // UPDATE A
  .put('/puts', userController.PutMany) // UPDATE MANY
  .delete('/del/', userController.DeleteById) // DELETE A
  .delete('/dels', userController.Deletes) // DELETE ALL

  .get('/test', userController.GetTest) // DUMMY CODE
;