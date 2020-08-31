const io = require('socket.io')();
require('./socket')(io);
io.listen(8080);