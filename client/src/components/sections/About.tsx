import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/30 rounded-full blur-3xl -z-10" />
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4 mt-12"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=1000" 
                    alt="Florist arranging flowers" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=1000" 
                    alt="Fresh flower details" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>
            {/* Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-2xl flex flex-col items-center justify-center w-32 h-32 text-center z-10 border border-primary/10">
              <span className="text-3xl font-serif font-bold text-primary">15+</span>
              <span className="text-xs uppercase tracking-wide text-muted-foreground font-medium">Years of Excellence</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-primary font-medium tracking-wider uppercase text-sm mb-4">About Ayush Flower Merchant</h4>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Crafting Emotions with <br/> Fresh Petals
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                At Ayush Flower Merchant, we believe that flowers are more than just decorations—they are the language of emotions. For over 15 years, we have been dedicated to providing the freshest blooms and the most exquisite floral arrangements for every occasion.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  { title: "Farm Fresh Quality", desc: "Sourced daily from premium local farms." },
                  { title: "Custom Artistry", desc: "Designs tailored to your unique vision." },
                  { title: "Timely Delivery", desc: "Prompt service for all your special events." },
                  { title: "Sustainable Practices", desc: "Eco-friendly packaging and sourcing." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="bg-secondary/50 p-2 rounded-lg text-primary mt-1">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground">{item.title}</h5>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Customer" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-yellow-400 mb-1">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">Trusted by 500+ Happy Clients</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
