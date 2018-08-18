// const MongoClient = require('mongodb').MongoClient;

//object destructuring, pulling out property we want to use from monngodb
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
   console.log('Connected to MongoDB server');

//delete Many
//  client.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

//delete One
// client.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

//find one and delete
// client.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });


 // client.collection('Users').deleteMany({name: 'steve'});

client.collection('Users').findOneAndDelete({
  _id: new ObjectID("5b788c9ed52e3b09241c513e")
}).then((result) => {
  console.log(JSON.stringify(result, undefined, 2));
});

 //  client.close();
});
