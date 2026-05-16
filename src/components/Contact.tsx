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
            <div className="space-y-8">
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

              <div className="pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-center">
                  We typically respond within 24 hours. We look forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
