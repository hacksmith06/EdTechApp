import React from 'react';
import { ArrowRight, Play, CheckCircle2, Users, BookOpen, Trophy, Briefcase, Star } from 'lucide-react';

const Home = () => {
  const stats = [
    { label: 'Active Students', value: '50,000+' },
    { label: 'Course Completion Rate', value: '94%' },
    { label: 'Average Salary Hike', value: '147%' },
    { label: 'Industry Partners', value: '300+' }
  ];

  const benefits = [
    { icon: <Users className="h-6 w-6 text-indigo-600" />, title: 'Live Classes', description: 'Interactive sessions with industry experts' },
    { icon: <BookOpen className="h-6 w-6 text-indigo-600" />, title: 'Structured Learning', description: 'Curriculum designed by tech leaders' },
    { icon: <Trophy className="h-6 w-6 text-indigo-600" />, title: 'Career Support', description: 'Resume building to job placement' },
    { icon: <Briefcase className="h-6 w-6 text-indigo-600" />, title: 'Industry Projects', description: 'Real-world portfolio building' }
  ];

  const companies = [
    { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
    { name: 'EPAM', logo: 'https://images.unsplash.com/photo-1675467369093-e9fd9fc6d229?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=50&q=80' },
    { name: 'Goldman Sachs', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg' },
    { name: 'Morgan Stanley', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Morgan_Stanley_Logo_1.svg' },
    { name: 'Wells Fargo', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank.svg' },
    { name: 'HSBC', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/HSBC_logo_%282018%29.svg' },
    { name: 'IBM', logo: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=50&q=80' },
    { name: 'ING', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/26/ING_logo.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 mix-blend-multiply"></div>
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Students learning"
          />
        </div>
        <div className="relative px-4 py-24 sm:px-6 sm:py-32 lg:py-40 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Launch Your Tech Career in <span className="text-indigo-200">12 Weeks</span>
              </h1>
              <p className="mt-6 text-xl text-gray-100">
                Join 50,000+ professionals who've transformed their careers through our industry-leading tech programs. Learn from experts, build real projects, get hired.
              </p>
              <div className="mt-10 flex gap-4">
                <button className="inline-flex items-center px-8 py-3 rounded-full text-base font-medium bg-white text-indigo-600 hover:bg-gray-50 transition-colors">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center px-8 py-3 rounded-full text-base font-medium border-2 border-white text-white hover:bg-white/10 transition-colors">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-16 sm:-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 bg-white rounded-2xl shadow-xl p-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-indigo-600">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose TechEd?
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              We combine cutting-edge curriculum with practical experience
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-2 bg-indigo-50 rounded-lg w-fit">
                  {benefit.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Logos Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/[0.07] via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/[0.07] via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Our Graduates Work At
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Join our alumni network at leading companies worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {companies.map((company, index) => (
              <div
                key={index}
                className="group relative bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-20 flex items-center justify-center">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="max-h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.07] to-purple-500/[0.07] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rest of the sections */}
      {/* ... */}
    </div>
  );
};

export default Home;