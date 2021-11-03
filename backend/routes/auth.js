const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')

const { registerValidation, loginValidation } = require('../validation')

const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './uploads/')
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  },
})

const upload = multer({ storage })

router.post('/register', upload.single('profilePicture'), async (req, res) => {
  // Validating the data before letting a user register their account.
  const { error } = registerValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  // Checking if the user is already in the DB.
  const emailExist = await User.findOne({ email: req.body.email })
  if (emailExist)
    return res.status(400).send('Email already exists. Try different one.')

  // If validation succeeded and no duplicated users found in the DB, hash the given password.
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(
    req.body.email + req.body.password,
    salt
  )

  // Create a new user.
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  })

  // Store the created user into the DB.
  try {
    const savedUser = await user.save()
    res.send('User successfully created.')
  } catch (err) {
    res.status(400).send('Error ' + err)
  }
})

router.post('/login', async (req, res) => {
  const { error } = loginValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  const user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(401).send('Sorry, your email is invalid.')

  const validPassword = await bcrypt.compare(
    req.body.email + req.body.password,
    user.password
  )
  if (!validPassword)
    return res.status(400).send('Sorry, your password is invalid.')

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: '15d',
  })

  res.header('auth-token', token)

  res.send({
    isSignedIn: true,
    authToken: token,
    userInfo: user,
  })
})

module.exports = router
