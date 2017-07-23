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

  // recupero tutti i Todos
  // db.collection('Todos').find({
  //   _id: new ObjectID('5974c4c143e6bc3b654b70b5')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Impossibile recuperare i todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Impossibile recuperare i todos', err);
  // });

  db.collection('Users').find({
    name: 'Simone'
  }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Impossibile recuperare gli users', err);
  });


  // chiudo connessione con mongo server
  // db.close();
});
