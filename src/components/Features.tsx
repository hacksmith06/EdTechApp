import React from 'react';
import { Code2, Users, Rocket, GraduationCap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Code2 className="h-8 w-8 text-indigo-600" />,
      title: 'Industry-Relevant Curriculum',
      description: 'Courses designed with input from tech leaders to ensure you learn what matters.'
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: 'Expert Mentorship',
      description: 'Get guidance from experienced professionals who know the industry inside out.'
    },
    {
      icon: <Rocket className="h-8 w-8 text-indigo-600" />,
      title: 'Project-Based Learning',
      description: 'Build real-world projects that you can add to your portfolio.'
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-indigo-600" />,
      title: 'Career Support',
      description: 'Get help with job placement, interview prep, and career planning.'
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose TechEd?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We combine cutting-edge curriculum with practical experience to help you succeed.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="space-y-6">
                  <div>{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;