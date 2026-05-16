import { Code, Smartphone, Share2, Video, Image, Camera, Lightbulb } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Code,
      name: 'Web Development',
      description: 'Custom websites built with modern technologies for optimal performance'
    },
    {
      icon: Smartphone,
      name: 'App Development',
      description: 'Mobile applications for iOS and Android platforms'
    },
    {
      icon: Share2,
      name: 'Social Media Management',
      description: 'Strategic content creation and community engagement'
    },
    {
      icon: Video,
      name: 'Video Editing',
      description: 'Professional video production and post-processing services'
    },
    {
      icon: Image,
      name: 'Poster Design',
      description: 'Eye-catching visual designs for marketing and events'
    },
    {
      icon: Camera,
      name: 'Photography',
      description: 'High-quality product and corporate photography'
    },
    {
      icon: Lightbulb,
      name: 'Brand Strategy',
      description: 'Comprehensive branding solutions for business growth'
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive creative solutions to elevate your brand
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-neutral-light p-8 rounded-xl hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
