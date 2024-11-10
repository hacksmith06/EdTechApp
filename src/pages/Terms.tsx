import React from 'react';

const Terms = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using TechEd\'s services, you agree to be bound by these Terms of Service and all applicable laws and regulations.'
    },
    {
      title: '2. User Accounts',
      content: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.'
    },
    {
      title: '3. Course Access',
      content: 'Course access is granted for the duration specified at purchase. Materials may not be shared, copied, or distributed without permission.'
    },
    {
      title: '4. Payment Terms',
      content: 'All payments are processed securely. Refunds are available within 7 days of purchase if you\'re not satisfied with the program.'
    },
    {
      title: '5. Intellectual Property',
      content: 'All course materials, content, and resources are protected by copyright and other intellectual property rights.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-indigo-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Terms of Service
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Last updated: March 15, 2024
            </p>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-500 mb-12">
            Please read these terms of service carefully before using TechEd&apos;s platform and services.
          </p>

          {sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600">
                {section.content}
              </p>
            </div>
          ))}

          <div className="mt-16 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Contact Us
            </h3>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <ul className="mt-4 text-gray-600">
              <li>Email: legal@teched.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Tech Street, San Francisco, CA 94107</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;