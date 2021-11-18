// From Express
const express = require('express')
const router = express.Router()
const path = require('path')

// Authentication
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const verify = require('./verifyToken')
const { registerValidation, loginValidation } = require('./validation')

// Form-data parser
const multer = require('multer')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/uploads/images/userProfile'))
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})
const upload = multer({ storage })

// DB schema
const User = require('../../models/userModel')

// ROUTES ---------------------------------------------------------------------
//
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
  const newUser = new User({
    profilePicture: req.file.filename,
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  })

  // Store the created user into the DB.
  try {
    const savedUser = await newUser.save()
    res.send({ userInfo: savedUser })
  } catch (err) {
    res.status(400).send('Error ' + err)
  }
})

//
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

  try {
    res.header('auth-token', token)

    res.send({
      isSignedIn: true,
      authToken: token,
      userInfo: user,
    })
  } catch (err) {
    res.send('login failed.')
  }
})

//
router.put(
  '/profile/edit',
  verify,
  // no error even if updatedProfilePicture is not in the req.
  upload.single('updatedProfilePicture'),
  async (req, res) => {
    const token = req.header('auth-token')
    const userId = jwt.verify(token, process.env.TOKEN_SECRET)

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(
      req.body.email + req.body.password,
      salt
    )

    const updProfile = {
      profilePicture:
        req.body.withProfilePicture === 'true'
          ? req.file.filename
          : req.body.profilePicture,
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
    }

    try {
      // TODO: two operations in one try block?
      const updUser = await User.findOneAndUpdate({ _id: userId }, updProfile)

      res.send({ userInfo: updProfile })
    } catch (err) {
      res.send('Profile update failed.' + err)
    }
  }
)

module.exports = router
