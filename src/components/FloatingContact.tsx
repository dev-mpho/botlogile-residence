import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingContact = () => {
  return (
    <motion.a
      href="https://wa.me/27678124197"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      aria-label="Contact us on WhatsApp"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      >
        <MessageCircle size={28} />
      </motion.div>
    </motion.a>
  );
};

export default FloatingContact;
