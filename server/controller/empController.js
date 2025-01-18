const asyncHandler = require('express-async-handler');
const emp = require('../model/empModel')

const userList = asyncHandler(async (req, res) => {
    await emp.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err));
})

const createUser = asyncHandler(async (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.json({ message: "All fields are mandatory!" })
    }
    emp.create({
        name, email, age
    })

    return res.json({ message: 'Employee added successfully' })
})

const updateUser = asyncHandler(async (req, res) => {
    const id = req.params.id;

    try {
        const user = await emp.findById({ _id: id });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    } catch (err) {
        res.status(400).json({ message: "Invalid ID format" });
    }
});

const updatedUser = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const updated = await emp.findByIdAndUpdate({ _id: id }, { name: req.body.name, email: req.body.email, age: req.body.age })
    res.json(updated)
})

const deleteUser = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const deleted = await emp.findByIdAndDelete({ _id: id });
    res.json(deleted)
})

module.exports = { createUser, userList, updateUser, updatedUser, deleteUser };