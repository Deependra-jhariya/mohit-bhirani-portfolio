import { Link } from 'react-router-dom';
import { Mail, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="w-6 h-6 text-emerald-500" />
              <span className="text-xl font-bold text-white">Mohit Bhirani</span>
            </div>
            <p className="text-sm text-gray-400">
              Node.js Developer crafting robust backend solutions and scalable applications.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-emerald-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-emerald-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-emerald-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm hover:text-emerald-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm hover:text-emerald-500 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <a
              href="mailto:mankudeveloper786@gmail.com"
              className="flex items-center space-x-2 text-sm hover:text-emerald-500 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>mankudeveloper786@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Mohit Bhirani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
