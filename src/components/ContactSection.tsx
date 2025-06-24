const ContactSection = () => {
  return (
    <section id="contact" className="py-20 text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Heyyyyy 👋🏻
        </h2>
        <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          Shoot me a message if you wanna chat
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <a
            href="mailto:benleichtermusic@gmail.com"
            className="bg-off-white border-2 border-black hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors text-black"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/benleichter"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-off-white border-2 border-black hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors text-black"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/benjaminleichter"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-off-white border-2 border-black hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors text-black"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;