import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[50%] top-0 h-[500px] w-[500px] -translate-x-[50%] bg-indigo-50 opacity-20 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-indigo-50 text-indigo-600 mb-6">
              <span className="animate-pulse mr-2">🔥</span> New courses added weekly
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Master Tech Skills</span>
              <span className="block text-indigo-600 mt-2">Shape Your Future</span>
            </h1>
            <p className="mt-6 text-base text-gray-500 sm:mt-8 sm:text-xl lg:text-lg xl:text-xl">
              Transform your career with industry-relevant tech skills. Learn from experts, build real projects, and join a community of ambitious professionals.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
                  Start Learning Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-200 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-500 flex items-center justify-center sm:justify-start">
                <span className="flex items-center">
                  <span className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  50,000+ professionals already learning
                </span>
              </p>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md overflow-hidden group">
              <img
                className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Students collaborating"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;