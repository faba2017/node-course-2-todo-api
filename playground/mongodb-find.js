// const MongoClient = require('mongodb').MongoClient;

//object destructuring, pulling out property we want to use from monngodb
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
   console.log('Connected to MongoDB server');

  //to fetch data from the database
 //  client.collection('Todos').find({
 //    _id: new ObjectID('5b75b135088f3e1a18fdac76')
 //  }).toArray().then((docs) => {
 //  console.log('Todos');
 //  console.log(JSON.stringify(docs, undefined, 2));
 //  }, (err) => {
 //    console.log('Unable to fetch todos', err);
 //  });

//counting  how many "Todos" items we have in the database
 // client.collection('Todos').find().count().then((count) => {
 // console.log(`Todos count: ${count}`);
 // }, (err) => {
 //   console.log('Unable to fetch todos', err);
 // });


  client.collection('Users').find({name: 'fabrice'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });

 //  client.close();
});
