import express from 'express'
import MenuItem from '../models/MenuItem.js'
import Category from '../models/Category.js'

const router = express.Router()

// Get all categories with their items
router.get('/menu', async (req, res) => {
  try {
    const categories = await Category.find()
    const result = {}

    for (const category of categories) {
      const items = await MenuItem.find({ category: category.categoryId })
      result[category.categoryId] = {
        name: category.name,
        icon: category.icon,
        badge: category.badge,
        thought: category.thought,
        description: category.description,
        addOns: category.addOns,
        items: items
      }
    }

    res.json(result)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching menu', error: error.message })
  }
})

// Get specific category
router.get('/menu/:category', async (req, res) => {
  try {
    const { category } = req.params
    const categoryData = await Category.findOne({ categoryId: category })
    
    if (!categoryData) {
      return res.status(404).json({ message: 'Category not found' })
    }

    const items = await MenuItem.find({ category })
    
    res.json({
      name: categoryData.name,
      icon: categoryData.icon,
      badge: categoryData.badge,
      thought: categoryData.thought,
      description: categoryData.description,
      addOns: categoryData.addOns,
      items: items
    })
  } catch (error) {
    res.status(500).json({ message: 'Error fetching category', error: error.message })
  }
})

// Add new menu item (for admin)
router.post('/menu-items', async (req, res) => {
  try {
    const menuItem = new MenuItem(req.body)
    await menuItem.save()
    res.status(201).json(menuItem)
  } catch (error) {
    res.status(400).json({ message: 'Error creating menu item', error: error.message })
  }
})

// Update menu item (for admin)
router.put('/menu-items/:id', async (req, res) => {
  try {
    const menuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(menuItem)
  } catch (error) {
    res.status(400).json({ message: 'Error updating menu item', error: error.message })
  }
})

// Delete menu item (for admin)
router.delete('/menu-items/:id', async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id)
    res.json({ message: 'Menu item deleted' })
  } catch (error) {
    res.status(400).json({ message: 'Error deleting menu item', error: error.message })
  }
})

export default router
