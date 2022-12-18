import collection from '../db.js';

// DUMMY CODE
const GetTest = async () => {
  try{
    const identityNumber = await collection.createIndex({identityNumber : 1}, {unique : true})
    const accountNumber = await collection.createIndex({accountNumber : 1}, {unique : true})
    return (`${identityNumber}, ${accountNumber}`)
  } catch (err) {
    console.log(err)
    return err
  }
};

// 
const IndexCollection = async () => {
  try{
    const identityNumber = await collection.createIndex({identityNumber : 1}, {unique : true})
    const accountNumber = await collection.createIndex({accountNumber : 1}, {unique : true})
    return (`${identityNumber}, ${accountNumber}`)
  } catch (err) {
    console.log(err);
    return err;
  }
};

// READ ALL
const Gets = async () => {
  try{
    // const collectionBefore = await collection.find({}).toArray();
    return await collection.find({}).sort({identityNumber:-1}).toArray();
  } catch (err) {
    console.log(err);
    return err;
  }
};

// READ BY IDENTITY NUMBER
const GetById = async (identityNumber) => {
  try{
    // const collectionBefore = await collection.find({}).toArray();
    return await collection.find({ identityNumber }).toArray();
    // res.send(collectionBefore);
  } catch (err) {
    console.log(err);
    return err;
  }
};
// READ BY ACCOUNT NUMBER
const GetByAcc = async (accountNumber) => {
  try{
    // const collectionBefore = await collection.find({}).toArray();
    return await collection.find({ accountNumber }).toArray();
    // res.send(collectionBefore);
  } catch (err) {
    console.log(err)
    return err
  }
};

// CREATE ONE
const Post = async (userName, accountNumber, emailAddress, identityNumber) => {
  try{
    // const collectionBefore = await collection.find({}).toArray();
    return await collection.insertOne({userName, accountNumber, emailAddress, identityNumber});
    // res.send(collectionBefore);
  } catch (err) {
    // console.log(err)
    return err
  }
};
{
// // CREATE MANY
// await collection.insertMany(
//   [
//     {
//       userName: null, 
//       accountNumber: null, 
//       emailAddress: null, 
//       identityNumber: null
//     },
//     {
//       userName: null, 
//       accountNumber: null, 
//       emailAddress: null, 
//       identityNumber: null
//     }
//   ]
// );
}
// UPDATE A
const Put = async (userName, accountNumber, emailAddress, identityNumber) => {
  try{
    // const collectionBefore = await collection.find({}).toArray();
    return await collection.updateOne({ identityNumber }, { $set: { userName, accountNumber, emailAddress, identityNumber } });
    // res.send(collectionBefore);
  } catch (err) {
    // console.log(err)
    return err
  }
};
{
// // UPDATE MANY
// await collection.updateOne({ identityNumber }, { $set: { userName, accountNumber, emailAddress, identityNumber } });
}
// DELETE A
const DeleteById = async (identityNumber) => {
  try{
    // const collectionBefore = await collection.find({}).toArray();
    return await collection.deleteMany({ identityNumber });
    // res.send(collectionBefore);
  } catch (err) {
    console.log(err)
    return err
  }
};

// // DELETE ALL
const Deletes = async () => {
  try{
    // const collectionBefore = await collection.find({}).toArray();
    return await collection.drop();
  } catch (err) {
    console.log(err)
    return err
  }
};


export default { 
  IndexCollection,
  Gets, 
  GetById,
  GetByAcc,
  Post,
  // PostMany,
  Put,
  // PutMany,
  DeleteById,
  Deletes,
  GetTest,
};