import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-dark-border/50 bg-dark/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 flex-shrink-0">
                <Image
                  src="/logo.jpeg"
                  alt="More Success Academy"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-display text-lg font-bold">
                More Success <span className="gradient-text">Academy</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-md mb-4">
              Empowering African learners with AI-driven education. Personalized
              pathways to career success.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <a
                  href="mailto:info@moresuccessacademy.com"
                  className="hover:text-primary transition-colors"
                >
                  info@moresuccessacademy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-border/50 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} More Success Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
