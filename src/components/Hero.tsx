const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-slate-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            We build digital presence for growing businesses
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto text-balance">
            Transform your brand with expert web development, creative design, and digital marketing services
          </p>
          
          <a
            href="#portfolio"
            className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 text-lg"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
