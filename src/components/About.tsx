const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in digital transformation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-light rounded-xl p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Creative Services is a full-service digital agency specializing in web development, 
              app development, social media management, and creative design solutions. With a team 
              of experienced professionals, we deliver exceptional results that help businesses 
              establish a strong digital presence and achieve their growth objectives.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">95%</div>
                <div className="text-gray-600">Project Completion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
