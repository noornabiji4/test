const mongoose =require('mongoose');
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds123844.mlab.com:23844/thshappyhomes');

// Set up default mongoose connection
const mongoDB = 'mongodb://noor:noor123@ds123844.mlab.com:23844/thshappyhomes'

mongoose.connect(mongoDB);

// mongoose.connect('mongodb://localhost/test',(err)=>{ //enter ur api name
//     if(err){
//         console.log(err);
//     }else {
//         console.log("Database is connceted");
//     } 
// });
module.exports.School = require('./test')
module.exports.User = require('./users')

mongoose.Promise = Promise;