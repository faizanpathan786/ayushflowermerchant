import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { WebSocket } from "ws";
import { 
  type User, 
  type InsertUser,
  type Contact,
  type InsertContact,
  type Product,
  type InsertProduct,
  type GalleryItem,
  type InsertGalleryItem,
  users,
  contacts,
  products,
  galleryItems
} from "@shared/schema";
import { eq } from "drizzle-orm";

// Configure WebSocket for Neon serverless in Node.js environment
neonConfig.webSocketConstructor = WebSocket;

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
  
  // Product methods
  getAllProducts(): Promise<Product[]>;
  getFeaturedProducts(): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Gallery methods
  getAllGalleryItems(): Promise<GalleryItem[]>;
  getGalleryItemsByCategory(category: string): Promise<GalleryItem[]>;
  createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem>;
}

export class DatabaseStorage implements IStorage {
  private db;

  constructor(connectionString: string) {
    const pool = new Pool({ connectionString });
    this.db = drizzle(pool);
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db.insert(users).values(insertUser).returning();
    return result[0];
  }

  // Contact methods
  async createContact(contact: InsertContact): Promise<Contact> {
    const result = await this.db.insert(contacts).values(contact).returning();
    return result[0];
  }

  async getAllContacts(): Promise<Contact[]> {
    return await this.db.select().from(contacts).orderBy(contacts.createdAt);
  }

  // Product methods
  async getAllProducts(): Promise<Product[]> {
    return await this.db.select().from(products);
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return await this.db.select().from(products).where(eq(products.featured, 1));
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const result = await this.db.insert(products).values(product).returning();
    return result[0];
  }

  // Gallery methods
  async getAllGalleryItems(): Promise<GalleryItem[]> {
    return await this.db.select().from(galleryItems);
  }

  async getGalleryItemsByCategory(category: string): Promise<GalleryItem[]> {
    return await this.db.select().from(galleryItems).where(eq(galleryItems.category, category));
  }

  async createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem> {
    const result = await this.db.insert(galleryItems).values(item).returning();
    return result[0];
  }
}

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

export const storage = new DatabaseStorage(process.env.DATABASE_URL);
