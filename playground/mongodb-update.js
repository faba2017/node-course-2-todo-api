// const MongoClient = require('mongodb').MongoClient;

//object destructuring, pulling out property we want to use from monngodb
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
   console.log('Connected to MongoDB server');

//to update the value of 'complete' from false to true

// client.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5b78831eba807c14f8b1669e'),
// }, {
//   $set:{
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }). then((result) => {
//   console.log(result);
// })


// to update the name of the name from gaylord to Fabrice and increament the age by 1
client.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5b788ca1aff1481b8c6dd72b'),
}, {
  $set:{
    name: 'Fabrice'
  },
  $inc:{
    age: 1
  }
}, {
  returnOriginal: false
}). then((result) => {
  console.log(result);
})
 //  client.close();
});
