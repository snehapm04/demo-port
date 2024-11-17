"use client"; // Keep this line to enable client-side rendering
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

export default function HomePage() {
  return (
    <div className="font-poppins space-y-10 max-w-3xl mx-auto p-8 text-center text-lightGray">
      {/* Profile Picture Section */}
      {/* Uncomment and replace 'pic.jpg' with the actual profile picture path if needed */}
      
      <div className="relative mb-10">
        <img
          src="./public/pic.jpg" // Replace with your actual profile picture path
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-cyan transition-transform duration-300 transform hover:scale-105 mx-auto"
        />
      </div>
      

      {/* About Me Section */}
      <section>
        <h1 className="text-7xl font-extrabold text-cyan mb-4">Hello!</h1>
        <p className="text-lg leading-relaxed">
          I'm an enthusiastic and dedicated third-year student. Eager to apply
          theoretical knowledge gained in coursework to real-world challenges. A quick learner looking forward to gaining more
          practical experience through internships.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-6xl font-semibold text-cyan mb-6 text-left">Skills</h2>
        <div className="flex justify-center space-x-8 text-4xl">
          <FaHtml5 className="hover:text-orange-500 transition duration-300" title="HTML5" />
          <FaCss3Alt className="hover:text-blue-500 transition duration-300" title="CSS3" />
          <FaReact className="hover:text-teal-400 transition duration-300" title="React" />
          <FaNodeJs className="hover:text-green-500 transition duration-300" title="Node.js" />
          <FaPython className="hover:text-yellow-500 transition duration-300" title="Python" />
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-6xl font-semibold text-cyan mb-6 text-left">Education</h2>
        <div className="relative">
          <div className="border-l-4 border-cyan ml-10">
            <div className="mb-8 pl-6 relative">
              <div className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-cyan" />
              <h3 className="text-lg font-bold">Easwari Engineering College, Ramapuram</h3>
              <p className="text-gray-400">B.E in Computer Science and Engineering (AI & ML)</p>
              <p className="text-gray-400">2022 - Present</p>
            </div>
            <div className="pl-6 relative">
              <div className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-cyan" />
              <h3 className="text-lg font-bold">Apex Pon Vidyashram</h3>
              <p className="text-gray-400">High School</p>
              <p className="text-gray-400">2020 - 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section>
        <h2 className="text-6xl font-semibold text-cyan mb-6">Contact Me</h2>
        <div className="flex justify-center space-x-6 text-3xl">
          <a href="mailto:pmsneha1234@gmail.com" className="hover:text-blue-400 transition duration-300" title="Email">
            <MdEmail />
          </a>
          <a href="tel:+6383202447" className="hover:text-blue-400 transition duration-300" title="Phone">
            <MdPhone />
          </a>
          <a href="https://github.com/snehapm04" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sneha-mukunthan-95b86a2b6/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300" title="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </section>

      {/* Download Resume Button */}
      <div className="mt-8">
        <a href="https://drive.google.com/file/d/12SjnbE6iMRjj1EhSCLYIGWtFp73H7-NH/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg transition duration-300">
            Download Resume
          </button>
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-lightGray text-center">
        <p>Made by Sneha</p>
      </footer>
    </div>
  );
}
