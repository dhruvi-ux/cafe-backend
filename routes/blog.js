import express from 'express'
import Blog from '../models/Blog.js'

const router = express.Router()

// Get all blogs
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 })
    res.json(blogs)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error: error.message })
  }
})

// Get published blogs only
router.get('/blogs/published', async (req, res) => {
  try {
    const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 })
    res.json(blogs)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error: error.message })
  }
})

// Get single blog
router.get('/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' })
    }
    // Increment views
    blog.views += 1
    await blog.save()
    res.json(blog)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog', error: error.message })
  }
})

// Create blog
router.post('/blogs', async (req, res) => {
  try {
    const blog = new Blog(req.body)
    await blog.save()
    res.status(201).json(blog)
  } catch (error) {
    res.status(400).json({ message: 'Error creating blog', error: error.message })
  }
})

// Update blog
router.put('/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(blog)
  } catch (error) {
    res.status(400).json({ message: 'Error updating blog', error: error.message })
  }
})

// Delete blog
router.delete('/blogs/:id', async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id)
    res.json({ message: 'Blog deleted' })
  } catch (error) {
    res.status(400).json({ message: 'Error deleting blog', error: error.message })
  }
})

export default router
