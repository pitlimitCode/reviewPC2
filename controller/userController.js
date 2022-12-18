import userModel from '../model/userModel.js';

// DUMMY CODE
const GetTest = async (req, res) => {
  try{
    const indexName = await userModel.GetTest()
    res.send(indexName);
  } catch (err) {
    res.send(err)
  }
};

// READ ALL
const Gets = async (req, res) => {
  try{
    const collections = await userModel.Gets();
    res.send(collections);
  } catch (err) {
    res.send(err)
  }
};

// READ BY IDENTITY NUMBER
const GetById = async (req, res) => {
  try{
    const { identityNumber } = req.query;    
    const filteredDocs = await userModel.GetById(identityNumber);
    if (filteredDocs[0] == null) {return res.send(`No data identityNumber: ${identityNumber}`)};
    res.send(filteredDocs);
  } catch (err) {
    res.send(err)
  }
};
// READ BY ACCOUNT NUMBER
const GetByAcc = async (req, res) => {
  try{
    const { accountNumber } = req.query;
    // console.log(accountNumber, parseInt(accountNumber))
    const filteredDocs = await userModel.GetByAcc(accountNumber);
    if (filteredDocs[0] == null) {return res.send(`No data accountNumber: ${accountNumber}`)};
    res.send(filteredDocs);
  } catch (err) {
    res.send(err)
  }
};

// CREATE ONE
const Post = async (req, res) => {
  try{
    const { userName, accountNumber, emailAddress, identityNumber } = req.body
    // const insertResult = await collection.insertOne( {userName, accountNumber, emailAddress, identityNumber} );
    await userModel.IndexCollection();
    const insertResult = await userModel.Post( userName, accountNumber, emailAddress, identityNumber );
  
    if (insertResult.keyPattern?.identityNumber === 1) {return res.send('identityNumber already exist'); }
    if (insertResult.keyPattern?.accountNumber === 1) {return res.send('accountNumber already exist'); }
    res.send({message: 'Success adding', ...insertResult});
  } catch (err) {
    console.log(err)
    res.send(err)
  }
};
// CREATE MANY
const PostMany = async (req, res) => {
  try{
    // const { userName, accountNumber, emailAddress, identityNumber } = req.body;
    await userModel.IndexCollection();
    // const insertResult = await collection.insertMany(
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
    res.send(insertResult);
  } catch (err) {
    res.send(err)
  }
};

// UPDATE A
const Put = async (req, res) => {
  try {
    const { userName, accountNumber, emailAddress, identityNumber } = req.body;
    await userModel.IndexCollection();
    const updateResult = await userModel.Put( userName, accountNumber, emailAddress, identityNumber );
    if (updateResult.matchedCount == 0) {return res.send(`No data identityNumber: ${identityNumber}`)};
    // if (updateResult[0] == null) {return res.send(`Data already has identityNumber: ${identityNumber}`)};
    // const updateResult = await collection.updateOne({ identityNumber }, { $set: { userName, accountNumber, emailAddress, identityNumber } });
    res.send({message: `Success edit identityNumber: ${identityNumber}`, ...updateResult});
  } catch (err) {
    // if (err.keyPattern.identityNumber === 1) {res.send('identityNumber already exist');
    // } else if (err.keyPattern.accountNumber === 1) {res.send('accountNumber already exist');
    // } else {
      console.log(err); 
      res.send(err); 
    // }
  }
};
// UPDATE MANY
const PutMany = async (req, res) => {
  try {
    const { userName, accountNumber, emailAddress, identityNumber } = req.body;
    await userModel.IndexCollection();
    // const updateResult = await collection.updateOne({ identityNumber }, { $set: { userName, accountNumber, emailAddress, identityNumber } });
    res.send(updateResult);
  } catch (err) {
    res.send(err)
  }
};

// DELETE A
const DeleteById = async (req, res) => {
  try{
    const { identityNumber } = req.query;    
    const deleteResult = await userModel.DeleteById(identityNumber);
    if (deleteResult.deletedCount == 0) {return res.send(`No data identityNumber: ${identityNumber}`)};
    res.send({message: `Success deleted identityNumber: ${identityNumber}`, ...deleteResult});
  } catch (err) {
    res.send(err)
  }
};

// DELETE ALL
const Deletes = async (req, res) => {
  try{
    const deleteAll = await userModel.Deletes();
    // console.log (deleteAll);
    if (deleteAll.codeName == "NamespaceNotFound") {
      return res.send({message: `Data already null`})
    } else {
      return res.send({message: `Success deleted All`, ...deleteAll});
    }
  } catch (err) {
    console.log(err); 
    res.send({message: `No data to be deleted`, ...err})
  }
};

export default { 
  Gets, 
  GetById,
  GetByAcc,
  Post,
  PostMany,
  Put,
  PutMany,
  DeleteById,
  Deletes,
  GetTest,
};