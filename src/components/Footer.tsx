import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Career Guide', path: '/career-guide' },
    { name: 'Contact', path: '/contact' }
  ];

  const resources = [
    { name: 'Blog', path: '/blog' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, path: 'https://facebook.com' },
    { icon: <Twitter className="h-5 w-5" />, path: 'https://twitter.com' },
    { icon: <Linkedin className="h-5 w-5" />, path: 'https://linkedin.com' },
    { icon: <Instagram className="h-5 w-5" />, path: 'https://instagram.com' }
  ];

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Newsletter */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold text-white">TechEd</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Empowering the next generation of tech professionals through quality education and mentorship.
            </p>
            <form className="mt-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Subscribe to our newsletter
              </label>
              <div className="mt-2 flex">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-l-md border-gray-700 bg-gray-800 text-white focus:border-indigo-500 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="inline-flex items-center rounded-r-md border border-l-0 border-gray-700 bg-gray-800 px-4 text-sm font-medium text-white hover:bg-gray-700"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-base text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-base text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Contact Us
            </h3>
            <div className="mt-4 space-y-4 text-gray-300">
              <p>123 Tech Street</p>
              <p>San Francisco, CA 94107</p>
              <p>support@teched.com</p>
              <p>+1 (555) 123-4567</p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} TechEd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;