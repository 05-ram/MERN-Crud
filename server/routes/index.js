const express = require('express');
const { createUser, userList, updateUser, updatedUser, deleteUser } = require('../controller/empController');
const router = express.Router();

router.get('/', userList)
router.post('/create', createUser);
router.get('/update/:id', updateUser);
router.put('/updated/:id', updatedUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;