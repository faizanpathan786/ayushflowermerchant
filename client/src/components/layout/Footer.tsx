import { Flower, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-secondary/30 pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <Flower className="h-6 w-6 text-primary" />
              </div>
              <span className="font-serif text-xl font-bold text-foreground">
                Ayush Flower
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bringing nature's finest blooms to your special moments. We specialize in fresh flowers, elegant decorations, and custom floral artistry.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors bg-background p-2 rounded-full shadow-sm hover:shadow-md">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors bg-background p-2 rounded-full shadow-sm hover:shadow-md">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors bg-background p-2 rounded-full shadow-sm hover:shadow-md">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Services", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href="/" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {["Fresh Bouquets", "Wedding Garlands", "Floral Jewellery", "Event Decoration", "Car Decoration"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">
                  123 Flower Market Street,<br />
                  Near City Center, Mumbai - 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">hello@ayushflower.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ayush Flower Merchant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
