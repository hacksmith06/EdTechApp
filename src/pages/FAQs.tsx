import React from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'What makes TechEd different from other platforms?',
      answer: 'TechEd combines industry-expert instruction, practical projects, and personalized mentorship. Our curriculum is constantly updated to match industry demands, and we offer career support throughout your journey.'
    },
    {
      question: 'Do I need prior experience to enroll?',
      answer: 'While some courses require basic programming knowledge, we have programs for complete beginners. Each course listing specifies prerequisites, and our advisors can help you choose the right path.'
    },
    {
      question: 'What is the course format?',
      answer: 'Courses combine live online sessions, self-paced learning, practical projects, and 1-on-1 mentorship. You\'ll have access to our learning platform, community forums, and career resources.'
    },
    {
      question: 'What kind of career support do you offer?',
      answer: 'We provide resume reviews, interview preparation, portfolio building guidance, and job placement assistance. Our career coaches work with you to develop a personalized career strategy.'
    },
    {
      question: 'Are there payment plans available?',
      answer: 'Yes, we offer flexible payment options including monthly installments and income share agreements. Contact our admissions team to learn more about financing options.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'We offer a 7-day money-back guarantee for all our courses. If you\'re not satisfied with the program, you can request a full refund within the first week.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-indigo-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Find answers to common questions about our programs and platform
            </p>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 hover:border-indigo-200 transition-colors"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900 text-left">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-indigo-600" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-500">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Still have questions?
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Our team is here to help you find the right program for your goals.
            </p>
            <button className="mt-8 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;