const express = require('express');
const winston = require('winston');

const app = express();

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), err => {
  if (err) {
    winston.error(err);
    process.exit(1);
  }
  winston.info(`listening on port ${app.get('port')}`);
});
