// const express = require('express');
// const router = express.Router();

// const mongoType = require('mongoose').Types;
// const Student = require('../Models/students');

// // Post Faculty API 
// router.post('/student', (req, res) => {
//     let studentObj = new Student({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//         phone: req.body.phone,
//         department: req.body.department,
//         cms: req.body.cms,

//     });

//     studentObj.save((err, doc) => {
//         if (!err) {
//             res.send(doc);
//             console.log('Student Added Successfully!');
//         } else {
//             console.log('Error while Adding Student!');
//             res.status(400).send("Internal Error", err);
//         }
//     })
// })

// // GETTING ALL STUDENTS
// router.get('/student', (req, res) => {
//     Student.find((err, docs) => {
//         if (!err) {
//             res.status(200).send(docs);
//         } else {
//             console.log('Error while getting Students!');
//             res.status(400).send("Internal Error", err);
//         }
//     });
// });

// module.exports = router;