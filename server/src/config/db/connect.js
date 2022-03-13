var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Login_Practices', {useNewUrlParser: true, useNewUrlParser: true,  useUnifiedTopology: true});
var db = mongoose.connection;
//error
db.on('error', function(err) {
  if (err) console.log(err)
});
//connected
db.once('open', function() {
  console.log("Database connected !");
});