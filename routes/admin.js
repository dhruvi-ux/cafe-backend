import express from 'express'
import MenuItem from '../models/MenuItem.js'
import User from '../models/User.js'
import Contact from '../models/Contact.js'
import Category from '../models/Category.js'
import Order from '../models/Order.js'

const router = express.Router()

// ===== ORDERS ROUTES =====
router.post('/orders', async (req, res) => {
  const order = new Order(req.body)
  try {
    const newOrder = await order.save()
    res.status(201).json(newOrder)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 })
    res.json(orders)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.get('/orders/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
    if (!order) return res.status(404).json({ message: 'Order not found' })
    res.json(order)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.put('/orders/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(order)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.delete('/orders/:id', async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id)
    res.json({ message: 'Order deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// ===== CATEGORIES ROUTES =====
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find()
    res.json(categories)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// ===== MENU ITEMS ROUTES =====
router.get('/menu-items', async (req, res) => {
  try {
    const items = await MenuItem.find()
    res.json(items)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.post('/menu-items', async (req, res) => {
  const item = new MenuItem(req.body)
  try {
    const newItem = await item.save()
    res.status(201).json(newItem)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.put('/menu-items/:id', async (req, res) => {
  try {
    const item = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(item)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.delete('/menu-items/:id', async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id)
    res.json({ message: 'Item deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// ===== USERS ROUTES =====
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password')
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('-password')
    res.json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.delete('/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.json({ message: 'User deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// ===== CONTACTS ROUTES =====
router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json(contacts)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.post('/contacts', async (req, res) => {
  const contact = new Contact(req.body)
  try {
    const newContact = await contact.save()
    res.status(201).json(newContact)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.put('/contacts/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(contact)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.delete('/contacts/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id)
    res.json({ message: 'Contact deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// ===== DASHBOARD STATS =====
router.get('/stats', async (req, res) => {
  try {
    const totalMenuItems = await MenuItem.countDocuments()
    const totalUsers = await User.countDocuments()
    const totalContacts = await Contact.countDocuments()
    const recentItems = await MenuItem.find().sort({ createdAt: -1 }).limit(5)
    const recentContacts = await Contact.find().sort({ createdAt: -1 }).limit(5)
    
    res.json({
      totalMenuItems,
      totalUsers,
      totalContacts,
      totalMessages: totalContacts,
      totalRevenue: 45230,
      recentItems,
      recentContacts
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
