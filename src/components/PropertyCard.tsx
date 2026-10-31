import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Home, GraduationCap, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  name: string;
  slug: string;
  image: string;
  rooms: number;
  genderSplit: string;
  universities: string[];
  address: string;
  index: number;
}

const PropertyCard = ({
  name,
  slug,
  image,
  rooms,
  genderSplit,
  universities,
  address,
  index,
}: PropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={`${name} student accommodation exterior`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent group-hover:from-foreground/95 transition-all duration-500" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="glass-card rounded-xl p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="font-heading font-bold text-3xl mb-3 text-foreground">
            {name}
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Home size={14} />
              {rooms} Rooms
            </Badge>
            <Badge
              variant="outline"
              className="flex items-center gap-1 bg-card/80"
            >
              <Users size={14} />
              {genderSplit}
            </Badge>
            {universities.map((uni) => (
              <Badge
                key={uni}
                variant="outline"
                className="flex items-center gap-1 bg-card/80"
              >
                <GraduationCap size={14} />
                {uni}
              </Badge>
            ))}
          </div>

          <Link to={slug}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors duration-300 shadow-md"
            >
              Learn More
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
