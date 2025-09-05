
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, X } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import igraph from '../images/igraph.png';
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Clash of Clans Mini Language Model',
      description: 'A mini language model from scratch using PyTorch, with approximately 2.96 million parameters.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
      tags: ['Flask','PyTorch', 'Transformers','Machine Learning','LLM'],
      githubUrl: 'https://github.com/YUGESHKARAN/Clash_of_Clans_Language_Model.git',
      liveUrl: 'https://www.linkedin.com/posts/yugeshkaran01_firstlanguagemodel-pytorch-transformers-activity-7342216715210014723-GcTT?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkZ8EIBpAY9uNYV2sgO7Npeu1ePnNN6Who',
      featured: true,
    },
    {
      id: 2,
      title: 'MySQL RAG ',
      description: 'High level RAG system for MySQL Database',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      tags: ['Flask', 'LLM', 'MySQL-DB','Langchain'],
      githubUrl: 'https://github.com/YUGESHKARAN/MySQL-RAG.git',
      liveUrl: 'https://drive.google.com/file/d/1P1mHBTcrAt8etstSIQy5uDx_OGKP74td/view?usp=sharing',
      featured: true,
    },
    
    {
      id: 3,
      title: 'Node Blog App',
      description: 'E-Learning app designed for individual academic institutions (universities/colleges).',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      tags: ['React.js', 'Node.js','Socket.io', 'Express.js', 'MongoDB','Tailwind CSS','LLM','AWS-S3-bucket'],
      githubUrl: 'https://github.com/YUGESHKARAN/Node-Blog-App.git',
      liveUrl: 'https://blog-frontend-teal-ten.vercel.app/',
      featured: true,
    },
    {
      id: 4,
      title: 'Pinecone AI App',
      description: 'his project is a conversational chatbot integrated with the Pinecone vector database.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      tags: ['Flask', 'LLM', 'Pinecone-DB', 'Hugingface-Embeddings'],
      githubUrl: 'https://github.com/YUGESHKARAN/pinecone_ai.git',
      liveUrl: 'https://www.linkedin.com/posts/yugeshkaran01_llm-pineconedb-rag-activity-7344726106807115776-lxFS?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkZ8EIBpAY9uNYV2sgO7Npeu1ePnNN6Who',
      featured: true,
    },
    {
      id: 5,
      title: 'MongoDB RAG App',
      description: 'MongoDB Retrieval Augmented Generation for high level data analysis.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      tags: ['Flask', 'LLM', 'MongoDB', 'Langchain'],
      githubUrl: 'https://github.com/YUGESHKARAN/Mongodb-RAG.git',
      liveUrl: 'https://drive.google.com/file/d/1vQUqu1ivm6bmE93UgNA33q0TNe8KFEto/view?usp=sharing',
      featured: true,
    },
     {
      id: 6,
      title: 'Social Media Content Manipulator',
      description: 'A robust backend service designed to correct and generate content for a social media application.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      tags: ['Flask', 'LLM'],
      githubUrl: 'https://github.com/YUGESHKARAN/blogChat-backend.git',
      liveUrl: 'https://blog-frontend-teal-ten.vercel.app/',
      featured: true,
    },
    {
      id: 7,
      title: 'Modern Attendance Software',
      description: 'A robust backend service designed to correct and generate content for a social media application.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      tags: ['PHP', 'Javascript', 'MySQL', 'HTML', 'SCSS'],
      githubUrl: 'https://github.com/YUGESHKARAN/dsu.git',
      liveUrl: 'https://drive.google.com/file/d/1jHUP9t4RTKGnAPelD6cebAlraN8e9LLM/view?usp=sharing',
      featured: true,
    },
     {
      id: 8,
      title: 'Recommnedation System',
      description: 'This repository contains a Python-based recommendation system designed for an e-learning fullstack application.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      tags: ['Flask', 'MongoDB', 'Graph-Data-Structure'],
      githubUrl: 'https://github.com/YUGESHKARAN/recommendation-system.git',
      liveUrl: 'https://blog-frontend-teal-ten.vercel.app/',
      featured: true,
    },
    {
      id: 9,
      title: 'Product Control Agent',
      description: 'Meet your next-level assistant: Product Control Agent – an AI-powered solution that makes controlling and analyzing your product website smarter and faster.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      tags: ['Flask', 'MongoDB', 'SerpAPI', 'LLM', 'Langchain','Node.js','Express.js','React.js','Tailwind CSS','JWT-Auth'],
      githubUrl: 'https://github.com/YUGESHKARAN/product_agent_node.git',
      liveUrl: 'https://product-agent-node-jgle.vercel.app/',
      featured: true,
    },
    {
      id: 10,
      title: 'Micro-SaaS News Application ',
      description: 'A micro-SaaS news app for browsing news content, built with SerpAPI using a Flask backend and a React.js frontend styled with Tailwind CSS.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      tags: ['SerpAPI', 'Flask', 'React.js', 'Tailwind CSS'],
      githubUrl: 'https://github.com/YUGESHKARAN/serp_news_app',
      liveUrl: 'https://serp-news-app.vercel.app/',
      featured: true,
    },
    {
      id: 11,
      title: ' Multi-Agent LangGraph!',
      description: 'This project leverages the LangGraph framework to build a dynamic multi-agent system with professional, production-ready routing between two specialized agents: Custom RAG Agent & MongoDB Product Agent',
      image: igraph,
      tags: ['LangGraph','MongoDB', 'agents', 'RAG', 'LLMs'],
      githubUrl: 'https://github.com/YUGESHKARAN/multi_agent.git',
      liveUrl: 'https://www.linkedin.com/posts/yugeshkaran01_pinecone-product-langgraph-activity-7364909507350626304-CyfL?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkZ8EIBpAY9uNYV2sgO7Npeu1ePnNN6Who',
      featured: true,
    },
    {
      id: 12,
      title: 'Mentor Consulting Crew - AI',
      description: "Mentor Consulting Crew is an AI-powered project built with Crew AI designed to build, research, and strategize comprehensive learning paths for any course, from beginner to advanced level. The crew leverages multiple specialized AI agents to automate and streamline the process of educational planning and content creation, ensuring a high-quality, structured learning experience.",
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      tags: ['crewai','ScrapeWebsiteTool', 'agents', 'SerperDevTool', 'LLMs','YoutubeChannelSearchTool'],
      githubUrl: 'https://github.com/YUGESHKARAN/Mentor-Consulting-Crew.git',
      liveUrl: 'https://www.linkedin.com/posts/yugeshkaran01_ai-crewai-edtech-activity-7366338134915088384-5mkr?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkZ8EIBpAY9uNYV2sgO7Npeu1ePnNN6Who',
      featured: true,
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

  // Particle init function
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-20 relative overflow-hidden">
        {/* Particle Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="absolute inset-0 z-0"
          options={{
            fullScreen: false,
            background: { color: "transparent" },
            particles: {
              number: { value: 60, density: { enable: true, value_area: 800 } },
              color: { value: "#8b5cf6" },
              shape: { type: "circle" },
              opacity: { value: 0.3 },
              size: { value: 3 },
              move: { enable: true, speed: 1, direction: "none", outModes: { default: "out" } },
            },
            interactivity: {
              events: { onHover: { enable: true, mode: "repulse" } },
              modes: { repulse: { distance: 80, duration: 0.4 } },
            },
            detectRetina: true,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  My Projects
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Here are some of my projects that I have developed.
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mt-4"></div>
            </motion.div>

            <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Eye className="text-white" size={24} />
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={18} className="mr-2" />
                        Code
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} className="mr-2" />
                         Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full md:h-64 h-40 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="md:p-8 p-4">
                  <h2 className="md:text-3xl text-xl font-bold text-white mb-4">{selectedProject.title}</h2>
                  <p className="text-gray-300 text-base md:text-lg mb-6">{selectedProject.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-blue-500/20 md:text-base text-sm text-blue-400 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-gray-800 hover:bg-gray-700 md:text-base text-xs text-white md:px-6 md:py-3 py-2 px-3 rounded-lg transition-colors"
                    >
                      <Github size={20} className="mr-2" />
                      View Code
                    </a>
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-blue-600 hover:bg-blue-700 md:text-base text-xs  text-white md:px-6 md:py-3 py-2 px-3 rounded-lg transition-colors"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};
export default Projects;