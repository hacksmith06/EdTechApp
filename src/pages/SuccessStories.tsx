import React from 'react';
import { Star } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: 'Alex Chen',
      role: 'Software Engineer at Google',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      content: 'After completing the Full-Stack Development course, I landed my dream job at Google. The practical projects and mentorship were invaluable.',
      company: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=50&q=80',
      salary: '147% increase',
      course: 'Full-Stack Development'
    },
    {
      name: 'Sarah Miller',
      role: 'Product Manager at Meta',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      content: 'Transitioning from marketing to tech seemed impossible, but TechEd made it happen. The career support team was exceptional.',
      company: 'https://images.unsplash.com/photo-1675467369093-e9fd9fc6d229?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=50&q=80',
      salary: '112% increase',
      course: 'Product Management'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-indigo-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Success Stories
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Real stories from our graduates who transformed their careers through TechEd
            </p>
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                    <p className="text-gray-500">{story.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 mb-6">{story.content}</p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <span className="font-semibold mr-2">Course:</span>
                    {story.course}
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold mr-2">Salary Increase:</span>
                    {story.salary}
                  </div>
                </div>

                <img
                  src={story.company}
                  alt="Company logo"
                  className="h-8 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;