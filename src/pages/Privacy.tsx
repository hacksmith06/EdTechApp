import React from 'react';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Information We Collect',
      content: 'We collect information that you provide directly to us, including name, email, and payment information when you register for our services.'
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'How We Use Your Information',
      content: 'We use your information to provide and improve our services, communicate with you, and ensure a personalized learning experience.'
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Information Security',
      content: 'We implement appropriate technical and organizational measures to protect your personal information.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Your Rights',
      content: 'You have the right to access, correct, or delete your personal information at any time.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-indigo-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Last updated: March 15, 2024
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-500 mb-12">
            At TechEd, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
          </p>

          <div className="grid gap-12">
            {sections.map((section, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                    {section.icon}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-600">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Contact Our Privacy Team
            </h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about our Privacy Policy or how we handle your information, please contact us:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>Email: privacy@teched.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Tech Street, San Francisco, CA 94107</li>
            </ul>
          </div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700">
              Update Privacy Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;