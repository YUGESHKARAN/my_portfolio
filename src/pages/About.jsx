
import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Award, } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const About = () => {
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

  const stats = [
    // { icon: Calendar, label: 'Months Experience', value: '6+' },
    { icon: Award, label: 'Projects Done', value: '11+' },
    { icon: Award, label: 'Paper Published', value: '2' },
    { icon: Award, label: 'Courses & Certification', value: '13+' },
    { icon: Award, label: 'Internships Completed', value: '2' },
    // { icon: User, label: 'Happy Clients', value: '30+' },
    // { icon: MapPin, label: 'Countries Served', value: '10+' },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-20">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                    <User size={80} className="text-white" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Yugeshkaran P.</h3>
                    <p className="text-blue-400 font-medium">Full-Stack Developer</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <div>
              <motion.div variants={itemVariants} className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    About Me
                  </span>
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                As an AI enthusiast, I focus on creating innovations that address real-time problems, contributing to both my personal growth and the success of my company.
                </p>
                
                {/* <p>
                  I specialize in modern JavaScript frameworks, particularly React and Node.js, 
                  and have extensive experience with cloud technologies, databases, and DevOps practices. 
                  I believe in writing clean, maintainable code and creating user experiences that 
                  are both beautiful and functional.
                </p>
                
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community through 
                  blog posts and speaking engagements.
                </p> */}
              </motion.div>

               {/* Education Section */}
              <motion.div variants={itemVariants} className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Academic Credentials</h3>
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg md:p-6 p-4 border border-gray-700">
                  <div className="flex items-center mb-2">
                    <Award className="text-blue-400 mr-3" size={24} />
                    <span className="text-gray-400 text-sm font-medium">Under Graduate</span>
                  </div>
                  <div className="text-white text-sm md:text-lg font-semibold">
                    B.Tech in Artificial Intelligence and Data Science
                  </div>
                  <div className="text-blue-400 md:text-base text-sm font-semibold mt-1">
                    Dhanalakshmi Srinivasan University
                  </div>
                  <div className="text-gray-300 text-xs md:text-base mt-1">
                    Batch 2021 - 2025 &nbsp;|&nbsp; C.G.P.A: <span className="font-bold text-blue-400">9.21</span>
                  </div>
                </div>

                 <div className="bg-gray-800/30 mt-5 backdrop-blur-sm rounded-lg md:p-6 p-4 border border-gray-700">
                  <div className="flex items-center mb-2">
                    <Award className="text-blue-400 mr-3" size={24} />
                    <span className="text-gray-400 text-sm font-medium">Intermediate</span>
                  </div>
                  <div className="text-white text-sm md:text-lg font-semibold">
                    Computer Science
                  </div>
                  <div className="text-blue-400 md:text-base text-sm font-semibold mt-1">
                    Sai Vidhyalaya C.B.S.E School
                  </div>
                  <div className="text-gray-300 text-xs md:text-base mt-1">
                    Batch 2021 &nbsp;|&nbsp; Percentage: <span className="font-bold text-blue-400">92 %</span>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Stats</h3>
                <div className="grid  grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      variants={itemVariants}
                      className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700"
                    >
                      <div className="flex items-center mb-2">
                        <stat.icon className="text-blue-400 mr-3" size={24} />
                        <span className="text-gray-400 text-sm">{stat.label}</span>
                      </div>
                      <div className="text-2xl font-bold text-center text-white">{stat.value}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
