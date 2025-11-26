import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import garlandImg from "@assets/generated_images/traditional_wedding_garland.png";
import jewelleryImg from "@assets/generated_images/floral_jewellery_set.png";
import decorImg from "@assets/generated_images/elegant_event_flower_decoration.png";
import bouquetImg from "@assets/generated_images/pink_peony_and_rose_bouquet.png";

const services = [
  {
    title: "Wedding Garlands",
    description: "Exquisite traditional and modern garlands handcrafted with fresh jasmine, roses, and orchids for your special day.",
    image: garlandImg,
    color: "bg-red-50",
  },
  {
    title: "Floral Jewellery",
    description: "Unique, lightweight, and fresh floral jewellery sets for Haldi, Mehndi, and Baby Shower ceremonies.",
    image: jewelleryImg,
    color: "bg-yellow-50",
  },
  {
    title: "Event Decoration",
    description: "Complete floral decor services for weddings, receptions, corporate events, and intimate gatherings.",
    image: decorImg,
    color: "bg-purple-50",
  },
  {
    title: "Custom Bouquets",
    description: "Hand-tied bouquets wrapped in premium paper, perfect for gifting on birthdays, anniversaries, and special moments.",
    image: bouquetImg,
    color: "bg-pink-50",
  },
];

export default function Services() {
  return (
    <section className="py-20 md:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Our Expertise</h4>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Services We Offer</h2>
          <p className="text-muted-foreground text-lg">
            We don't just sell flowers; we curate experiences. Explore our range of specialized floral services designed to add elegance to every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-none shadow-none hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="h-5 w-5 text-foreground" />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
