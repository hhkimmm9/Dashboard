const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema(
  {
    productImage: {
      data: Buffer,
    },
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    category: {
      type: String,
      default: 'Others',
    },
    description: {
      type: String,
    },
    userId: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Post', postSchema)
