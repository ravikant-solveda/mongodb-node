const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let _db; 

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://ravikant:vMhWh29dPb4viwdd@cluster0.czucbsf.mongodb.net/'
  )
    .then(client => {
      _db = client.db('shop');
      console.log('Connected!');
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb  = () =>{
  if(_db){
    return _db;
  }
  return 'No Databse found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
