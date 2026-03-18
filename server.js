import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import menuRoutes from './routes/menu.js'
import adminRoutes from './routes/admin.js'
import blogRoutes from './routes/blog.js'
import orderRoutes from './routes/orders.js'
import authRoutes from './routes/auth.js'

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
connectDB()

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Bean & Bloom API' })
})

app.use('/api', menuRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api', blogRoutes)
app.use('/api', orderRoutes)
app.use('/api/auth', authRoutes)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
