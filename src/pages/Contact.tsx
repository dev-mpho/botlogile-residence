import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Clock, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import GoogleMap from "@/components/GoogleMap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // FormSubmit.co will handle email forwarding
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+27 11 913 8323",
      link: "tel:+27119138323",
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@botlogileres.co.za",
      link: "mailto:info@botlogileres.co.za",
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Vanderbijlpark, South Africa",
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon - Fri: 8:00 AM - 5:00 PM",
      gradient: "from-primary to-primary-dark",
    },
  ];

  const properties = [
    { name: "M Village - Potchefstroom", address: "32 Fortuna Ave, Bedworth Park, Vereeniging, 1939" },
    { name: "Botlogile 1 - Vanderbijlpark", address: "36 Fortuna Ave, Bedworth Park, Vereeniging, 1939, South Africa" },
    { name: "Botlogile 2 - Vanderbijlpark", address: "2 Fortuna Ave, Bedworth Park, Vereeniging, 1939, South Africa" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingContact />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions about our accommodations? We're here to help! Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="premium-card rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 mx-auto">
                  <info.icon size={28} className="text-white" />
                </div>
                <h4 className="font-semibold mb-2">{info.title}</h4>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="premium-card rounded-2xl p-8"
            >
              <h3 className="mb-6">Send Us a Message</h3>
              <form 
                action="https://formsubmit.co/websiteguy.ww@gmail.com"
                method="POST"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                {/* Hidden fields for FormSubmit configuration */}
                <input type="hidden" name="_subject" value="New Contact Form Submission" />
                <input type="hidden" name="_cc" value="robinson@nathgroup.co.za,maureen@mmmworks.co.za" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="Full Name"
                    type="text"
                    required
                    maxLength={100}
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="Email Address"
                    type="email"
                    required
                    maxLength={255}
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="Phone Number"
                    type="tel"
                    required
                    maxLength={20}
                    placeholder="+27 123 456 789"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="property" className="block text-sm font-medium mb-2">
                    Property of Interest
                  </label>
                  <select
                    id="property"
                    name="Property of Interest"
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a property</option>
                    <option value="M Village">M Village - Potchefstroom</option>
                    <option value="Botlogile 1">Botlogile 1 - Vanderbijlpark</option>
                    <option value="Botlogile 2">Botlogile 2 - Vanderbijlpark</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="Message"
                    required
                    maxLength={1000}
                    placeholder="Tell us about your accommodation needs..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  <Send className="mr-2" size={18} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* Social & Properties Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Social Media */}
              <div className="premium-card rounded-2xl p-8">
                <h3 className="mb-6">Connect With Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=100090835149307"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Facebook size={24} />
                    <span className="font-semibold">Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/botlogileresidence/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Instagram size={24} />
                    <span className="font-semibold">Instagram</span>
                  </a>
                </div>
              </div>

              {/* Properties Addresses */}
              <div className="premium-card rounded-2xl p-8">
                <h3 className="mb-6">Our Properties</h3>
                <div className="space-y-6">
                  {properties.map((property, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{property.name}</h4>
                        <p className="text-sm text-muted-foreground">{property.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Find Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Visit any of our properties to see what we have to offer
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <GoogleMap address="32 Fortuna Ave, Bedworth Park, Vereeniging, 1939" propertyName="M Village" />
              <div className="p-4 bg-card">
                <h4 className="font-semibold">M Village</h4>
                <p className="text-sm text-muted-foreground">Potchefstroom</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <GoogleMap address="36 Fortuna Ave, Bedworth Park, Vereeniging, 1939, South Africa" propertyName="Botlogile 1" />
              <div className="p-4 bg-card">
                <h4 className="font-semibold">Botlogile 1</h4>
                <p className="text-sm text-muted-foreground">Vanderbijlpark</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <GoogleMap address="2 Fortuna Ave, Bedworth Park, Vereeniging, 1939, South Africa" propertyName="Botlogile 2" />
              <div className="p-4 bg-card">
                <h4 className="font-semibold">Botlogile 2</h4>
                <p className="text-sm text-muted-foreground">Vanderbijlpark</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
