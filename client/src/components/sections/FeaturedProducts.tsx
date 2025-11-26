import { motion } from "framer-motion";
import { ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";

export default function FeaturedProducts() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", "featured"],
    queryFn: async () => {
      const response = await fetch("/api/products/featured");
      if (!response.ok) throw new Error("Failed to fetch products");
      return response.json();
    },
  });

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
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Shop Online</h4>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Featured Blooms</h2>
            <p className="text-muted-foreground text-lg">
              Hand-picked favorites from our collection, ready to be delivered to your doorstep.
            </p>
          </div>
          <Button variant="ghost" className="text-primary hover:bg-primary/10 hover:text-primary font-medium group">
            View All Products <span className="group-hover:translate-x-1 transition-transform inline-block ml-2">→</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product: any, index: number) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col group">
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {product.tag && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-white/90 text-foreground hover:bg-white backdrop-blur-sm">
                        {product.tag}
                      </Badge>
                    </div>
                  )}
                  <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 text-muted-foreground hover:text-red-500 hover:bg-white transition-colors opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 duration-300">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
                <CardContent className="p-5 pt-6 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-lg font-bold group-hover:text-primary transition-colors">{product.name}</h3>
                    <span className="font-medium text-primary">{product.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {product.description}
                  </p>
                </CardContent>
                <CardFooter className="p-5 pt-0">
                  <Button className="w-full rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-white transition-colors">
                    <ShoppingBag className="h-4 w-4 mr-2" /> Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
