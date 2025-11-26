import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

const categories = ["All", "Bouquets", "Garlands", "Jewellery", "Decor"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const { data: allItems = [], isLoading } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const response = await fetch("/api/gallery");
      if (!response.ok) throw new Error("Failed to fetch gallery items");
      return response.json();
    },
  });

  const filteredItems = activeCategory === "All" 
    ? allItems 
    : allItems.filter((item: any) => item.category === activeCategory);

  if (isLoading) {
    return (
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-secondary rounded w-48 mx-auto mb-4"></div>
              <div className="h-12 bg-secondary rounded w-64 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h4 className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Our Portfolio</h4>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Floral Masterpieces</h2>
          <p className="text-muted-foreground text-lg">
            A glimpse into our world of flowers. Browse through our latest creations and find inspiration for your next event.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                activeCategory === cat
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                  : "bg-transparent text-muted-foreground border-transparent hover:bg-secondary hover:text-foreground"
              )}
              data-testid={`filter-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item: any) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer"
                data-testid={`gallery-item-${item.id}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-primary text-xs font-medium uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.category}
                  </span>
                  <h3 className="text-white font-serif text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredItems.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="rounded-full px-8 border-primary/30 text-foreground hover:bg-primary hover:text-white">
              Load More Photos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
