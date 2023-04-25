// const express = require('express');
// const app = express();

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://dolatapiotrek:HGEfx1Hboru5Cc1m@cluster0.dlqgsms.mongodb.net/hikerscom";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("hikerscom").collection("hikers");
//   collection.find().toArray((err, docs) => {
//     res.json(docs); // zwróć wyniki w formacie JSON
//   });
// });


// app.get('/summary', (req, res) => {
//     const db = client.db('hikerscom'); // podaj nazwę swojej bazy danych
//     const collection = db.collection('hikers'); // podaj nazwę swojej kolekcji
    
//     collection.find().toArray((err, result) => {
//       if (err) throw err;
      
//       res.send(result);
//     });
//   });

// const express = require('express');
// const app = express();
// const mongoose = require('mongoose'); //plugin do obsługi mongodb
// const ejs = require('ejs');

// app.set('view engine', 'ejs');
// mongoose.connect('mongodb+srv://dolatapiotrek:HGEfx1Hboru5Cc1m@cluster0.dlqgsms.mongodb.net/hikerscom', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }).then(() => {
//     console.log('Connected to MongoDB');
//   }).catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

//   consthikerSchema

// app.get('/summary', (req, res) => {
//   let name = 'Marina';
//     res.render('summary', {
//       userName: name 
//     });
// })

// app.listen(3000, function() {
//     console.log('server is run on port 4000')
// })


// var MongoClient = require('mongodb').MongoClient;
// var express = require('express');
// var app = express();

// var url = 'mongodb+srv://dolatapiotrek:HGEfx1Hboru5Cc1m@cluster0.dlqgsms.mongodb.net/hikerscom';

// MongoClient.connect(url, function(err, client) {
//   db = client.db('hikerscom');
// });


// app.get('/summary', function(req, res) {
//     db.collection('hikers').find({}).toArray(function(err, docs) {
//       res.send(docs);
//     });
//   })




// const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
// const app = express();

// // konfiguracja połączenia z bazą danych
// const mongoClient = new MongoClient("mongodb+srv://dolatapiotrek:HGEfx1Hboru5Cc1m@cluster0.dlqgsms.mongodb.net/hikerscom", { useUnifiedTopology: true });
// mongoClient.connect((err, client) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   const db = client.db("hikerscom");
//   const collection = db.collection("hikers");

//   // definicja endpointu /dane
//   app.get('/dane', (req, res) => {
//     collection.find({}).toArray((err, data) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       res.json(data);
//     });

//   });
// });

// app.listen(3000, () => {
//   console.log('Serwer uruchomiony na porcie 3000');
// });