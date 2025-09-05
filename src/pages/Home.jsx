
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Code, Rocket, User, Mail, Github } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import Hero3D from '../components/Hero3D';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import About from './About';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <PageTransition>
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pb-10 relative overflow-x-hidden">
        <ParticleBackground />
        
        {/* Hero Section */}
        <div className="min-h-screen relative">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm" />
          
          <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Text Content */}
                <div className="text-left order-2 lg:order-1">
                  <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
                    <span className="inline-block px-3 sm:px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
                      Welcome to my portfolio
                    </span>
                  </motion.div>
                  
                  <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent block">
                      Hi, I'm
                    </span>
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent block">
                      Yugeshkaran 
                    </span>
                  </motion.h1>
                  
                  <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
                    {/* Full-Stack Developer specializing in modern web technologies. <br /> */}
                    Ex - MERN Stack Developer Intern at Qunatim Sharq Innovative Solutions, Vellore.
                  </motion.p>
                  
                  <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm sm:text-base"
                    >
                      <Code size={18} />
                      <Link to="/projects" className="flex items-center gap-2">
                      View My Work

                      </Link>
                    </motion.button>
                    
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href='/Yugeshkaran_Resume_SoftwareDev.pdf'
                      className="px-6 cursor-pointer sm:px-8 py-3 sm:py-4 border-2 border-gray-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 text-sm sm:text-base"
                    >
                      <Download size={18} />
                      Download Resume
                    </motion.a>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-gray-400 text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <Rocket size={16} />
                      <span>Available for freelance</span>
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse hidden sm:block"></div>
                  </motion.div>
                </div>
                
                {/* 3D Graphics */}
                <motion.div variants={itemVariants} className="relative order-1 lg:order-2">
                  <div className="w-full h-48 sm:h-64 md:h-80 max-w-md mx-auto lg:max-w-none">
                    <Hero3D />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-500/5 rounded-lg pointer-events-none"></div>
                </motion.div>
              </motion.div>
              
              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-blue-400 transition-colors duration-300"
                  onClick={handleScrollDown}
                >
                  <span className="text-sm mb-2">Scroll to explore</span>
                  <ArrowDown size={20} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* About Preview Section */}
        {/* <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                I'm a passionate developer with over 5 years of experience creating digital solutions 
                that make a difference. I love turning complex problems into simple, beautiful designs.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700 text-center"
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <User className="text-blue-400" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Experience</h3>
                <p className="text-gray-400 text-sm sm:text-base">5+ years of professional development experience</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700 text-center"
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Code className="text-purple-400" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Projects</h3>
                <p className="text-gray-400 text-sm sm:text-base">50+ successful projects delivered</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700 text-center sm:col-span-2 lg:col-span-1"
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Github className="text-green-400" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Open Source</h3>
                <p className="text-gray-400 text-sm sm:text-base">Active contributor to the developer community</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-8 sm:mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 mx-auto text-sm sm:text-base"
              >
                <Mail size={18} />
                <Link to={"/contact"} className="flex items-center gap-2">
                Get In Touch

                </Link>
              </motion.button>
            </motion.div>
          </div>
        </div> */}

        <About/>
      </div>
    </PageTransition>
  );
};

export default Home;
