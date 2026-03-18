import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  customer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String },
    zipCode: { type: String }
  },
  items: [{
    _id: String,
    name: String,
    price: Number,
    quantity: Number,
    size: String,
    customizations: [String],
    image: String,
    desc: String
  }],
  totalPrice: { type: Number, required: true },
  totalItems: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'preparing', 'ready', 'delivered', 'cancelled'],
    default: 'pending'
  },
  paymentMethod: {
    type: String,
    enum: ['cod', 'upi'],
    default: 'cod'
  },
  notes: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { timestamps: true })

export default mongoose.model('Order', orderSchema)
