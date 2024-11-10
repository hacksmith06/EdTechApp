import React from 'react';
import { ArrowRight, Code2, Database, Palette, Smartphone } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: 'Full-Stack Web Development',
      description: 'Master modern web development with React, Node.js, and cloud technologies.',
      duration: '12 weeks',
      level: 'Intermediate',
      icon: <Code2 className="h-6 w-6" />,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
      topics: [
        'HTML, CSS, JavaScript',
        'React & Redux',
        'Node.js & Express',
        'MongoDB & SQL',
        'AWS Deployment'
      ],
      price: '$1999'
    },
    {
      title: 'Data Science & Analytics',
      description: 'Learn Python, data analysis, machine learning, and visualization techniques.',
      duration: '10 weeks',
      level: 'Beginner',
      icon: <Database className="h-6 w-6" />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      topics: [
        'Python Programming',
        'Data Analysis with Pandas',
        'Machine Learning',
        'Data Visualization',
        'Statistical Analysis'
      ],
      price: '$1799'
    },
    {
      title: 'UI/UX Design',
      description: 'Create beautiful, user-centered designs with industry-standard tools.',
      duration: '8 weeks',
      level: 'All Levels',
      icon: <Palette className="h-6 w-6" />,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80',
      topics: [
        'Design Principles',
        'Figma & Sketch',
        'User Research',
        'Prototyping',
        'Design Systems'
      ],
      price: '$1599'
    },
    {
      title: 'Mobile App Development',
      description: 'Build iOS and Android apps using React Native and modern practices.',
      duration: '10 weeks',
      level: 'Intermediate',
      icon: <Smartphone className="h-6 w-6" />,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      topics: [
        'React Native',
        'iOS Development',
        'Android Development',
        'App Store Deployment',
        'Mobile UX Design'
      ],
      price: '$1899'
    }
  ];

  return (
    <div className="bg-white pt-24">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-indigo-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Our Courses
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Industry-relevant courses designed to help you master the skills that matter most.
            </p>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    {course.icon}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
                  <span className="text-2xl font-bold text-indigo-600">{course.price}</span>
                </div>
                <p className="text-gray-500 mb-6">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span className="flex items-center">
                    <span className="mr-2">⏱</span>
                    {course.duration}
                  </span>
                  <span className="flex items-center">
                    <span className="mr-2">📚</span>
                    {course.level}
                  </span>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">What you'll learn:</h4>
                  <ul className="space-y-2">
                    {course.topics.map((topic, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <span className="mr-2">✓</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Not sure which course to choose?
            </h2>
            <p className="mt-4 text-xl text-indigo-100">
              Schedule a free consultation with our career advisors
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="inline-flex items-center px-8 py-3 rounded-full text-base font-medium bg-white text-indigo-600 hover:bg-gray-50 transition-colors">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;