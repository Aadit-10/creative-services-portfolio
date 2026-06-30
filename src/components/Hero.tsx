import { motion, useScroll, useTransform } from 'framer-motion'
import { checkReducedMotion } from '../utils/animationConfig'

const Hero = () => {
  const { scrollY } = useScroll()
  const reducedMotion = checkReducedMotion()
  
  const scale = useTransform(scrollY, [0, 500], reducedMotion ? [1, 1] : [1, 1.02])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-slate-900 text-white pt-16 relative overflow-hidden">
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
          >
            We build digital presence for growing businesses
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto text-balance"
          >
            Transform your brand with expert web development, creative design, and digital marketing services
          </motion.p>
          
          <motion.a
            href="#portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={!reducedMotion ? { 
              y: -2,
              boxShadow: "0 10px 40px -10px rgba(6, 182, 212, 0.4)",
              backgroundColor: "#0891b2",
              transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
            } : {}}
            whileTap={!reducedMotion ? { scale: 0.98 } : {}}
            className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg text-lg"
          >
            View Our Work
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Hero
