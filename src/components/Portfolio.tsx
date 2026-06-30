import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import { checkReducedMotion } from '../utils/animationConfig'

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const reducedMotion = checkReducedMotion()

  const projects = [
    {
      id: 1,
      name: 'indhukanthi.com',
      thumbnail: '/images/indhukanthi-1.png',
      images: ['/images/indhukanthi-1.png', '/images/indhukanthi-2.png'],
      services: ['Website Design'],
      description: 'Complete website design for natural beauty products brand featuring e-commerce functionality and modern aesthetics.',
      url: 'https://indhukanthi.com'
    },
    {
      id: 2,
      name: 'drtoothdentalcare.com',
      thumbnail: '/images/DrTooth-1.png',
      images: ['/images/DrTooth-1.png', '/images/DrTooth-2.png'],
      services: ['Website Design', 'Social Media Setup', 'Instagram Marketing'],
      description: 'Comprehensive digital presence including website design, social media setup, and Instagram marketing support for dental care practice.',
      url: 'https://drtoothdentalcare.com'
    }
  ]

  const additionalServices = [
    {
      title: 'Cafe Menu Design & Instagram Marketing',
      description: 'Created visually appealing menu design and managed Instagram marketing campaign for local cafe, increasing customer engagement by 40%.'
    },
    {
      title: 'Social Media Management',
      description: 'Ongoing social media management across both client websites with consistent content strategy and community engagement.'
    }
  ]

  const openProject = (projectId: number) => {
    setSelectedProject(projectId)
    setCurrentImageIndex(0)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  const nextImage = () => {
    const project = projects.find(p => p.id === selectedProject)
    if (project) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
    }
  }

  const prevImage = () => {
    const project = projects.find(p => p.id === selectedProject)
    if (project) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
    }
  }

  return (
    <section id="portfolio" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing our recent projects and creative solutions
          </p>
        </div>

        {/* Main Projects */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={reducedMotion ? {} : { opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              animate={isInView ? (reducedMotion ? {} : { opacity: 1, x: 0 }) : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg cursor-pointer"
              onClick={() => openProject(project.id)}
            >
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <motion.img
                  src={project.thumbnail}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                />
                <motion.div 
                  className="absolute inset-0 bg-black/50 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-white font-semibold">View Project</span>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{project.name}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.services.map((service, sIndex) => (
                    <motion.span
                      key={sIndex}
                      className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full"
                      animate={isInView && !reducedMotion ? {
                        scale: [1, 1.08, 1],
                      } : {}}
                      transition={{
                        duration: 2.5,
                        delay: index * 0.2 + 0.5,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    >
                      {service}
                    </motion.span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium text-sm transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visit Website <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold text-primary mb-6">Additional Services Delivered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="border-l-4 border-accent pl-4">
                <h4 className="text-lg font-semibold text-primary mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={closeProject}
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
            >
              <X size={32} />
            </button>

            <div className="max-w-5xl w-full">
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-6">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={projects.find(p => p.id === selectedProject)?.images[currentImageIndex]}
                    alt="Project screenshot"
                    className="w-full h-full object-contain absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors z-10"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors z-10"
                >
                  <ChevronRight size={32} />
                </button>
              </div>

              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {projects.find(p => p.id === selectedProject)?.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects.find(p => p.id === selectedProject)?.services.map((service, index) => (
                    <span
                      key={index}
                      className="text-sm bg-accent/20 text-accent px-3 py-1 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  {projects.find(p => p.id === selectedProject)?.description}
                </p>
                <a
                  href={projects.find(p => p.id === selectedProject)?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Visit Website <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio
