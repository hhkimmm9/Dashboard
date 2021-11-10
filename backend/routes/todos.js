const express = require('express')
const router = express.Router()
const Todo = require('../models/todoModel')
const verify = require('./auth/verifyToken')

const jwt = require('jsonwebtoken')

// GET REQUEST
router.get('/', verify, async (req, res) => {
  const token = req.header('auth-token')
  const userId = jwt.verify(token, process.env.TOKEN_SECRET)

  await Todo.find({ userId: userId._id })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json('Error ' + err))
})

// POST REQUEST
router.post('/add', verify, (req, res) => {
  const token = req.header('auth-token')
  const userId = jwt.verify(token, process.env.TOKEN_SECRET)

  const newTodo = new Todo({
    title: req.body.title,
    description: req.body.description,
    flag: req.body.flag,
    userId: userId._id,
  })

  newTodo
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json('Error ' + err))
})

// DELETE REQUEST
router.delete('/delete/:id', verify, (req, res) => {
  const token = req.header('auth-token')
  const userId = jwt.verify(token, process.env.TOKEN_SECRET)

  Todo.deleteOne({ _id: req.params.id, userId: userId._id })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).send('Error: ' + err))
})

// update
router.patch('/patch/:id', verify, (req, res) => {
  const token = req.header('auth-token')
  const userId = jwt.verify(token, process.env.TOKEN_SECRET)

  Todo.updateOne(
    { _id: req.params.id, userId: userId._id },
    { flag: req.body.flag }
  )
    .then((data) => res.json(data))
    .catch((err) => res.status(400).send('Error: ' + err))
})

module.exports = router
