// const mongoose = require('mongoose');
// const { MONGO_URI } = process.env;


// // USED FOR CONNECTING TO MONGO DB 
// exports.connect = () => {
//     mongoose.connect(MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//         .then(() => {
//             console.log('Connected to MongoDB');
//         })
//         .catch((error) => {
//             console.log('Error connecting to MongoDB: ', error.message);
//             process.exit(1);
//         })
// } 