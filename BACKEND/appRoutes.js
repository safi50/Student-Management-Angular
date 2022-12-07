var express = require("express");
var router = express.Router();
var Student = require('./Models/students');

router.post('/add', (req, res, next) => {
    console.log(req.body);
    var newStudent = new Student({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        department: req.body.department,
        _id: req.body._id
    });
    // res.status(200).send({ message: 'Post is Working' });
    newStudent.save((err, doc) => {
        if (!err) {
            res.send(doc);
            // res.status(200).send({ message: 'Post is Working' });

        } else {
            console.log('Error while Adding Student!');
            // res.status(400).send("Internal Error", err);
        }
    })
});

// GETTING ALL STUDENTS
router.get('/get', (req, res, next) => {
    Student.find({}, (err, students) => {
        if (err) {
            res.status(500).json({
                errmsg: err
            });
        }
        res.status(200).json({
            msg: students
        });
    });
});


//UPDATE
router.put('/update', (req, res, next) => {
    Student.findById(req.body._id, (err, student) => {
        if (err) {
            // res.status(500).json({
            //     errmsg: err
            // });
            console.log(err);
        }
        student.name = req.body.name;
        student._id = req.body._id;
        student.email = req.body.email;
        student.password = req.body.password;
        student.phone = req.body.phone;
        student.department = req.body.department;

        student.save((err, student) => {
            if (err) {
                // res.status(500).json({
                //     errmsg: err
                // });
                console.log(err);
            }
            res.json({
                msg: student
            });
            // res.status(200).json({
            //     msg: student
            // });

        });
    });
});

//DELETE
router.delete('/delete/:id', (req, res, next) => {
    console.log("In Delete API");
    console.log(req.params.id);
    Student.findOneAndRemove({ _id: req.params.id }
        , (err, student) => {
            if (err) {
                // res.status(500).json({
                //     errmsg: err
                // });
                console.log(err);
            }

            res.json({
                msg: student
            });
        });
});

module.exports = router;
