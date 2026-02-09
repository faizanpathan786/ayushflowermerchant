import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { toast } = useToast();

  const submitContactMutation = useMutation({
    mutationFn: async (data: any) => {
      // Save to database
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to submit contact form");
      
      // Send email via EmailJS
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: data.name,
            from_email: data.email,
            phone: data.phone || 'Not provided',
            message: data.message,
            to_email: 'sidhantshinde1449@gmail.com',
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      } catch (emailError) {
        console.error('EmailJS error:', emailError);
        // Don't fail the whole submission if email fails
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: any) => {
    submitContactMutation.mutate(data);
  };

  return (
    <section className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-border/50">
            <h2 className="font-serif text-3xl font-bold mb-2">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Have a question about our services or want to place a custom order? Send us a message!
            </p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Name *</label>
                  <Input 
                    {...register("name", { required: "Name is required" })} 
                    placeholder="John Doe" 
                    className="rounded-xl bg-secondary/10 border-transparent focus:border-primary/30 h-12"
                    data-testid="input-name"
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name.message as string}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Phone</label>
                  <Input 
                    {...register("phone")} 
                    placeholder="+91 98765 43210" 
                    className="rounded-xl bg-secondary/10 border-transparent focus:border-primary/30 h-12"
                    data-testid="input-phone"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Email *</label>
                <Input 
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })} 
                  type="email"
                  placeholder="john@example.com" 
                  className="rounded-xl bg-secondary/10 border-transparent focus:border-primary/30 h-12"
                  data-testid="input-email"
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email.message as string}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Message *</label>
                <Textarea 
                  {...register("message", { required: "Message is required" })} 
                  placeholder="Tell us about your event or requirement..." 
                  className="rounded-xl bg-secondary/10 border-transparent focus:border-primary/30 min-h-[150px] resize-none p-4"
                  data-testid="input-message"
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message.message as string}</p>}
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full rounded-full h-12 text-base font-medium"
                disabled={submitContactMutation.isPending}
                data-testid="button-submit"
              >
                {submitContactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Info & Map */}
          <div className="space-y-10 flex flex-col justify-center">
             <div>
                <h4 className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Visit Our Store</h4>
                <h2 className="font-serif text-4xl font-bold mb-6">Come Smell the Roses</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  We love meeting our customers. Visit our store to see our fresh collection and discuss your floral needs in person.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="flex items-start gap-4">
                 <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                   <MapPin className="h-6 w-6" />
                 </div>
                 <div>
                   <h5 className="font-semibold text-lg mb-1">Location</h5>
                   <p className="text-muted-foreground text-sm">
                     Opposite to Bhairavanath Mandir,<br />
                     Shop No. 2, Kondhwa Khurd,<br />
                     Pune 48
                   </p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                   <Phone className="h-6 w-6" />
                 </div>
                 <div>
                   <h5 className="font-semibold text-lg mb-1">Call Us</h5>
                   <p className="text-muted-foreground text-sm">
                     +91 86259 13742 <br />
                     +91 95959 95907
                   </p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                   <Mail className="h-6 w-6" />
                 </div>
                 <div>
                   <h5 className="font-semibold text-lg mb-1">Email</h5>
                   <p className="text-muted-foreground text-sm">
                     sidhantshinde1449@gmail.com
                   </p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                   <Clock className="h-6 w-6" />
                 </div>
                 <div>
                   <h5 className="font-semibold text-lg mb-1">Opening Hours</h5>
                   <p className="text-muted-foreground text-sm">
                     Mon - Sat: 8:00 AM - 9:00 PM <br />
                     Sun: 9:00 AM - 2:00 PM
                   </p>
                 </div>
               </div>
             </div>

             {/* Map Embed Placeholder */}
             <div className="h-64 w-full bg-muted rounded-2xl overflow-hidden relative border border-border">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.4!2d73.8964!3d18.4621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI3JzQzLjYiTiA3M8KwNTMnNDcuMCJF!5e0!3m2!1sen!2sin!4v1645692841234!5m2!1sen!2sin&q=Bhairavanath+Mandir+Kondhwa+Khurd+Pune" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
