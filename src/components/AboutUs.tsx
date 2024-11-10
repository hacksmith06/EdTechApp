import React from 'react';
import { Users, Target, Award, Briefcase } from 'lucide-react';

const AboutUs = () => {
  const team = [
    {
      name: 'Dr. Emily Chen',
      role: 'Founder & CEO',
      bio: 'Former Tech Lead at Google with 15+ years of experience in engineering and education.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Education',
      bio: 'Ex-Stanford professor specializing in computer science education and curriculum development.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Sarah Johnson',
      role: 'Director of Mentorship',
      bio: 'Previously led engineering teams at Microsoft, passionate about fostering tech talent.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-indigo-600" />,
      title: 'Mission',
      description: 'To democratize tech education by providing accessible, industry-relevant training to aspiring professionals worldwide.'
    },
    {
      icon: <Award className="h-8 w-8 text-indigo-600" />,
      title: 'Vision',
      description: 'Creating a world where anyone with determination can build a successful career in technology.'
    },
    {
      icon: <Briefcase className="h-8 w-8 text-indigo-600" />,
      title: 'Impact',
      description: '10,000+ graduates, 90% employment rate, partnerships with 100+ tech companies globally.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-indigo-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Transforming Tech Education
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              We're on a mission to make quality tech education accessible to everyone, 
              empowering the next generation of tech leaders.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-6 text-lg text-gray-500">
                Founded in 2020, TechEd emerged from a simple observation: traditional education 
                wasn't keeping pace with the rapidly evolving tech industry. Our founders, 
                experienced tech professionals and educators, saw a gap between academic learning 
                and real-world requirements.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Today, we've grown into a global community of learners, mentors, and industry 
                partners, all united by a common goal: making quality tech education accessible 
                and practical.
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                className="rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Led by industry veterans with a passion for education
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mx-auto w-48 h-48 mb-8">
                  <img
                    className="rounded-full object-cover w-full h-full"
                    src={member.image}
                    alt={member.name}
                  />
                  <div className="absolute inset-0 rounded-full shadow-inner"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-indigo-600 mb-4">{member.role}</p>
                <p className="text-gray-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-white">50,000+</div>
              <div className="mt-2 text-xl text-indigo-100">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-white">90%</div>
              <div className="mt-2 text-xl text-indigo-100">Employment Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-white">100+</div>
              <div className="mt-2 text-xl text-indigo-100">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-white">45+</div>
              <div className="mt-2 text-xl text-indigo-100">Countries Reached</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;