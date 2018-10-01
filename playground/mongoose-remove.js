const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//remove all 'todo' on the database collection
Todo.remove({}).then((result) => {
  console.log(result)
});
//this one works the same the same as findByIdAndRemove
Todo.findOneAndRemove({_id: '57c4810bd35fcb6fda1154'}).then(() => {

});


//remove one specific 'todo' in a database collection
Todo.findByIdAndRemove('57c4810bd35fcb6fda1154').then((todo) => {
  console.log();
});
