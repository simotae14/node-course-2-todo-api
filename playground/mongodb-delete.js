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

  // deleteMany
  // db.collection('Todos').deleteMany({
  //   text: 'Eat lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({
  //   text: 'Eat lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // test
  // db.collection('Users').deleteMany({
  //   name: 'Simone'
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5974a4a1f6f697111c79a6b7')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });


  // chiudo connessione con mongo server
  // db.close();
});
