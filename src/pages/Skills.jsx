
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Palette, Wrench, Cloud } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Skills = () => {
 const skillCategories = [
  {
    icon: Code,
    title: 'Frontend',
    skills: [
      { name: 'React', projects: 12 },
      { name: 'JavaScript', projects: 15 },
      { name: 'HTML/CSS', projects: 10 },
      { name: 'Tailwind CSS', projects: 9 },
      { name: 'Vite.js', projects: 6 },
    ],
  },
  {
    icon: Server,
    title: 'Backend Packages / Frameworks',
    skills: [
      { name: 'Node.js', projects: 11 },
      { name: 'Express.js', projects: 10 },
      // { name: 'Socket.io', projects: 10 },
      { name: 'Flask', projects: 7 },
      // { name: 'mysql-conector-python', projects: 7 },
      { name: 'Mongoose', projects: 4 },
      { name: 'Dynamoose', projects: 4 },
    ],
  },
  {
    icon: Database,
    title: 'Database',
    skills: [
      { name: 'MongoDB', projects: 9 },
      { name: 'DynamoDB', projects: 4 },
      { name: 'MySQL', projects: 5 },
      { name: 'Pinecone', projects: 3 },
    
    ],
  },
  {
       icon: Cloud,
    title: 'Deployment & Hosting Platforms',
    skills: [
      // { name: 'AWS-IAM', projects: 5 },
      // { name: 'AWS-S3-Bucket', projects: 5 },
      { name: 'AWS-Amplify', projects: 5 },
      { name: 'AWS-Lambda', projects: 5 },
      // { name: 'AWS-ECS', projects: 5 },
      // { name: 'AWS-ECR', projects: 5 },
      // { name: 'Docker', projects: 6 },
      // { name: 'Git/Github', projects: 16 },
      { name: 'Vercel', projects: 8 },
      { name: 'Render', projects: 8 },
    ],

  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    skills: [
      { name: 'AWS-IAM', projects: 5 },
      { name: 'AWS-S3-Bucket', projects: 5 },
      // { name: 'AWS-Amplify', projects: 5 },
      // { name: 'AWS-Lambda', projects: 5 },
      { name: 'AWS-ECS', projects: 5 },
      { name: 'AWS-ECR', projects: 5 },
       { name: 'Docker', projects: 6 },
      { name: 'Git/Github', projects: 16 },
      // { name: 'Docker', projects: 6 },
      // { name: 'Git/Github', projects: 16 },
      // { name: 'Vercel', projects: 8 },
      // { name: 'Render', projects: 8 },
    ],
  },
  ,
  {
    icon: Cloud,
    title: 'Data Scinece Packages & Frameworks',
    skills: [
  
      { name: 'Pytorch', projects: 6 },
      { name: 'Langchain', projects: 16 },
      { name: 'LangSmith', projects: 16 },
      { name: 'Pandas', projects: 16 },
      // { name: 'Matplotlib', projects: 16 },
      { name: 'Scikit-Learn', projects: 16 },
      // { name: 'Numpy', projects: 16 },
    ],
  },
];


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

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  My Skills
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Technologies and tools with which I have hands-on experience.
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mt-4"></div>
            </motion.div>

            <div className="grid  w-full md:grid-cols-2 lg:grid-cols-2 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl md:p-8 p-6 border border-gray-700 w-11/12 mx-auto"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                      <category.icon className="text-blue-400" size={24} />
                    </div>
                    <h3 className="md:text-2xl text-base font-bold text-wrap text-white">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="relative">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 md:text-base text-sm font-medium">{skill.name}</span>
                          {/* <span className="text-blue-400 text-sm ">{skill.projects} Projects</span> */}
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `100%` }}
                            transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {skillCategories.map((category) => (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                      <category.icon className="text-blue-400" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-4 py-2 bg-gray-700/60 text-blue-300 rounded-full border border-blue-500/20 font-medium text-sm hover:bg-blue-500/20 transition"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
             */}

            {/* Additional Skills Section */}
            <motion.div variants={itemVariants} className="mt-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Additional Skills & Tools</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Figma', 'Socket.io', 'Numpy', 'Matplotlib', 'Dialogflow', 'Postman', 'Thunder-Client',  'Visual Studio Code'
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm text-gray-300 rounded-full border border-gray-600 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
