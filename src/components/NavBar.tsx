import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, ChevronDown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './LoginModal';
import UserMenu from './UserMenu';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' }
  ];

  const resources = [
    { name: 'Blog', path: '/blog' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Career Guide', path: '/career-guide' },
    { name: 'FAQs', path: '/faqs' }
  ];

  return (
    <>
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <BookOpen className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">TechEd</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${
                    isActive(item.path)
                      ? 'text-indigo-600'
                      : 'text-gray-600 hover:text-indigo-600'
                  } transition-colors`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="flex items-center text-gray-600 hover:text-indigo-600"
                >
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isResourcesOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    {resources.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                        onClick={() => setIsResourcesOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {user ? (
                <UserMenu />
              ) : (
                <>
                  <button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    Login
                  </button>
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
                    Enroll Now
                  </button>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`${
                      isActive(item.path)
                        ? 'text-indigo-600'
                        : 'text-gray-600 hover:text-indigo-600'
                    } block px-3 py-2`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Resources */}
                <div className="px-3 py-2">
                  <button
                    onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                    className="flex items-center text-gray-600 hover:text-indigo-600"
                  >
                    Resources
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {isResourcesOpen && (
                    <div className="pl-4 pt-2 space-y-2">
                      {resources.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block text-gray-600 hover:text-indigo-600"
                          onClick={() => {
                            setIsOpen(false);
                            setIsResourcesOpen(false);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="px-3 py-2 space-y-2">
                  {user ? (
                    <button
                      onClick={() => {
                        const { logout } = useAuth();
                        logout();
                        setIsOpen(false);
                      }}
                      className="w-full text-left text-gray-600 hover:text-indigo-600"
                    >
                      Logout
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setIsLoginModalOpen(true);
                          setIsOpen(false);
                        }}
                        className="w-full text-indigo-600 hover:text-indigo-700 transition-colors"
                      >
                        Login
                      </button>
                      <button className="w-full bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
                        Enroll Now
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default NavBar;