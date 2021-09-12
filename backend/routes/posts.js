const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const verify = require('./verifyToken')
// const multer = require('multer')
// const path = require('path')

const Post = require('../models/postModel')
const app = require('../app')

// // Set storage engine
// var storage = multer.diskStorage({
//   destination: './public/images',
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname + '-' + Date.now() + path.extname(file.originalname)
//     )
//   },
// })

// // Init upload
// const upload = multer({
//   storage: storage,
// }).single('myImage')

// GET REQUEST
router.get('/', async (req, res) => {
  await Post.find()
    .then((data) => res.send(data))
    .catch((err) => res.status(400).send('Error ' + err))
})

router.get('/detail/:id', async (req, res) => {
  await Post.find({ _id: req.params.id })
    .then((data) => res.send(data))
    .catch((err) => res.status(400).send('Error ' + err))
})

// POST REQUEST
router.post('/upload', verify, (req, res) => {
  const token = req.header('auth-token')
  const userId = jwt.verify(token, process.env.TOKEN_SECRET)

  const newPost = new Post({
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

  // Tried to upload a post with a picture
  // upload(req, res, (err) => {
  //   if (err) {
  //     res.status(400)
  //   } else {
  //     const newPost = new Post({
  //       productImage: req.file,
  //       title: req.body.title,
  //       price: req.body.price,
  //       category: req.body.category,
  //       description: req.body.description,
  //       // userId:
  //       date: Date.now(),
  //     })

  //     newPost
  //       .save()
  //       .then((data) => res.send(data))
  //       .catch((err) => res.status(400).send('Error: ' + err))
  //   }
  // })
})

router.delete('/delete/:id', verify, (req, res) => {
  const token = req.header('auth-token')
  const userId = jwt.verify(token, process.env.TOKEN_SECRET)

  Post.deleteOne({ _id: req.params.id, userId: userId._id })
    .then((data) => res.send(data))
    .catch((err) => res.status(400).send('Error: ' + err))
})

module.exports = router
