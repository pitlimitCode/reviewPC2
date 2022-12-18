import * as dotenv from 'dotenv';
dotenv.config();

import { MongoClient } from 'mongodb';
const client = new MongoClient(process.env.uri);
try{
  client.connect();  
} catch (error) {
  console.log(error);
  console.log("Fail connected to Mongodb server");
  // if (error instanceof MongoServerError) {
  //   console.log(`Error worth logging: ${error}`);
  // }
  // throw error;
};

const db = client.db(process.env.dbName); // database name
const collection = db.collection(process.env.collName); // collection name / sub-database name
export default collection;
