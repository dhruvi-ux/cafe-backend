import mongoose from 'mongoose'
import dotenv from 'dotenv'
import MenuItem from '../models/MenuItem.js'
import Category from '../models/Category.js'

dotenv.config()

const menuData = {
  coffee: {
    name: 'Hot Coffee',
    icon: '☕',
    badge: 'MAIN ATTRACTION',
    thought: '"A cup of coffee is a moment of calm in a busy day"',
    description: 'Our signature hot coffee selection',
    addOns: ['Extra shot', 'Oat / Almond milk', 'Vanilla / Caramel syrup'],
    items: [
      { name: 'Espresso', desc: 'Bold, rich, and perfectly balanced', price: 180, image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80', rating: 4.8 },
      { name: 'Americano', desc: 'Smooth espresso with water', price: 160, image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=400&q=80', rating: 4.7 },
      { name: 'Cappuccino', desc: 'Velvety foam with rich espresso', price: 190, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80', rating: 4.8 },
      { name: 'Latte', desc: 'Smooth espresso with steamed milk', price: 200, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80', rating: 4.9 },
      { name: 'Flat White', desc: 'Microfoam espresso perfection', price: 210, image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&q=80', rating: 4.8 },
      { name: 'Mocha', desc: 'Espresso, steamed milk, and chocolate', price: 240, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80', rating: 4.9 },
      { name: 'Macchiato', desc: 'Espresso marked with a touch of milk foam', price: 195, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80', rating: 4.7 },
      { name: 'Cortado', desc: 'Equal parts espresso and steamed milk', price: 185, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80', rating: 4.8 },
    ]
  },
  coldCoffee: {
    name: 'Cold Coffee',
    icon: '🧊',
    badge: 'REFRESHING',
    thought: '"Cool down with our iced selections"',
    description: 'Perfect for warm days',
    addOns: ['Extra shot', 'Oat / Almond milk', 'Vanilla / Caramel syrup'],
    items: [
      { name: 'Iced Latte', desc: 'Smooth espresso with cold milk', price: 200, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80', rating: 4.8 },
      { name: 'Iced Americano', desc: 'Refreshing double shot over ice', price: 170, image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=400&q=80', rating: 4.7 },
      { name: 'Cold Brew', desc: 'Smooth cold brewed coffee', price: 190, image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=400&q=80', rating: 4.9 },
      { name: 'Frappé', desc: 'Blended coffee with ice cream', price: 220, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80', rating: 4.8 },
      { name: 'Classic Cold Coffee', desc: 'Traditional cold coffee blend', price: 150, image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=400&q=80', rating: 4.6 },
      { name: 'Iced Cappuccino', desc: 'Chilled cappuccino with ice', price: 210, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80', rating: 4.8 },
      { name: 'Iced Mocha', desc: 'Cold mocha with chocolate and ice', price: 240, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80', rating: 4.9 },
      { name: 'Affogato', desc: 'Espresso poured over vanilla ice cream', price: 200, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80', rating: 4.9 },
    ]
  },
  tea: {
    name: 'Tea & Warm Drinks',
    icon: '🍵',
    badge: 'SOOTHING BLENDS',
    thought: '"For non-coffee lovers 💛"',
    description: 'Warm and comforting beverages',
    addOns: ['Honey', 'Ginger', 'Lemon'],
    items: [
      { name: 'Masala Chai', desc: 'Aromatic Indian spiced tea', price: 120, image: 'https://images.unsplash.com/photo-1597318972826-c0e0b0e8d00b?w=400&q=80', rating: 4.8 },
      { name: 'Green Tea', desc: 'Fresh and healthy green tea', price: 130, image: 'https://images.unsplash.com/photo-1597318972826-c0e0b0e8d00b?w=400&q=80', rating: 4.7 },
      { name: 'Lemon Tea', desc: 'Refreshing lemon infused tea', price: 110, image: 'https://images.unsplash.com/photo-1597318972826-c0e0b0e8d00b?w=400&q=80', rating: 4.6 },
      { name: 'Herbal Tea', desc: 'Calming herbal blend', price: 140, image: 'https://images.unsplash.com/photo-1597318972826-c0e0b0e8d00b?w=400&q=80', rating: 4.7 },
      { name: 'Hot Chocolate', desc: 'Rich and creamy hot chocolate', price: 160, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80', rating: 4.9 },
      { name: 'Oolong Tea', desc: 'Semi-oxidized premium oolong', price: 150, image: 'https://images.unsplash.com/photo-1597318972826-c0e0b0e8d00b?w=400&q=80', rating: 4.8 },
      { name: 'Chamomile Tea', desc: 'Calming chamomile with honey', price: 130, image: 'https://images.unsplash.com/photo-1597318972826-c0e0b0e8d00b?w=400&q=80', rating: 4.7 },
      { name: 'Ginger Turmeric Tea', desc: 'Warming ginger and turmeric blend', price: 140, image: 'https://images.unsplash.com/photo-1597318972826-c0e0b0e8d00b?w=400&q=80', rating: 4.8 },
    ]
  },
  bakery: {
    name: 'Bakery & Desserts',
    icon: '🥐',
    badge: 'VERY IMPORTANT',
    thought: '"This gives full café vibes"',
    description: 'Baked fresh daily - Perfect with coffee',
    addOns: [],
    items: [
      { name: 'Butter Croissant', desc: 'Flaky, buttery layers of perfection', price: 140, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80', rating: 4.9 },
      { name: 'Chocolate Croissant', desc: 'Croissant with chocolate filling', price: 160, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80', rating: 4.9 },
      { name: 'Brownie', desc: 'Fudgy chocolate brownie', price: 130, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80', rating: 4.8 },
      { name: 'Muffins', desc: 'Assorted fresh muffins', price: 120, image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&q=80', rating: 4.7 },
      { name: 'Cookies', desc: 'Warm, gooey chocolate cookies', price: 100, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80', rating: 4.8 },
      { name: 'Cheesecake', desc: 'Creamy New York style cheesecake', price: 180, image: 'https://images.unsplash.com/photo-1533134242443-742ce1801520?w=400&q=80', rating: 4.9 },
      { name: 'Tiramisu', desc: 'Classic Italian tiramisu', price: 170, image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&q=80', rating: 4.9 },
      { name: 'Cupcakes', desc: 'Assorted flavored cupcakes', price: 110, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80', rating: 4.7 },
    ]
  },
  breakfast: {
    name: 'All-Day Breakfast',
    icon: '🍳',
    badge: 'MORNING FAVORITES',
    thought: '"People LOVE this section"',
    description: 'Breakfast served all day',
    addOns: [],
    items: [
      { name: 'Pancakes (Honey)', desc: 'Fluffy pancakes with honey', price: 220, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80', rating: 4.8 },
      { name: 'Pancakes (Chocolate)', desc: 'Pancakes with chocolate sauce', price: 240, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80', rating: 4.9 },
      { name: 'Pancakes (Fruit)', desc: 'Pancakes with fresh fruits', price: 250, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80', rating: 4.9 },
      { name: 'Waffles', desc: 'Crispy golden waffles', price: 210, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80', rating: 4.8 },
      { name: 'French Toast', desc: 'Golden French toast with berries', price: 200, image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&q=80', rating: 4.8 },
      { name: 'Eggs & Toast', desc: 'Eggs cooked your way with toast', price: 180, image: 'https://images.unsplash.com/photo-1585238341710-4b4e6cefc068?w=400&q=80', rating: 4.7 },
      { name: 'Omelette', desc: 'Fluffy omelette with fresh vegetables', price: 240, image: 'https://images.unsplash.com/photo-1585238341710-4b4e6cefc068?w=400&q=80', rating: 4.8 },
      { name: 'Avocado Toast', desc: 'Creamy avocado on toasted sourdough', price: 250, image: 'https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=400&q=80', rating: 4.9 },
    ]
  },
  snacks: {
    name: 'Snacks & Light Bites',
    icon: '🥪',
    badge: 'QUICK BITES',
    thought: '"Easy, comfort food"',
    description: 'Perfect for quick bites',
    addOns: [],
    items: [
      { name: 'Veg Sandwich', desc: 'Fresh vegetables on bread', price: 150, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80', rating: 4.6 },
      { name: 'Grilled Sandwich', desc: 'Grilled cheese sandwich', price: 160, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80', rating: 4.7 },
      { name: 'Cheese Sandwich', desc: 'Melted cheese on fresh bread', price: 140, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80', rating: 4.6 },
      { name: 'Garlic Bread', desc: 'Crispy garlic bread', price: 120, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80', rating: 4.8 },
      { name: 'Nachos', desc: 'Crispy nachos with toppings', price: 180, image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b73?w=400&q=80', rating: 4.7 },
      { name: 'Fries', desc: 'Crispy golden fries', price: 100, image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b73?w=400&q=80', rating: 4.6 },
      { name: 'Wraps', desc: 'Fresh vegetable wraps', price: 170, image: 'https://images.unsplash.com/photo-1585238341710-4b4e6cefc068?w=400&q=80', rating: 4.7 },
    ]
  }
}

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to MongoDB')

    // Clear existing data
    await MenuItem.deleteMany({})
    await Category.deleteMany({})
    console.log('Cleared existing data')

    // Seed categories and items
    for (const [categoryId, categoryData] of Object.entries(menuData)) {
      // Save category
      const category = new Category({
        categoryId,
        name: categoryData.name,
        icon: categoryData.icon,
        badge: categoryData.badge,
        thought: categoryData.thought,
        description: categoryData.description,
        addOns: categoryData.addOns
      })
      await category.save()
      console.log(`✓ Saved category: ${categoryData.name}`)

      // Save menu items
      for (const item of categoryData.items) {
        const menuItem = new MenuItem({
          ...item,
          category: categoryId
        })
        await menuItem.save()
      }
      console.log(`✓ Saved ${categoryData.items.length} items for ${categoryData.name}`)
    }

    console.log('✅ Database seeded successfully!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    process.exit(1)
  }
}

seedDatabase()
