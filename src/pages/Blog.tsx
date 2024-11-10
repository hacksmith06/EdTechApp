import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of Web Development: 2024 and Beyond',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
      author: 'Sarah Chen',
      date: 'Mar 15, 2024',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Machine Learning: A Beginner\'s Guide',
      excerpt: 'Understanding the basics of machine learning and its applications in today\'s world.',
      author: 'Michael Rodriguez',
      date: 'Mar 12, 2024',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'UI/UX Design Principles Every Developer Should Know',
      excerpt: 'Essential design principles that can make you a better developer.',
      author: 'Emily Zhang',
      date: 'Mar 10, 2024',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-indigo-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              TechEd Blog
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Insights, tutorials, and industry updates from our experts
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-6">
                <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-500">{post.excerpt}</p>
                <div className="mt-4">
                  <button className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;