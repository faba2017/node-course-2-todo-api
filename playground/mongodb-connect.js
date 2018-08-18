// const MongoClient = require('mongodb').MongoClient;

//object destructuring, pulling out property we want to use from monngodb
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
   console.log('Connected to MongoDB server');

   // const db = client.db('TodoApp');
   // db.collection('Todos').insertOne({
   //   text: 'something to do',
   //   completed: false
   // }, (err, result) => {
   //   if(err) {
   //     return console.log('Unable to insert todo', err);
   //   }
   //   console.log(JSON.stringify(result.ops, undefined, 2))
   // });

 const db = client.db('Users');
 db.collection('Users').insertOne({
   _id: 123,
   name: 'fabrice',
   age: 25,
   location: 'Cape Town'
 }, (err, result) => {
   if(err){
   return console.log('Unable to insert users', err);
 }
 console.log(JSON.stringify(result.ops, undefined, 2))
 });

client.close();
});
