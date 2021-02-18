require('dotenv').config();

const express = require('express');
const http = require('http');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/config');

const app = express();

// db connection
mongoose
  .connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log('Connected to mongoDB.')) // eslint-disable-line no-console
  .catch(err => console.log(err)); // eslint-disable-line no-console

// get mongoose debug messages
mongoose.set('debug', true);

// middlewares
app.use(express.json());
app.use(helmet());
if (app.get('env') === 'development') app.use(morgan('dev'));

// routes
app.use('/api', require('./routes/index'));

app.get('/', (req, res) => {
  res.send('GPA Calculator');
});

const httpServer = http.createServer(app);
const PORT = config.web_port;

httpServer.listen(PORT, err => {
  // eslint-disable-next-line no-console
  if (err) console.log(err);
  else console.log('HTTP server listening on port :', PORT); // eslint-disable-line no-console
});
