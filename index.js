const app = require('./app');
const {createConnection} = require('./db');

createConnection();
app.listen(3000);
console.log('Running server on port 3000');