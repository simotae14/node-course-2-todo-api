//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// connetto al server mongo
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Impossibile collegarsi al server MongoDB');
  }
  console.log('Connesso al server MongoDB');

  // creo un nuovo Document nella collection Todos
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Impossibile inserire il todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // inserisco un nuovo document dentro la collection User
  // con pty name, age, location
  // db.collection('Users').insertOne({
  //   name: 'Simone',
  //   age: '33',
  //   location: 'Lissone'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Impossibile inserire l\'utente', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });



  // chiudo connessione con mongo server
  db.close();
});
