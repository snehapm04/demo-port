export default function ExperiencePage() {
  return (
    <div className="bg-darkGray text-lightGray font-poppins p-6 space-y-16 flex justify-center">
      <div className="w-full max-w-4xl px-6">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan">Experience</h1>
          <h1></h1>
        </header>

        {/* Experience Section */}
        <section id="experience" className="mt-16 relative px-6 sm:px-12">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-cyan hidden sm:block"></div>

            {/* Experience Item */}
            <div className="mb-12 pl-6 sm:pl-16 relative">
              <div className="absolute w-4 h-4 bg-cyan rounded-full left-8 top-0 transform -translate-x-1/2 animate-pulse" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-cyan">Technical Event Head</h3>
                <p className="text-gray-400 mb-1">
                  At <a href="https://srmeaswari.ac.in/" target="_blank" className="text-blue-400 underline">ATLAS EEC</a>
                </p>
                <p className="text-gray-500 mb-2">Oct 2024 - Present</p>
                <p>Coordinating and organizing technical events at my college, fostering engagement and participation.</p>
              </div>
            </div>

            {/* Experience Item */}
            <div className="mb-12 pl-6 sm:pl-16 relative">
              <div className="absolute w-4 h-4 bg-cyan rounded-full left-8 top-0 transform -translate-x-1/2 animate-pulse" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-cyan">Web Development Intern</h3>
                <p className="text-gray-400 mb-1">
                  At <a href="https://triad-india.com/" target="_blank" className="text-blue-400 underline">Triad Software Pvt Ltd</a>
                </p>
                <p className="text-gray-500 mb-2">February 2024</p>
                <p>Redesigned the company’s intranet website using WordPress to enhance usability and accessibility.</p>
              </div>
            </div>

            {/* Experience Item */}
            <div className="pl-6 sm:pl-16 relative">
              <div className="absolute w-4 h-4 bg-cyan rounded-full left-8 top-0 transform -translate-x-1/2 animate-pulse" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-cyan">Virtual Intern</h3>
                <p className="text-gray-400 mb-1">
                  At <a href="https://skillible.io/" target="_blank" className="text-blue-400 underline">Skillible</a>
                </p>
                <p className="text-gray-500 mb-2">Sept 2024</p>
                <p>Completed a 6-week virtual internship focused on Generative AI, exploring state-of-the-art technologies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="mt-16 text-center text-sm text-gray-500">
          Made by Sneha
        </footer>
      </div>
    </div>
  );
}
