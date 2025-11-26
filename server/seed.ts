import { WebSocket } from "ws";
import { neonConfig } from "@neondatabase/serverless";
import { storage } from "./storage";

// Configure WebSocket for Neon serverless in Node.js environment
neonConfig.webSocketConstructor = WebSocket;

async function seed() {
  console.log("🌱 Seeding database...");

  // Seed products
  const products = [
    {
      name: "Blushing Rose Bouquet",
      price: "₹1,299",
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=800",
      description: "A romantic arrangement of soft pink roses and white lilies.",
      tag: "Bestseller",
      featured: 1
    },
    {
      name: "Royal Orchid Vase",
      price: "₹2,499",
      image: "https://images.unsplash.com/photo-1566652642202-0514a248a2e8?auto=format&fit=crop&q=80&w=800",
      description: "Exotic purple orchids arranged in a premium glass vase.",
      tag: "New",
      featured: 1
    },
    {
      name: "Sunshine Basket",
      price: "₹899",
      image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&q=80&w=800",
      description: "Bright sunflowers and yellow daisies in a rustic basket.",
      tag: null,
      featured: 1
    },
    {
      name: "Vintage Peony Bunch",
      price: "₹1,599",
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=800",
      description: "Classic peonies wrapped in eco-friendly kraft paper.",
      tag: "Premium",
      featured: 1
    }
  ];

  for (const product of products) {
    await storage.createProduct(product);
  }
  console.log(`✅ Created ${products.length} products`);

  // Seed gallery items
  const galleryItems = [
    { title: "Pink Peony Love", category: "Bouquets", image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=800" },
    { title: "Traditional Rose Mala", category: "Garlands", image: "https://images.unsplash.com/photo-1605218427368-351816b5b9e1?auto=format&fit=crop&q=80&w=800" },
    { title: "Haldi Floral Set", category: "Jewellery", image: "https://images.unsplash.com/photo-1624823183483-484361c0935d?auto=format&fit=crop&q=80&w=800" },
    { title: "Wedding Stage", category: "Decor", image: "https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80&w=800" },
    { title: "Sunflower Joy", category: "Bouquets", image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&q=80&w=800" },
    { title: "Aisle Decoration", category: "Decor", image: "https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80&w=800" },
    { title: "Jasmine Garland", category: "Garlands", image: "https://images.unsplash.com/photo-1605218427368-351816b5b9e1?auto=format&fit=crop&q=80&w=800" },
    { title: "Floral Maang Tikka", category: "Jewellery", image: "https://images.unsplash.com/photo-1624823183483-484361c0935d?auto=format&fit=crop&q=80&w=800" },
  ];

  for (const item of galleryItems) {
    await storage.createGalleryItem(item);
  }
  console.log(`✅ Created ${galleryItems.length} gallery items`);

  console.log("🎉 Seeding complete!");
  process.exit(0);
}

seed().catch((error) => {
  console.error("Error seeding database:", error);
  process.exit(1);
});
