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

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('597621939c9882998d843ab6')
  // }, {
  //   $set : {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5977657dcf7f4042bb1d4620')
  }, {
    $set : {
      name: 'Andrew'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });



  // chiudo connessione con mongo server
  // db.close();
});
