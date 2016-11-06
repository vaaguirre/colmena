var express = require('express');
var app = express();
var cors = require('cors');
var morgan = require('morgan');
var config = require('./config');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//Enabling CORS and Watch Logs
app.use(cors());
app.use(morgan('dev'));
//Database Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/swt2016')
//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Router
var searchRouter = require('./router/searchRouter')(express);
app.use('/api', searchRouter);
var categoryRouter = require('./router/categoryRouter')(express);
app.use('/api', categoryRouter);
var authRouter = require('./router/authRouter')(express);
app.use('/api', authRouter);
var requestRouter = require('./router/requestRouter')(express);
app.use('/api', requestRouter);
app.listen(config.PORT, function(){
  console.log('Server Running on', config.PORT);
})
