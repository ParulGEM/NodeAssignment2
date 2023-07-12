const mongoose = require('mongoose');

const userAppSchema = mongoose.Schema({
    postName: {
        type: String,
        // required: true,
    },
    postGender: {
        type: String,
        // enum: ['Male', 'Female'],
        // required: true,
    },
    postEmail: {
        type: String,
        // required: true,
    },
    postMobile: {
        type: String,
        // required: true,
    },
    postCategory: {
        type: String,
        // enum: ['General', 'SC/ST', 'OBC'],
        // required: true,
    },
    postProPic: {
        type: String,
        // required: true,
    }
},
    {
        timestamps: true,
    }
);
module.exports = mongoose.model('UserAppData', userAppSchema);