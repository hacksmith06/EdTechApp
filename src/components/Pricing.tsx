import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '49',
      features: [
        'Access to fundamental courses',
        'Community forum access',
        'Monthly group mentoring',
        'Basic project templates'
      ]
    },
    {
      name: 'Professional',
      price: '99',
      featured: true,
      features: [
        'All Starter features',
        'Advanced course access',
        'Weekly 1-on-1 mentoring',
        'Career coaching sessions',
        'Real-world project workshops'
      ]
    },
    {
      name: 'Enterprise',
      price: '199',
      features: [
        'All Professional features',
        'Custom learning path',
        'Priority support',
        'Team collaboration tools',
        'Corporate training options'
      ]
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the plan that best fits your learning goals
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg overflow-hidden ${
                plan.featured ? 'ring-2 ring-indigo-600 scale-105' : ''
              }`}
            >
              <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                <div className="flex justify-center">
                  <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600">
                    {plan.name}
                  </span>
                </div>
                <div className="mt-4 flex justify-center text-6xl font-extrabold text-gray-900">
                  <span className="ml-1 text-2xl font-medium">$</span>
                  {plan.price}
                  <span className="ml-1 text-2xl font-medium">/mo</span>
                </div>
              </div>
              <div className="px-6 pt-6 pb-8 bg-gray-50 sm:p-10">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle2 className="flex-shrink-0 h-6 w-6 text-green-500" />
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button className={`w-full px-6 py-3 text-center text-base font-medium rounded-md ${
                    plan.featured
                      ? 'text-white bg-indigo-600 hover:bg-indigo-700'
                      : 'text-indigo-600 bg-white border border-indigo-600 hover:bg-gray-50'
                  }`}>
                    Get Started
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

export default Pricing;