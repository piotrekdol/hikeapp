//definiuję serwer backendowy express który wykorzystuję do wysyłania danych z formularza do bazy danych
const express = require('express');
const app = express();
const mongoose = require('mongoose'); //plugin do obsługi mongodb
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
//łączę się z mongodb
mongoose.connect('mongodb+srv://dolatapiotrek:HGEfx1Hboru5Cc1m@cluster0.dlqgsms.mongodb.net/hikerscom', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

//struktura JSONa zgodna z polami formularza
const notesSchema = {
    startTrip: String,
    numberOfKilometers: String,
    accomodation: String,
    numberOfPersons: Number,
    name: String,
    email: String,
    color: String,
    animal: String
}

const Note = mongoose.model('Hiker', notesSchema); //do jakiej kolekcji w bazie mają zapisywać się dane

// definicja endpointu /dane
app.get('/dane', (req, res) => {
  Note.find()
  .sort({createdAt: -1})
    .then((dane) => {
      res.json(dane);
      // res.sendFile(__dirname + '/src/result.html');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    });
});


//endpointy - definuiją na jakie podstrony mają odsłyłać przyciski w formularzu
app.post('/thankyou', function(req, res) {
    let newNote = new Note ({
        startTrip: req.body.startTrip,
        numberOfKilometers: req.body.numberOfKilometers,
        accomodation: req.body.accomodation,
        numberOfPersons: req.body.numberOfPersons,
        name: req.body.name,
        email: req.body.email,
        color: req.body.color,
        animal: req.body.animal
    });
    newNote.save();
    res.sendFile(__dirname + '/src/thankyou.html');
})

app.post('/step2', function(req, res) {
    res.sendFile(__dirname + '/src/step2.html');
  });



// app.post('/api/thankyou', function(req, res) {
//     res.sendFile(__dirname + '/src/thankyou.html');
//   });  


//port na jakim działa serwer  
app.listen(3000, function() {
    console.log('server is run on port 3000')
})

