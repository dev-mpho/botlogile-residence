import { motion } from "framer-motion";
import { MapPin, Users, Home, Wifi, Shield, Utensils, Droplet, Car, Zap, Bus } from "lucide-react";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import GoogleMap from "@/components/GoogleMap";
import { Badge } from "@/components/ui/badge";
import { ApplicationForm } from "@/components/ApplicationForm";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi 
} from "@/components/ui/carousel";
import propertyImage from "@/assets/botlogile-1.jpg";
import botlogileLogo from "@/assets/botlogile-logo.png";
import kitchenImg from "@/assets/botlogile-kitchen.jpg";
import studyAreaImg from "@/assets/botlogile-study-area.jpg";
import loungeImg from "@/assets/botlogile-lounge.jpg";
import bathroomShowerImg from "@/assets/botlogile-bathroom-shower.jpg";
import bathroomCorridorImg from "@/assets/botlogile-bathroom-corridor.jpg";
import wardrobeImg from "@/assets/botlogile-wardrobe.jpg";
import bedroomDeskImg from "@/assets/botlogile-bedroom-desk.jpg";
import bedroomImg from "@/assets/botlogile-bedroom.jpg";
import laundryImg from "@/assets/botlogile-laundry.jpg";

const Botlogile1 = () => {
  const [api, setApi] = useState<CarouselApi>();

  const galleryImages = [
    { src: bedroomImg, alt: "Modern furnished bedroom with study desk", title: "Student Bedroom" },
    { src: bedroomDeskImg, alt: "Comfortable bedroom with desk and wardrobe", title: "Furnished Room" },
    { src: kitchenImg, alt: "Fully equipped communal kitchen", title: "Shared Kitchen" },
    { src: studyAreaImg, alt: "Quiet study area with tables", title: "Study Space" },
    { src: loungeImg, alt: "Comfortable lounge area with TV", title: "Common Lounge" },
    { src: bathroomShowerImg, alt: "Clean modern shower facilities", title: "Bathroom Facilities" },
    { src: bathroomCorridorImg, alt: "Bathroom corridor with sinks", title: "Bathroom Area" },
    { src: wardrobeImg, alt: "Spacious wardrobe storage", title: "Storage Space" },
    { src: laundryImg, alt: "Laundry facility with washing machines", title: "Laundry Room" },
  ];

  // Auto-scroll carousel
  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(intervalId);
  }, [api]);


  const amenities = [
    { icon: Wifi, name: "High-Speed WiFi", description: "Uncapped fiber internet throughout the building" },
    { icon: Shield, name: "24/7 Security", description: "Round-the-clock security personnel and CCTV monitoring" },
    { icon: Users, name: "Study Rooms", description: "Quiet, well-equipped spaces for focused studying" },
    { icon: Droplet, name: "Hot Water", description: "24/7 hot water supply in all rooms" },
    { icon: Utensils, name: "Modern Kitchen", description: "Fully equipped communal kitchen facilities" },
    { icon: Users, name: "Laundry Facility", description: "On-site washing machines and dryers" },
    { icon: Car, name: "Secure Parking", description: "Safe parking for residents with vehicles" },
    { icon: Zap, name: "Backup Power", description: "Generator backup during power outages" },
    { icon: Bus, name: "Shuttle Services", description: "Regular transport to and from campus" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingContact />

      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[70vh] flex items-end overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={propertyImage}
            alt="Botlogile 1 student residence building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/60 to-foreground/30" />
        </motion.div>

        

        {/* Property Info Bar */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
          className="relative z-10 w-full glass-card mx-4 md:mx-6 mb-6 md:mb-8 p-4 md:p-6 rounded-2xl border border-primary/20"
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-4xl font-heading font-bold mb-2">Botlogile 1</h1>
                <div className="flex items-center gap-2 text-muted-foreground text-sm md:text-base">
                  <MapPin size={16} className="md:w-[18px] md:h-[18px]" />
                  <span>Vanderbijlpark, South Africa</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs md:text-sm py-1.5 md:py-2 px-3 md:px-4">NWU Students</Badge>
                <Badge variant="outline" className="text-xs md:text-sm py-1.5 md:py-2 px-3 md:px-4 bg-card/80">VUT Students</Badge>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Property Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 50px rgba(217, 119, 6, 0.15)" }}
              transition={{ duration: 0.3 }}
              className="premium-card rounded-3xl p-8 shadow-lg hover:border-primary/30"
            >
              <h3 className="mb-6 flex items-center gap-2">
                <Home className="text-primary" />
                Room Distribution
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Male Rooms</span>
                    <span className="font-semibold">24</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "50%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-secondary to-secondary-light"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Female Rooms</span>
                    <span className="font-semibold">24</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "50%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-primary to-primary-dark"
                    />
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total Capacity</span>
                    <span className="text-3xl font-bold text-primary">48</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 shadow-md"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <MapPin className="text-white" size={24} />
                  </motion.div>
                  <div>
                    <h5 className="font-semibold mb-1">Location</h5>
                    <p className="text-muted-foreground">Vanderbijlpark, close to NWU and VUT campuses</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0 shadow-md"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Users className="text-white" size={24} />
                  </motion.div>
                  <div>
                    <h5 className="font-semibold mb-1">Services</h5>
                    <div className="flex gap-2">
                      <Badge>NWU</Badge>
                      <Badge variant="outline">VUT</Badge>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 shadow-md"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Home className="text-white" size={24} />
                  </motion.div>
                  <div>
                    <h5 className="font-semibold mb-1">Accommodation Type</h5>
                    <p className="text-muted-foreground">Modern student residence with shared facilities</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amenities Showcase */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Amenities & Facilities</h2>
            <p className="text-muted-foreground text-lg">Everything you need for comfortable student living</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 50px rgba(217, 119, 6, 0.2)"
                }}
                className="premium-card rounded-2xl p-6 text-center cursor-pointer hover:border-primary/30"
              >
                <motion.div 
                  className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <amenity.icon size={32} className="text-white" />
                </motion.div>
                <h5 className="font-semibold mb-2">{amenity.name}</h5>
                <p className="text-muted-foreground text-sm">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Explore Our Accommodation</h2>
            <p className="text-muted-foreground text-lg">Take a virtual tour of our modern facilities</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <Carousel 
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-4/5">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-2"
                    >
                      <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                        >
                          <h4 className="text-3xl font-bold mb-2 text-white drop-shadow-lg">{image.title}</h4>
                          <p className="text-white/90 text-lg drop-shadow-md">{image.alt}</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div>
                <CarouselPrevious className="left-2 md:left-4 w-10 h-10 md:w-14 md:h-14 bg-primary/90 hover:bg-primary border-none shadow-2xl text-white" />
                <CarouselNext className="right-2 md:right-4 w-10 h-10 md:w-14 md:h-14 bg-primary/90 hover:bg-primary border-none shadow-2xl text-white" />
              </div>
            </Carousel>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Location</h2>
            <p className="text-muted-foreground text-lg">Conveniently located near major campuses</p>
          </motion.div>

          {/* Google Maps */}
          <div className="max-w-4xl mx-auto">
            <GoogleMap 
              address="36 Fortuna Ave, Bedworth Park, Vereeniging, 1939, South Africa"
              propertyName="Botlogile 1"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { icon: "🎓", label: "To NWU Campus", distance: "5 min drive" },
                { icon: "🏫", label: "To VUT Campus", distance: "8 min drive" },
                { icon: "🛒", label: "To Shopping", distance: "3 min walk" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-6 text-center"
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <h5 className="font-semibold mb-1">{item.label}</h5>
                  <p className="text-muted-foreground">{item.distance}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Apply for Botlogile 1</h2>
            <p className="text-muted-foreground text-lg">Fill out the application form below to secure your spot</p>
          </motion.div>

          <ApplicationForm propertyName="Botlogile 1" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Botlogile1;
