import { motion } from "framer-motion";
import { ChevronDown, Wifi, Shield, Users, Droplet, Award, Heart, GraduationCap, Handshake, Utensils, Car, Zap, Bus } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-main.jpg";
import mVillageImage from "@/assets/m-village.jpg";
import botlogile1Image from "@/assets/botlogile-1.jpg";
import botlogile2Image from "@/assets/botlogile-2.jpg";
import studentsImage from "@/assets/students-cta.jpg";
import studentsIntroImage from "@/assets/students-intro.jpg";

const Index = () => {
  const properties = [
    {
      name: "M Village",
      slug: "/m-village#top",
      image: mVillageImage,
      rooms: 54,
      genderSplit: "30 Male / 24 Female",
      universities: ["NWU", "VUT"],
      address: "123 Main Street, Potchefstroom, 2520",
    },
    {
      name: "Botlogile 1",
      slug: "/botlogile-1#top",
      image: botlogile1Image,
      rooms: 48,
      genderSplit: "24 Male / 24 Female",
      universities: ["NWU", "VUT"],
      address: "456 University Road, Vanderbijlpark, 1900",
    },
    {
      name: "Botlogile 2",
      slug: "/botlogile-2#top",
      image: botlogile2Image,
      rooms: 60,
      genderSplit: "30 Male / 30 Female",
      universities: ["NWU", "VUT"],
      address: "789 Campus Avenue, Vanderbijlpark, 1900",
    },
  ];

  const amenities = [
    {
      icon: Wifi,
      name: "High-Speed WiFi",
      description: "Uncapped fiber internet throughout the building",
    },
    {
      icon: Shield,
      name: "24/7 Security",
      description: "Round-the-clock security personnel and CCTV monitoring",
    },
    {
      icon: Users,
      name: "Study Rooms",
      description: "Quiet, well-equipped spaces for focused studying",
    },
    {
      icon: Droplet,
      name: "Hot Water",
      description: "24/7 hot water supply in all rooms",
    },
    {
      icon: Utensils,
      name: "Modern Kitchen",
      description: "Fully equipped communal kitchen facilities",
    },
    {
      icon: Users,
      name: "Laundry Facility",
      description: "On-site washing machines and dryers",
    },
    {
      icon: Car,
      name: "Secure Parking",
      description: "Safe parking for residents with vehicles",
    },
    {
      icon: Zap,
      name: "Backup Power",
      description: "Generator backup during power outages",
    },
    {
      icon: Bus,
      name: "Shuttle Services",
      description: "Regular transport to and from campus",
    },
  ];

  const values = [
    {
      icon: Award,
      name: "Service Excellence",
      description: "Committed to providing exceptional service and support to all our residents.",
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: GraduationCap,
      name: "Academic Excellence",
      description: "Creating an environment that promotes learning and academic success.",
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: Handshake,
      name: "Mutual Respect",
      description: "Fostering a community built on respect, understanding, and collaboration.",
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: Heart,
      name: "Well-Being",
      description: "Prioritizing the physical and mental health of our student community.",
      gradient: "from-primary to-primary-dark",
    },
  ];

  const scrollToProperties = () => {
    document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingContact />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern student accommodation building exterior"
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/30 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 leading-tight">
              Homes Away <br />
              From Home
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto"
          >
            Premium student accommodation for NWU and VUT students. Modern facilities, safe environment, and a supportive community.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="hero" onClick={scrollToProperties}>
              View Accommodations
            </Button>
            <Button variant="hero-outline" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToProperties}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary-foreground/80"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="relative py-32 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
                <img
                  src={studentsIntroImage}
                  alt="Diverse group of college students studying together on campus"
                  className="relative rounded-3xl shadow-2xl w-full h-auto border-4 border-white/10"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 space-y-8"
            >
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Welcome Home
                </span>
              </div>
              
              <h2 className="mb-6 leading-tight">
                Your Journey to 
                <span className="block text-primary mt-2">Academic Excellence</span>
                Starts Here
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-full" />
                  <p className="text-lg leading-relaxed">
                    We provide a <span className="font-semibold text-foreground">safe, supportive, and stimulating</span> environment where students live, learn, and prosper. Your academic journey deserves the perfect foundation.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-full" />
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you're studying, socializing, or unwinding after a long day, our residences offer <span className="text-foreground font-medium">everything you need to thrive</span>. With dedicated study areas, communal kitchens, and vibrant social spaces, you'll always have the resources to pursue your passions.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-full" />
                  <p className="text-muted-foreground leading-relaxed">
                    Located conveniently near <span className="text-foreground font-medium">NWU and VUT campuses</span> in Potchefstroom and Vanderbijlpark. Our friendly staff are always available to support you, ensuring peace of mind throughout your stay.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Premium Amenities</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need for a comfortable and productive student life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="premium-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 text-center md:text-left"
              >
                <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mb-4 shadow-lg mx-auto md:mx-0">
                  <amenity.icon size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{amenity.name}</h4>
                <p className="text-muted-foreground">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 text-center md:text-left"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <value.icon size={32} className="text-white" />
                </div>
                <h4 className="mb-3">{value.name}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Our Accommodations</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose from our three exceptional properties, each designed to support your academic journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <PropertyCard key={property.slug} {...property} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
