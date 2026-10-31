import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import botlogileLogo from "../assets/botlogile-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Column 1: About */}
          <div className="space-y-6">
            <img 
              src={botlogileLogo} 
              alt="Botlogile Residence" 
              className="h-24 md:h-28 w-auto"
            />
            <p className="text-secondary-foreground/90 leading-relaxed text-base">
              Premium student accommodation providing safe, comfortable, and modern living spaces for NWU and VUT students.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100090835149307"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a
                href="https://www.instagram.com/botlogileresidence/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>

          {/* Column 2: Properties */}
          <div>
            <h4 className="font-heading font-semibold text-xl mb-6">Our Properties</h4>
            <ul className="space-y-4">
              {[
                { name: "M Village", path: "/m-village" },
                { name: "Botlogile 1", path: "/botlogile-1" },
                { name: "Botlogile 2", path: "/botlogile-2" },
              ].map((property) => (
                <li key={property.path}>
                  <Link
                    to={property.path}
                    className="text-secondary-foreground/90 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group text-base"
                  >
                    <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4"></span>
                    {property.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-heading font-semibold text-xl mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin size={20} className="text-primary" />
                </div>
                <span className="text-secondary-foreground/90 pt-2 text-base">Vanderbijlpark, South Africa</span>
              </li>
              <li className="flex items-start gap-4 group">
                <a
                  href="tel:+27119138323"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300"
                  aria-label="Call us"
                >
                  <Phone size={20} className="text-primary" />
                </a>
                <a
                  href="tel:+27119138323"
                  className="text-secondary-foreground/90 hover:text-primary transition-colors pt-2 text-base"
                >
                  +27 11 913 8323
                </a>
              </li>
              <li className="flex items-start gap-4 group">
                <a
                  href="mailto:info@botlogileres.co.za"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300"
                  aria-label="Email us"
                >
                  <Mail size={20} className="text-primary" />
                </a>
                <a
                  href="mailto:info@botlogileres.co.za"
                  className="text-secondary-foreground/90 hover:text-primary transition-colors pt-2 text-base break-all"
                >
                  info@botlogileres.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 pt-8 mt-8 flex justify-center items-center">
          <p className="text-secondary-foreground/70 text-sm">
            © {new Date().getFullYear()} Roma Student Accommodation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
