import mongoose from 'mongoose'
import Blog from '../models/Blog.js'
import dotenv from 'dotenv'

dotenv.config()

const blogs = [
  {
    title: "Autumn Mornings: When Coffee Tastes Like Comfort",
    content: `There's something magical about autumn mornings at Bean & Bloom. As the leaves turn golden and the air becomes crisp, our cafe transforms into a sanctuary of warmth and comfort.

Sarah, a regular customer, describes her morning ritual: "I wake up early, wrap myself in a cozy sweater, and head straight to Bean & Bloom. The moment I step inside, the aroma of freshly roasted coffee mingles with the scent of cinnamon and nutmeg. It's like stepping into a warm embrace."

The autumn season brings a unique energy to our cafe. Customers linger longer, their laptops and books spread across wooden tables. The soft golden light filtering through our windows creates an atmosphere that feels both productive and peaceful. 

"Coffee in autumn isn't just a beverage," says Marcus, our head barista, "it's a ritual. People come here to slow down, to feel the transition of seasons, to find solace in the familiar warmth of their favorite cup."

Whether it's a steaming cappuccino or a smooth cold brew, autumn coffee at Bean & Bloom is more than caffeine—it's a moment of connection with yourself and the changing world around you.`,
    author: "Sarah Mitchell",
    image: "https://images.unsplash.com/photo-1495474472645-4c60ecca07d0?w=800&h=600&fit=crop",
    category: "Seasons",
    tags: ["autumn", "comfort", "morning-ritual", "cozy"],
    published: true,
    views: 245
  },
  {
    title: "Winter Evenings: Coffee as Connection",
    content: `Winter evenings at Bean & Bloom tell stories of connection and warmth. As snow gently falls outside and temperatures drop, our cafe becomes a gathering place where strangers become friends and friends become family.

"I come here every Friday evening," shares David, a software engineer. "It's my escape from the cold, harsh world outside. Inside, everything feels warm—the lighting, the people, the coffee. I've met some of my best friends at these tables."

The winter season transforms our cafe into something intimate and special. Couples sit close together, sharing a single cappuccino. Groups of friends huddle around tables, their laughter mixing with the gentle hum of the espresso machine. Solo visitors find peace in the ambient noise and the presence of others.

Our winter menu features rich, warming blends—dark roasts with notes of chocolate and caramel. Each cup seems to carry the essence of the season: comfort, togetherness, and the promise of warmth.

"Coffee in winter isn't about staying awake," reflects Maria, one of our baristas. "It's about staying warm, staying connected, and remembering that even on the coldest nights, there's a place where you belong."

Winter at Bean & Bloom reminds us that sometimes the best moments are the simplest ones—a warm cup, good company, and the feeling of being home.`,
    author: "David Chen",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop",
    category: "Seasons",
    tags: ["winter", "connection", "warmth", "community"],
    published: true,
    views: 312
  },
  {
    title: "Spring Awakening: Coffee and New Beginnings",
    content: `Spring arrives at Bean & Bloom with a sense of renewal and possibility. As flowers bloom outside and the world awakens from winter's slumber, our cafe fills with the energy of new beginnings.

"I started my business plan here," says Priya, an entrepreneur. "Every morning, I'd come in with my notebook and a cappuccino. The cafe's energy, the people, the quiet determination I saw in others—it all inspired me. My first successful project was literally born over coffee at this table."

Spring brings a different crowd to our cafe. Students return with renewed focus. Professionals start new projects. Artists find inspiration in the fresh energy of the season. The light streaming through our windows is brighter, more hopeful.

Our spring menu celebrates lightness and freshness—floral notes in our specialty blends, lighter roasts that highlight the coffee's natural brightness. Each cup feels like a fresh start.

"Coffee in spring is about possibility," says James, our owner. "It's about the potential in every new day, every new customer, every new conversation. Spring reminds us why we do what we do—to create a space where people can grow, dream, and achieve."

Whether you're starting a new chapter or simply enjoying the season's renewal, spring coffee at Bean & Bloom tastes like hope.`,
    author: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
    category: "Seasons",
    tags: ["spring", "new-beginnings", "inspiration", "growth"],
    published: true,
    views: 198
  },
  {
    title: "Summer Afternoons: Coffee Breaks and Lazy Days",
    content: `Summer afternoons at Bean & Bloom have a different rhythm. The heat outside makes our air-conditioned cafe feel like an oasis. The pace slows down, conversations become longer, and time seems to stretch.

"Summer is when I really appreciate iced coffee," laughs Alex, a regular. "I'll come in around 3 PM, order a cold brew, and just sit here for hours. There's no rush. The world outside is moving fast, but in here, everything is calm and cool."

Summer brings families, tourists, and locals seeking refuge from the heat. Children sip hot chocolate while parents enjoy their coffee. Friends meet up for afternoon catch-ups. The cafe becomes a social hub where the summer heat brings people together.

Our summer menu features refreshing cold brews, iced lattes with seasonal flavors, and smooth cold-pressed options. Each sip is a moment of relief and refreshment.

"Coffee in summer is about slowing down," reflects Lisa, our cafe manager. "It's about taking a break from the heat and the hustle. It's about enjoying the simple pleasure of a cold drink and good company."

Summer at Bean & Bloom teaches us the value of pausing, of finding cool moments in a warm season, and of appreciating the simple joy of a perfectly chilled cup of coffee.`,
    author: "Alex Rodriguez",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=600&fit=crop",
    category: "Seasons",
    tags: ["summer", "relaxation", "iced-coffee", "leisure"],
    published: true,
    views: 267
  },
  {
    title: "The Coffee Vibe: Why People Keep Coming Back",
    content: `What makes Bean & Bloom special isn't just the coffee—though our beans are carefully sourced and expertly roasted. It's the vibe. It's the feeling you get the moment you walk through the door.

"I've been coming here for three years," says Emma, a writer. "I've written two novels in this cafe. There's something about the energy here that makes creativity flow. It's not just the coffee; it's the people, the atmosphere, the sense that you're part of something bigger."

The coffee vibe at Bean & Bloom is built on several elements: the warmth of our baristas who remember your name and your usual order, the carefully curated music that sets the perfect mood, the comfortable seating that invites you to stay, and the community of people who choose to spend their time here.

"Coffee is a ritual," explains Marcus, our head barista. "But the ritual is incomplete without the right environment. We've created a space where people feel seen, heard, and valued. That's what keeps them coming back."

Regular customers form friendships. Solo visitors find solitude without loneliness. Professionals find productivity without stress. Artists find inspiration. Students find focus. Everyone finds something.

"The coffee vibe is about belonging," says James, our owner. "It's about creating a third place—not home, not work, but somewhere in between where people can be themselves. That's what we're really serving here: not just coffee, but connection, comfort, and community."

When you visit Bean & Bloom, you're not just getting a cup of coffee. You're stepping into a vibe, a feeling, a community. And that's why people keep coming back.`,
    author: "Emma Thompson",
    image: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&h=600&fit=crop",
    category: "Community",
    tags: ["vibe", "community", "belonging", "coffee-culture"],
    published: true,
    views: 456
  }
]

async function seedBlogs() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bean-bloom')
    console.log('Connected to MongoDB')

    // Clear existing blogs
    await Blog.deleteMany({})
    console.log('Cleared existing blogs')

    // Insert new blogs
    const createdBlogs = await Blog.insertMany(blogs)
    console.log(`Successfully seeded ${createdBlogs.length} blogs`)

    await mongoose.connection.close()
    console.log('Database connection closed')
  } catch (error) {
    console.error('Error seeding blogs:', error)
    process.exit(1)
  }
}

seedBlogs()
