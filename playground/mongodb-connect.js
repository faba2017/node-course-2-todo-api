// const MongoClient = require('mongodb').MongoClient;

//object destructuring, pulling out property we want to use from monngodb
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
   console.log('Connected to MongoDB server');

//creating database name 'TodoApp' and inserting data into table or  collection name 'Todos'
   const db = client.db('TodoApp');
   db.collection('Todos').insertOne({
     text: 'Eat lunch',
     completed: false
   }, (err, result) => {
     if(err) {
       return console.log('Unable to insert todo', err);
     }
     console.log(JSON.stringify(result.ops, undefined, 2))
   });

// creating database name 'TodoApp' and inserting data into table or  collection name 'Users'
 // const db = client.db('TodoApp');
 // db.collection('Users').insertOne({
 //   _id: 1423,
 //   name: 'gaylord',
 //   age: 27,
 //   location: 'Cape Town'
 // }, (err, result) => {
 //   if(err){
 //   return console.log('Unable to insert users', err);
 // }
 // console.log(JSON.stringify(result.ops, undefined, 2))
 // });

client.close();
});
