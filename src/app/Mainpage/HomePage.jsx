// src/app/Mainpage/HomePage.jsx
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import 'animate.css/animate.min.css';
import { FaBrain, FaChartLine, FaUsers, FaCloud, FaAws, FaGoogle, FaMicrosoft, FaFacebook, FaChevronDown, FaChevronUp, FaShieldAlt, FaSyncAlt, FaGithub } from 'react-icons/fa';

export function useCountOnView({ target }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Create observer to watch visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate over ~2 seconds
          const duration = 2000;
          const stepTime = Math.max(Math.floor(duration / target), 50);
          let current = 0;
          const timer = setInterval(() => {
            current += 1;
            if (current >= target) {
              clearInterval(timer);
              current = target;
            }
            setCount(current);
          }, stepTime);

          // Stop observing after trigger
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // start when 50% visible
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return [ref, count];
}

export default function HomePage() {
  // State for counters
  const [projects, setProjects] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [users, setUsers] = useState(0);
  const [faqOpen, setFaqOpen] = useState(null);

  useEffect(() => {
    // Animate counters on mount
    let proj = 0;
    const projTarget = 1500;
    const projInterval = setInterval(() => {
      proj += 50;
      if (proj >= projTarget) {
        proj = projTarget;
        clearInterval(projInterval);
      }
      setProjects(proj);
    }, 50);

    let acc = 0;
    const accTarget = 99;
    const accInterval = setInterval(() => {
      acc += 1;
      if (acc >= accTarget) {
        acc = accTarget;
        clearInterval(accInterval);
      }
      setAccuracy(acc);
    }, 20);

    let usr = 0;
    const usrTarget = 10000;
    const usrInterval = setInterval(() => {
      usr += 200;
      if (usr >= usrTarget) {
        usr = usrTarget;
        clearInterval(usrInterval);
      }
      setUsers(usr);
    }, 50);

    return () => {
      clearInterval(projInterval);
      clearInterval(accInterval);
      clearInterval(usrInterval);
    };
  }, []);

  // Feature list
  const features = [
    { icon: <FaBrain className="text-4xl text-teal-400" />, title: 'AI Insights', desc: 'Leverage cutting-edge AI to gain deep data insights and predictions.' },
    { icon: <FaChartLine className="text-4xl text-teal-400" />, title: 'Real-time Analytics', desc: 'Monitor performance in real time with our AI-driven dashboards.' },
    { icon: <FaCloud className="text-4xl text-teal-400" />, title: 'Cloud Integration', desc: 'Seamlessly integrate with cloud platforms for scalable processing.' },
    { icon: <FaUsers className="text-4xl text-teal-400" />, title: 'User Friendly', desc: 'Intuitive UI designed for all users, no data science background needed.' },
    { icon: <FaShieldAlt className="text-4xl text-teal-400" />, title: 'Security', desc: 'Top-notch security protocols protect your data at every step.' },
    { icon: <FaSyncAlt className="text-4xl text-teal-400" />, title: 'Auto Updates', desc: 'Continuous improvements with zero downtime through auto updates.' },
  ];

  // Timeline steps
  const timeline = [
    { title: 'Data Collection', desc: 'Gather data from multiple sources securely.', icon: <FaCloud className="text-xl" /> },
    { title: 'Data Processing', desc: 'Clean and process data using our AI pipelines.', icon: <FaBrain className="text-xl" /> },
    { title: 'Model Training', desc: 'Train models with our optimized machine learning algorithms.', icon: <FaChartLine className="text-xl" /> },
    { title: 'Deployment', desc: 'Deploy models into production with zero hassle.', icon: <FaCloud className="text-xl" /> },
    { title: 'Monitoring & Feedback', desc: 'Continuously monitor model performance and user feedback.', icon: <FaChartLine className="text-xl" /> },
    { title: 'Continuous Improvement', desc: 'Models improve over time with ongoing training cycles.', icon: <FaSyncAlt className="text-xl" /> },
  ];

  // Testimonials
  const testimonials = [
    { name: 'Jane Doe', role: 'CEO, TechCorp', img: 'https://i.pravatar.cc/100?img=32', quote: 'This AI platform revolutionized our business. The accuracy and insights are unparalleled.' },
    { name: 'John Smith', role: 'CTO, InnovateX', img: 'https://i.pravatar.cc/100?img=12', quote: 'Easy to use and highly scalable. Our team loves the real-time analytics feature!' },
    { name: 'Alice Johnson', role: 'Data Scientist, MLHub', img: 'https://i.pravatar.cc/100?img=56', quote: 'The predictive models are incredibly accurate. It has significantly boosted our efficiency.' },
  ];

  // Partners
  const partners = [
    { name: 'Amazon', icon: <FaAws className="text-3xl" /> },
    { name: 'Google', icon: <FaGoogle className="text-3xl" /> },
    { name: 'Microsoft', icon: <FaMicrosoft className="text-3xl" /> },
    { name: 'Meta', icon: <FaFacebook className="text-3xl" /> },
    { name: 'GitHub', icon: <FaGithub className="text-3xl" /> },
  ];

  // FAQs
  const faqs = [
    { q: 'What is the pricing model?', a: 'Our platform offers flexible pricing plans based on usage. Contact sales for details.' },
    { q: 'Can I integrate this with my existing tools?', a: 'Yes, our API and integrations allow seamless connection with various platforms.' },
    { q: 'How secure is my data?', a: 'We use industry-standard encryption and compliance measures to ensure data security.' },
    { q: 'Is there a free trial available?', a: 'Yes, we offer a 14-day free trial with full access to all features.' },
    { q: 'Do you provide customer support?', a: 'Absolutely! 24/7 customer support is available via chat and email.' },
  ];

  const loopingPartners = [...partners, ...partners];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen py-20 bg-gray-900 overflow-hidden">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-clip-text text-transparent px-4"
        >
          NextGen AI Analytics
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl px-4"
        >
          Unlock powerful machine learning insights with our cutting-edge platform.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8"
        >
          <Link href="/Dashboard" className="px-6 sm:px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow-md transform hover:scale-105 transition duration-300">
            Get Started
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 sm:p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { value: projects, label: 'Projects Completed' },
              { value: `${accuracy}%`, label: 'Accuracy' },
              { value: `${users}+`, label: 'Active Users' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="p-4 sm:p-6"
              >
                <p className="text-4xl sm:text-5xl font-bold text-teal-400">{item.value}</p>
                <p className="mt-2 text-sm sm:text-base text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">How It Works</h2>
          <div className="relative border-l-2 border-gray-700 ml-4 pl-6">
            {timeline.map((step, index) => (
              <motion.div key={index} className="mb-8 sm:mb-10 ml-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute -left-4 flex items-center justify-center w-8 h-8 rounded-full bg-teal-500">
                  {step.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((test, idx) => (
              <motion.div key={idx} className="bg-gray-800 p-5 sm:p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <img src={test.img} alt={test.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">{test.name}</p>
                    <p className="text-xs sm:text-sm text-gray-400">{test.role}</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-300">"{test.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Partner Logos Section */}
      <section className="py-12 sm:py-16 bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 sm:mb-10">
            Trusted by Leading Companies
          </h2>
          <div className="overflow-hidden">
            <motion.div
              className="flex items-center space-x-8 sm:space-x-12"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: 'linear',
              }}
            >
              {loopingPartners.map((partner, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gray-800 rounded-full"
                >
                  {partner.icon}
                  <span className="text-xs sm:text-sm text-white mt-2 hidden sm:block">{partner.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Frequently Asked Questions</h2>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="border border-gray-700 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                    className="w-full px-4 py-2 text-left flex justify-between items-center bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-sm sm:text-base">{item.q}</span>
                    {faqOpen === idx ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {faqOpen === idx && (
                    <div className="px-4 py-2 text-sm sm:text-base text-gray-400 bg-gray-800 animate__animated animate__fadeIn">
                      {item.a}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News/Updates Section */}
      <section className="py-16 sm:py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Latest News & Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'AI Breakthrough 2025',
                date: 'Jan 15, 2025',
                body: 'Discover our latest breakthrough in machine learning algorithms that just released.'
              },
              {
                title: 'New Integration Available',
                date: 'Feb 28, 2025',
                body: 'We now support seamless integration with major cloud platforms for easier deployment.'
              },
              {
                title: 'User Community Launch',
                date: 'Mar 10, 2025',
                body: 'Join our new user community forum to share tips, tricks, and best practices.'
              }
            ].map((news, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-700 p-5 sm:p-6 rounded-lg shadow-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{news.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">{news.date}</p>
                <p className="text-sm sm:text-base text-gray-300">{news.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Ready to Transform Your Data?</h2>
          <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">Experience the future of analytics with our AI-powered platform. Get started now!</p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/Dashboard"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-teal-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              Get Started Free
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}