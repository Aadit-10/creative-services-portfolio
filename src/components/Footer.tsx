const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Creative Services</h3>
            <p className="text-gray-400">
              Building digital presence for growing businesses with expert creative solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-accent transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">hello@creativeservices.com</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Creative Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
