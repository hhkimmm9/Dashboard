const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const verify = require('./auth/verifyToken')

const Post = require('../models/postModel')

const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/uploads/images/products'))
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage })

// GET REQUEST
router.get('/', async (req, res) => {
  await Post.find()
    .then((data) => res.send(data))
    .catch((err) => res.status(400).send('Error ' + err))
})

router.get('/detail/:id', async (req, res) => {
  await Post.find({ _id: req.params.id })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => res.status(400).send('Error ' + err))
})

// POST REQUEST
// router.post('/upload', upload.single('image'), (req, res) => {
router.post('/upload', verify, upload.single('image'), (req, res) => {
  const token = req.header('auth-token')
  const userId = jwt.verify(token, process.env.TOKEN_SECRET)

  const newPost = new Post({
    image: req.file.path,
    title: req.body.title,
    price: req.body.price,
    category: req.body.category,
    description: req.body.description,
    userId: userId._id,
    date: Date.now(),
  })

  newPost
    .save()
    .then((data) => res.send(data))
    .catch((err) => res.status(400).send('Error ' + err))
})

router.delete('/delete/:id', verify, (req, res) => {
  const token = req.header('auth-token')
  const userId = jwt.verify(token, process.env.TOKEN_SECRET)

  Post.deleteOne({ _id: req.params.id, userId: userId._id })
    .then((data) => res.send(data))
    .catch((err) => res.status(400).send('Error: ' + err))
})

module.exports = router
