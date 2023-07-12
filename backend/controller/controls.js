
const userAppSchema = require('../model/userAppSchema');

// get All user records get request
const getAllUser = (req, res) => {
    userAppSchema.find({})
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(500).json({ message: err })
        })
}

// create a new user record post request
const creatUser = (req, res) => {
    console.log(req.body);
    const { postName, postGender, postEmail, postMobile, postCategory, postProPic } = req.body;

    const newUser = new userAppSchema({
        postName: postName,
        postGender: postGender,
        postEmail: postEmail,
        postMobile: postMobile,
        postCategory: postCategory,
        postProPic: postProPic
    });

    newUser.save()
        .then(() => {
            res.status(201).json({ message: "User created successfully" })
        }
        )
        .catch((err) => {
            res.status(500).json({ message: err })
        }
        )
}


// delete a user record delete request
const deleteUser = (req, res) => {
    const id = req.params.id;
    userAppSchema.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({ message: "User deleted successfully" })
        })
        .catch((err) => {
            res.status(500).json({ message: err })
        })
}

// update a user record put request
const updateUser = (req, res) => {
    const id = req.params.id;
    const { postName, postGender, postEmail, postMobile, postCategory, postProPic } = req.body;

    userAppSchema.findByIdAndUpdate({ _id: id }, {
        postName: postName,
        postGender: postGender,
        postEmail: postEmail,
        postMobile: postMobile,
        postCategory: postCategory,
        postProPic: postProPic
    })

        .then(() => {
            res.status(200).json({ message: "User updated successfully" })
        })
        .catch((err) => {
            res.status(500).json({ message: err })
        })
}


// get request to fetch 1 user from server
const getOneUser = (req, res) => {
    const id = req.params.id;
    userAppSchema.findById({ _id: id })
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(500).json({ message: err })
        })
}

module.exports = { creatUser, getAllUser, deleteUser , updateUser, getOneUser };