function App() {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-blue-600">
            TeleMed
          </h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#how" className="hover:text-blue-600">How it works</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-600 to-blue-500 text-white">
          <div className="max-w-7xl mx-auto px-6 py-24 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Healthcare. Anywhere. Anytime.
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90">
              A secure telemedicine platform connecting patients and doctors
              through video consultations, digital prescriptions, and remote care.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 transition">
                Get Started
              </button>
              <button className="border border-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition">
                Request a Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-12">
              Why Choose TeleMed?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-3">
                  Video Consultations
                </h4>
                <p className="text-slate-600">
                  High-quality, secure video calls between doctors and patients.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-3">
                  Digital Prescriptions
                </h4>
                <p className="text-slate-600">
                  Issue, manage, and track prescriptions digitally with full compliance.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-3">
                  Patient Records
                </h4>
                <p className="text-slate-600">
                  Secure access to medical history, exams, and follow-ups in one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-6">
              Ready to transform remote healthcare?
            </h3>
            <p className="text-slate-600 mb-8">
              Join clinics and healthcare professionals already using TeleMed.
            </p>
            <button className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition">
              Contact Sales
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm">
          © {new Date().getFullYear()} TeleMed. All rights reserved.
        </div>
      </footer>

    </div>
  )
}

export default App
