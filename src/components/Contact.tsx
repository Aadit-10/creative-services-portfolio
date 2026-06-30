import { Mail, Phone } from 'lucide-react'

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your project? Contact us today
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-md">
            {/* <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg outline-none transition-all duration-300 ${
                    errors.name ? 'border-red-500' : 'border-gray-200 focus:border-accent'
                  }`}
                  whileFocus={!reducedMotion ? {
                    boxShadow: "0 0 0 3px rgba(6, 182, 212, 0.1)",
                    backgroundColor: "#f8fafc"
                  } : {}}
                />
                {errors.name && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              <div className="relative">
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg outline-none transition-all duration-300 ${
                    errors.email ? 'border-red-500' : 'border-gray-200 focus:border-accent'
                  }`}
                  whileFocus={!reducedMotion ? {
                    boxShadow: "0 0 0 3px rgba(6, 182, 212, 0.1)",
                    backgroundColor: "#f8fafc"
                  } : {}}
                />
                {errors.email && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              <div className="relative">
                <motion.textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 border-2 rounded-lg outline-none transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-200 focus:border-accent'
                  }`}
                  whileFocus={!reducedMotion ? {
                    boxShadow: "0 0 0 3px rgba(6, 182, 212, 0.1)",
                    backgroundColor: "#f8fafc"
                  } : {}}
                />
                {errors.message && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!reducedMotion && !isSubmitting ? { 
                  scale: 1.05,
                  backgroundColor: "#0891b2",
                  boxShadow: "0 10px 40px -10px rgba(6, 182, 212, 0.4)"
                } : {}}
                whileTap={!reducedMotion && !isSubmitting ? { scale: 0.98 } : {}}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className={`w-full bg-accent text-white font-semibold py-4 rounded-lg transition-colors ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </motion.button>
            </form>

            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "100%", opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center"
                >
                  Thank you! We'll contact you soon.
                </motion.div>
              )}
            </AnimatePresence> */}

            <div className=" space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">Email</h3>
                  <a href="mailto:nvnseb@gmail.com" className="text-gray-600 hover:text-accent transition-colors">
                    nvnseb@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">Phone</h3>
                  <a href="tel:+916238977544" className="text-gray-600 hover:text-accent transition-colors">
                    +91 6238 977 544
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
