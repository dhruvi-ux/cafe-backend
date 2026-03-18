import express from 'express'
import Order from '../models/Order.js'

const router = express.Router()

// Get all orders
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 })
    res.json(orders)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error: error.message })
  }
})

// Get single order
router.get('/orders/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
    if (!order) {
      return res.status(404).json({ message: 'Order not found' })
    }
    res.json(order)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order', error: error.message })
  }
})

// Create order
router.post('/orders', async (req, res) => {
  try {
    const order = new Order(req.body)
    await order.save()
    res.status(201).json(order)
  } catch (error) {
    res.status(400).json({ message: 'Error creating order', error: error.message })
  }
})

// Update order status
router.put('/orders/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(order)
  } catch (error) {
    res.status(400).json({ message: 'Error updating order', error: error.message })
  }
})

// Delete order
router.delete('/orders/:id', async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id)
    res.json({ message: 'Order deleted' })
  } catch (error) {
    res.status(400).json({ message: 'Error deleting order', error: error.message })
  }
})

export default router
