const app = require('./config/server');
const http = require('http');

const server = http.createServer(app);

server.listen(3000, () => {
    console.log(`Server is running!`);
});