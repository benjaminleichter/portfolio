const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Let&apos;s connect and discuss opportunities in software engineering or music production.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <a
            href="mailto:ben@example.com"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-medium transition-colors"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/benleichter"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 px-8 py-4 rounded-lg font-medium transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/benleichter"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-lg font-medium transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;