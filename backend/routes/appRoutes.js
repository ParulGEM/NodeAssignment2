const express = require('express');
const router = express.Router();


const {
    creatUser,
    getAllUser,
    deleteUser,
    updateUser,
    getOneUser
} = require('../controller/controls');

router.use(express.json());



router.post('/create-user', creatUser);
router.get('/all-user', getAllUser)
router.delete('/delete/:id', deleteUser);
router.get('/get-one-for-update/:id', getOneUser);
router.put('/update/:id', updateUser);




module.exports = router;