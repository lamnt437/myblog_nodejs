const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const homeRouter = require('./routes/home');
const meetingRouter = require('./routes/meeting');

// setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.static("express"));
// default URL for website

// app.use('/home', function(req,res){
//   res.sendFile(path.join(__dirname+'/express/index.html'));
//   //__dirname : It will resolve to your project folder.
// });

// app.use('/about', function(req,res) {
//   res.send('About')
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.use('/meeting', meetingRouter);

// app.post('/meeting/signature', (req, res) => {
//     const meetConfig = req.body.meetConfig;

//     meetConfig.push();
//     res.send();
// });

const server = http.createServer(app);
const port = 3000;

var MongoClient = require('mongodb').MongoClient;
const { ReplSet } = require('mongodb');
var url = "mongodb://localhost:27017/mydb";

server.listen(port);
console.debug('Server listening on port ' + port);