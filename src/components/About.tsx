import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { checkReducedMotion } from '../utils/animationConfig'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const reducedMotion = checkReducedMotion()
  
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  useEffect(() => {
    if (isInView && !reducedMotion) {
      const duration = 2000
      const steps = 60
      const interval = duration / steps
      
      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        const easeProgress = 1 - Math.pow(1 - progress, 3)
        
        setCount1(Math.floor(easeProgress * 95))
        setCount2(Math.floor(easeProgress * 50))
        setCount3(Math.floor(easeProgress * 98))
        
        if (step >= steps) {
          clearInterval(timer)
          setCount1(95)
          setCount2(50)
          setCount3(98)
        }
      }, interval)
      
      return () => clearInterval(timer)
    }
  }, [isInView, reducedMotion])

  const textLines = [
    "Creative Services is a full-service digital agency specializing in web development,",
    "app development, social media management, and creative design solutions. With a team",
    "of experienced professionals, we deliver exceptional results that help businesses",
    "establish a strong digital presence and achieve their growth objectives."
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold text-primary mb-4"
          >
            About Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Your trusted partner in digital transformation
          </motion.p>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="bg-neutral-light rounded-xl p-8 md:p-12">
            {textLines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                {line}
              </motion.p>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-accent mb-2">{count1}%</div>
                <div className="text-gray-600">Project Completion Rate</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-accent mb-2">{count2}+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-accent mb-2">{count3}%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
