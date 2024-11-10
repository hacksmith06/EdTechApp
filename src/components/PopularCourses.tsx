import React from 'react';
import { ArrowRight, Code2, Database, Palette, Smartphone } from 'lucide-react';

const PopularCourses = () => {
  const courses = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: 'Full-Stack Web Development',
      description: 'Master modern web development with React, Node.js, and cloud technologies.',
      duration: '12 weeks',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80'
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Data Science & Analytics',
      description: 'Learn Python, data analysis, machine learning, and visualization techniques.',
      duration: '10 weeks',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'UI/UX Design',
      description: 'Create beautiful, user-centered designs with industry-standard tools.',
      duration: '8 weeks',
      level: 'All Levels',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80'
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Mobile App Development',
      description: 'Build iOS and Android apps using React Native and modern practices.',
      duration: '10 weeks',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Popular Courses
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Start your journey with our most in-demand courses
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <div key={index} className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-cover w-full h-48"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    {course.icon}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
                <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;