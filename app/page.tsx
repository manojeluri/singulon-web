export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold hover:text-gray-300 transition-colors">
            Singulon
          </a>
          <div className="flex gap-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              About
            </a>
            <a
              href="mailto:singulon.ai@gmail.com"
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="bg-black text-white">
        {/* Hero Section */}
        <section id="home" className="flex flex-col items-center justify-center min-h-screen p-8 pt-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Singulon</h1>
        <p className="text-xl text-gray-400 max-w-4xl text-center mb-8">
          Building next-generation AI & XR solutions redefining human-machine synergy.
        </p>
        <a
          href="mailto:singulon.ai@gmail.com"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
        >
          Get in Touch
        </a>
      </section>

      {/* Services/Features Section */}
      <section id="services" className="py-20 px-8 bg-zinc-900 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            We deliver cutting-edge solutions that bridge the gap between artificial intelligence and extended reality.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Solutions Card */}
            <div className="bg-black p-8 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">AI Solutions</h3>
              <p className="text-gray-400 leading-relaxed">
                Advanced machine learning models and neural networks that power intelligent automation, predictive analytics, and natural language processing.
              </p>
            </div>

            {/* XR Development Card */}
            <div className="bg-black p-8 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">XR Development</h3>
              <p className="text-gray-400 leading-relaxed">
                Immersive virtual, augmented, and mixed reality experiences that transform how users interact with digital content and physical spaces.
              </p>
            </div>

            {/* Integration Services Card */}
            <div className="bg-black p-8 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">AI-XR Integration</h3>
              <p className="text-gray-400 leading-relaxed">
                Seamless fusion of AI intelligence with XR environments, creating adaptive and context-aware immersive experiences.
              </p>
            </div>

            {/* Computer Vision Card */}
            <div className="bg-black p-8 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Computer Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                Real-time object detection, tracking, and scene understanding that enables machines to perceive and interpret visual data.
              </p>
            </div>

            {/* Spatial Computing Card */}
            <div className="bg-black p-8 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Spatial Computing</h3>
              <p className="text-gray-400 leading-relaxed">
                Three-dimensional mapping and spatial awareness systems that enable digital content to interact naturally with physical environments.
              </p>
            </div>

            {/* Custom Solutions Card */}
            <div className="bg-black p-8 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Custom Solutions</h3>
              <p className="text-gray-400 leading-relaxed">
                Tailored AI and XR applications designed to solve your unique business challenges and accelerate digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About/Mission Section */}
      <section id="about" className="py-20 px-8 bg-black scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          {/* Vision Statement */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-4">Our Vision</h2>
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl p-8 md:p-12 border border-zinc-800">
              <p className="text-2xl md:text-3xl font-bold text-center text-white leading-relaxed">
                To accelerate the world&apos;s transformation towards future tech.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-4">Our Mission</h2>
            <div className="bg-zinc-900 rounded-2xl p-8 md:p-12 border border-zinc-800">
              <p className="text-xl md:text-2xl font-semibold text-center text-blue-400 mb-8 leading-relaxed">
                Advancing AI and future technologies to expand what people and products can achieve.
              </p>
              <div className="space-y-6 text-gray-300 leading-relaxed max-w-4xl mx-auto">
                <p>
                  We&apos;re solving the gap between cutting-edge technology and real-world usability. AI and future tech evolve fast, but adoption lags behind. We aim to make advanced systems practical, reliable, and intuitive for people and products alike.
                </p>
                <p>
                  We serve builders, creators, and organizations that want to do more with less complexity. Our focus is on building tools and systems that extend human potential and make technology feel effortless.
                </p>
                <p>
                  We&apos;re building toward a future where technology becomes more intuitive, collaborative, and self-improving. A world where intelligence exists in every layer of work, learning, and creation—not to replace people, but to amplify what they can achieve. The pace of innovation has outgrown human bandwidth, and the choices made today will define how AI and emerging technologies shape daily life for decades. Building responsibly now ensures that progress stays human-centered, empowering, and accessible—not overwhelming or exclusive.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Who We Are</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Singulon is at the forefront of technological innovation, specializing in the seamless integration of AI and XR technologies. We are a team of visionaries, engineers, and creators passionate about pushing the boundaries of what&apos;s possible.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our expertise spans machine learning, computer vision, spatial computing, and immersive experience design, enabling us to deliver solutions that are not just innovative but transformative.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">What We Believe</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We believe in a future where the line between digital and physical worlds blurs, creating unprecedented opportunities for human advancement. Our mission is to build technology that amplifies human potential rather than replacing it.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By combining the intelligence of AI with the immersion of XR, we&apos;re creating experiences that are intuitive, adaptive, and profoundly human-centric.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-zinc-900 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">Core Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Innovation</h4>
                <p className="text-gray-400 text-sm">
                  Continuously pushing technological boundaries to create breakthrough solutions
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Collaboration</h4>
                <p className="text-gray-400 text-sm">
                  Working closely with clients to understand and exceed their expectations
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Excellence</h4>
                <p className="text-gray-400 text-sm">
                  Delivering quality and precision in every project we undertake
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}
