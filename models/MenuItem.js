import mongoose from 'mongoose'

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  rating: { type: Number, default: 4.5 },
  available: { type: Boolean, default: true }
}, { timestamps: true })

export default mongoose.model('MenuItem', menuItemSchema)
