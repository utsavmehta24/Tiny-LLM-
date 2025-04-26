import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'animate.css/animate.min.css';
import { FaBrain, FaChartLine, FaUsers, FaCloud, FaAws, FaGoogle, FaMicrosoft, FaFacebook, FaChevronDown, FaChevronUp, FaShieldAlt, FaSyncAlt, FaGithub } from 'react-icons/fa';

export default function HomePage() {
  // State for counters
  const [projects, setProjects] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [users, setUsers] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

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

  const features = [
    { icon: <FaBrain className="text-4xl text-teal-400" />, title: 'AI Insights', desc: 'Leverage cutting-edge AI to gain deep data insights and predictions.' },
    { icon: <FaChartLine className="text-4xl text-teal-400" />, title: 'Real-time Analytics', desc: 'Monitor performance in real time with our AI-driven dashboards.' },
    { icon: <FaCloud className="text-4xl text-teal-400" />, title: 'Cloud Integration', desc: 'Seamlessly integrate with cloud platforms for scalable processing.' },
    { icon: <FaUsers className="text-4xl text-teal-400" />, title: 'User Friendly', desc: 'Intuitive UI designed for all users, no data science background needed.' },
    { icon: <FaShieldAlt className="text-4xl text-teal-400" />, title: 'Security', desc: 'Top-notch security protocols protect your data at every step.' },
    { icon: <FaSyncAlt className="text-4xl text-teal-400" />, title: 'Auto Updates', desc: 'Continuous improvements with zero downtime through auto updates.' },
  ];

  const timeline = [
    { title: 'Data Collection', desc: 'Gather data from multiple sources securely.', icon: <FaCloud className="text-xl" /> },
    { title: 'Data Processing', desc: 'Clean and process data using our AI pipelines.', icon: <FaBrain className="text-xl" /> },
    { title: 'Model Training', desc: 'Train models with our optimized machine learning algorithms.', icon: <FaChartLine className="text-xl" /> },
    { title: 'Deployment', desc: 'Deploy models into production with zero hassle.', icon: <FaCloud className="text-xl" /> },
    { title: 'Monitoring & Feedback', desc: 'Continuously monitor model performance and user feedback.', icon: <FaChartLine className="text-xl" /> },
    { title: 'Continuous Improvement', desc: 'Models improve over time with ongoing training cycles.', icon: <FaSyncAlt className="text-xl" /> },
  ];

  const testimonials = [
    { name: 'Jane Doe', role: 'CEO, TechCorp', img: 'https://i.pravatar.cc/100?img=32', quote: 'This AI platform revolutionized our business. The accuracy and insights are unparalleled.' },
    { name: 'John Smith', role: 'CTO, InnovateX', img: 'https://i.pravatar.cc/100?img=12', quote: 'Easy to use and highly scalable. Our team loves the real-time analytics feature!' },
    { name: 'Alice Johnson', role: 'Data Scientist, MLHub', img: 'https://i.pravatar.cc/100?img=56', quote: 'The predictive models are incredibly accurate. It has significantly boosted our efficiency.' },
  ];

  const partners = [
    { name: 'Amazon', icon: <FaAws className="text-3xl" /> },
    { name: 'Google', icon: <FaGoogle className="text-3xl" /> },
    { name: 'Microsoft', icon: <FaMicrosoft className="text-3xl" /> },
    { name: 'Meta', icon: <FaFacebook className="text-3xl" /> },
    { name: 'GitHub', icon: <FaGithub className="text-3xl" /> },
  ];

  const faqs = [
    { q: 'What is the pricing model?', a: 'Our platform offers flexible pricing plans based on usage. Contact sales for details.' },
    { q: 'Can I integrate this with my existing tools?', a: 'Yes, our API and integrations allow seamless connection with various platforms.' },
    { q: 'How secure is my data?', a: 'We use industry-standard encryption and compliance measures to ensure data security.' },
    { q: 'Is there a free trial available?', a: 'Yes, we offer a 14-day free trial with full access to all features.' },
    { q: 'Do you provide customer support?', a: 'Absolutely! 24/7 customer support is available via chat and email.' },
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center h-screen bg-gray-900 overflow-hidden">
        <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-clip-text text-transparent"
        >
          NextGen AI Analytics
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="mt-4 text-xl md:text-2xl text-gray-300 max-w-xl"
        >
          Unlock powerful machine learning insights with our cutting-edge platform.
        </motion.p>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}
          className="mt-8"
        >
          <a href="#"
            className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow-md transform hover:scale-105 transition duration-300"
          >
            Get Started
          </a>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div key={idx} className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <p className="text-5xl font-bold text-teal-400">{projects}</p>
                <p className="mt-2 text-gray-400">Projects Completed</p>
              </motion.div>
            </div>
            <div className="p-6">
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
                <p className="text-5xl font-bold text-teal-400">{accuracy}%</p>
                <p className="mt-2 text-gray-400">Accuracy</p>
              </motion.div>
            </div>
            <div className="p-6">
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
                <p className="text-5xl font-bold text-teal-400">{users}+</p>
                <p className="mt-2 text-gray-400">Active Users</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="relative border-l-2 border-gray-700 ml-4 pl-6">
            {timeline.map((step, index) => (
              <motion.div key={index} className="mb-10 ml-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-4 flex items-center justify-center w-8 h-8 rounded-full bg-teal-500">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <motion.div key={idx} className="bg-gray-800 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <img src={test.img} alt={test.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">{test.name}</p>
                    <p className="text-sm text-gray-400">{test.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">"{test.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="py-20 bg-gray-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Leading Companies</h2>
          <motion.div className="flex gap-12 py-4"
            animate={{ x: [0, -400] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {partners.concat(partners).map((partner, idx) => (
              <div key={idx} className="flex items-center justify-center w-32 h-20 bg-gray-700 rounded-lg">
                {partner.icon}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <div key={idx} className="border border-gray-700 rounded-lg overflow-hidden">
                <button onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full px-4 py-2 text-left flex justify-between items-center bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <span>{item.q}</span>
                  {faqOpen === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {faqOpen === idx && (
                  <div className="px-4 py-2 text-gray-400 bg-gray-800 animate__animated animate__fadeIn">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News/Updates Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest News & Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="bg-gray-700 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h3 className="text-xl font-semibold mb-2">AI Breakthrough 2025</h3>
              <p className="text-gray-400 mb-4">Jan 15, 2025</p>
              <p className="text-gray-300">Discover our latest breakthrough in machine learning algorithms that just released.</p>
            </motion.div>
            <motion.div className="bg-gray-700 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h3 className="text-xl font-semibold mb-2">New Integration Available</h3>
              <p className="text-gray-400 mb-4">Feb 28, 2025</p>
              <p className="text-gray-300">We now support seamless integration with major cloud platforms for easier deployment.</p>
            </motion.div>
            <motion.div className="bg-gray-700 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <h3 className="text-xl font-semibold mb-2">User Community Launch</h3>
              <p className="text-gray-400 mb-4">Mar 10, 2025</p>
              <p className="text-gray-300">Join our new user community forum to share tips, tricks, and best practices.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Data?</h2>
        <p className="text-gray-400 mb-8">Experience the future of analytics with our AI-powered platform. Get started now!</p>
        <motion.div whileHover={{ scale: 1.1 }} className="inline-block">
          <a href="#"
            className="px-8 py-4 bg-teal-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            Get Started Free
          </a>
        </motion.div>
      </section>
    </div>
  );
}

