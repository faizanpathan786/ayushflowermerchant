import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Wedding Client",
    text: "Ayush Flower Merchant did the decoration for my wedding and it was absolutely magical! The fresh jasmine garlands were so fragrant and beautiful.",
  },
  {
    name: "Rahul Verma",
    role: "Event Planner",
    text: "My go-to florist for all my events. Their punctuality and quality of flowers are unmatched in the city. Highly recommended!",
  },
  {
    name: "Sneha Kapoor",
    role: "Regular Customer",
    text: "I love their custom bouquets. I order flowers for my home every week and they are always fresh and last for days.",
  },
  {
    name: "Amit Patel",
    role: "Corporate Client",
    text: "Excellent service for our office inauguration. The floral rangoli and entrance decor were stunning.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Testimonials</h4>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Words from Our Clients</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <Card className="h-full border-none shadow-lg bg-secondary/10 relative overflow-hidden group hover:bg-primary/5 transition-colors duration-300">
                    <div className="absolute top-4 right-6 text-primary/20 group-hover:text-primary/40 transition-colors">
                      <Quote size={80} />
                    </div>
                    <CardContent className="p-8 flex flex-col h-full relative z-10">
                      <p className="text-muted-foreground text-lg italic mb-6 flex-grow leading-relaxed">"{item.text}"</p>
                      <div>
                        <h5 className="font-serif font-bold text-lg">{item.name}</h5>
                        <span className="text-sm text-primary font-medium">{item.role}</span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-primary/20 hover:bg-primary hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 border-primary/20 hover:bg-primary hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
