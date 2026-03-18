import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
  categoryId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  icon: { type: String },
  badge: { type: String },
  thought: { type: String },
  description: { type: String },
  addOns: [{ type: String }]
}, { timestamps: true })

export default mongoose.model('Category', categorySchema)
