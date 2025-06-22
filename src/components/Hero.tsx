const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          Ben Leichter
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-700 mb-8">
          Software Engineer & Music Producer
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Crafting digital experiences through code and sound 🚀
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">About Me</h3>
            <p className="text-gray-700 leading-relaxed">
              I&apos;m a passionate software engineer and music producer who brings creativity 
              and technical expertise to every project. With a background in professional 
              software development and a deep love for music production, I bridge the gap 
              between technology and artistry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;