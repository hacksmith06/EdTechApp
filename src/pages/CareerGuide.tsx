import React from 'react';
import { BookOpen, Target, Award, Briefcase } from 'lucide-react';

const CareerGuide = () => {
  const guides = [
    {
      title: 'Resume Building',
      description: 'Learn how to create a tech resume that stands out to recruiters.',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: 'Interview Preparation',
      description: 'Master technical interviews with our comprehensive guide.',
      icon: <Target className="h-6 w-6" />
    },
    {
      title: 'Salary Negotiation',
      description: 'Tips and strategies for negotiating your tech salary.',
      icon: <Award className="h-6 w-6" />
    },
    {
      title: 'Career Paths',
      description: 'Explore different career paths in technology.',
      icon: <Briefcase className="h-6 w-6" />
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-indigo-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Career Guide
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Your comprehensive guide to building a successful career in tech
            </p>
          </div>
        </div>
      </div>

      {/* Guides Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="p-2 bg-indigo-50 rounded-lg w-fit mb-4">
                {guide.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h3>
              <p className="text-gray-500">{guide.description}</p>
              <button className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Free Career Resources
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Download our free resources to help you in your tech career journey
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Tech Resume Template
                </h3>
                <p className="text-gray-500 mb-4">
                  ATS-friendly resume template specifically designed for tech roles
                </p>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                  Download Template →
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Interview Checklist
                </h3>
                <p className="text-gray-500 mb-4">
                  Comprehensive checklist to prepare for technical interviews
                </p>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                  Download Checklist →
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Salary Guide 2024
                </h3>
                <p className="text-gray-500 mb-4">
                  Latest tech salary data and negotiation strategies
                </p>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                  Download Guide →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerGuide;