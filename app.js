var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/qlNghienCuuKhoaHoc');

var config = require('./config');

require('./src/front-end/server/frontend-server-app').startServer(config);
require('./src/back-end/server/backend-server-app').startServer(config);

