import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/luxury_flower_shop_hero_banner_with_pastel_blooms.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful Flower Shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent md:from-white/90 md:via-white/50 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl md:text-foreground text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-medium text-sm mb-6 backdrop-blur-sm border border-primary/10">
              Premium Floral Services
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-sm md:drop-shadow-none">
              Nature's Beauty, <br />
              <span className="text-primary">Artfully Arranged</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 md:text-muted-foreground max-w-lg font-light leading-relaxed">
              From breathtaking wedding garlands to delicate floral jewellery and fresh bouquets, we bring your floral dreams to life with elegance and care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="rounded-full px-8 text-lg h-14 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                onClick={() => scrollToSection('gallery')}
                data-testid="button-view-collection"
              >
                View Collection
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 text-lg h-14 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-foreground md:bg-transparent md:border-primary md:text-primary md:hover:bg-primary/10 transition-all"
                onClick={() => scrollToSection('contact')}
                data-testid="button-contact-us"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
