import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => { // Landing to Server
  try{
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(`
      <h2>All HTML METHODRoutes:</h2>
      <p>GET /gets</p>
      <p>GET /getid/?identityNumber=:identityNumber</p>
      <p>GET /getacc/?accountNumber=:accountNumber</p>
      <p>POST /post REQ.BODY{userName, accountNumber, emailAddress, identityNumber}</p>
      <p>PUT /put REQ.BODY{userName, accountNumber, emailAddress, identityNumber}</p>
      <p>DELETE /del/?identityNumber=:identityNumber</p>
      <p>DELETE /dels</p>
    `));
  } catch (err) {
    res.send(err)
  }
});

import userRouter from './route/userRouter.js';
app.use('/', userRouter)

import * as dotenv from 'dotenv';
dotenv.config();
const port = process.env.port || 8000;
app.listen(port, () => { console.log(`Express on port: ${port}!`) });