"use client"; // Keep this line to enable client-side rendering
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

export default function HomePage() {
  return (
    <div className="font-poppins space-y-10 max-w-3xl mx-auto p-8 text-center text-lightGray">
      {/* Profile Picture Section 
      <div className="relative mb-10">
        <img
          src="pic.jpg" // Replace with your actual profile picture path
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-cyan transition-transform duration-300 transform hover:scale-105 mx-auto"
        />
      </div>*/}

      {/* Implicit About Me Section */}
      <section>
        <h1 className="text-7xl font-extrabold text-cyan mb-4">Hello!</h1>
        <p className="text-lg leading-relaxed">
          As a web developer, I thrive on transforming creative concepts into functional digital solutions.
          My passion lies in crafting seamless user experiences and building robust backends. 
          I embrace continuous learning and actively seek opportunities to tackle real-world challenges. 
          When not coding, I love exploring innovative technologies and honing my skills through exciting projects.
        </p>
      </section>

      

      {/* Skills Section */}
      <section className="flex items-center justify-between mb-12">
        <h2 className="text-6xl font-semibold text-cyan mb-4 text-left">Skills</h2>
        <div className="flex justify-start space-x-8 text-4xl">
          <FaHtml5 className="hover:text-orange-500" title="HTML5" />
          <FaCss3Alt className="hover:text-blue-500" title="CSS3" />
          <FaReact className="hover:text-teal-400" title="React" />
          <FaNodeJs className="hover:text-green-500" title="Node.js" />
          <FaPython className="hover:text-yellow-500" title="Python" />
        </div>
      </section>

      {/* Spacing between sections */}
      <div className="my-100"></div>

      {/* Education Section as Timeline */}
      <section className="flex items-center justify-between">
        <h2 className="text-6xl font-semibold text-cyan mb-4 text-left">Education</h2>
        <div className="text-left relative">
          <div className="border-l-4 border-cyan ml-10">
            <div className="mb-6 pl-6 relative">
              <div className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-cyan" />
              <h3 className="text-lg font-bold">Easwari Engineering College, Ramapuram</h3>
              <p className="text-gray-400">B.E in Computer Science and Engineering (AI & ML)</p>
              <p className="text-gray-400">2020 - Present</p>
            </div>
            <div className="pl-6 relative">
              <div className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-cyan" />
              <h3 className="text-lg font-bold">Apex Pon Vidyashram</h3>
              <p className="text-gray-400">High School</p>
              <p className="text-gray-400">2018 - 2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing between sections */}
      <div className="my-10"></div>

      {/* Contact Me Section */}
      <section>
        <h2 className="text-6xl font-semibold text-cyan mb-4">Contact Me</h2>
        <div className="flex justify-center space-x-6 text-3xl">
          <a href="mailto:pmsneha1234@gmail.com" className="hover:text-blue-400" title="Email">
            <MdEmail />
          </a>
          <a href="tel:+6383202447" className="hover:text-blue-400" title="Phone">
            <MdPhone />
          </a>
          <a href="https://github.com/snehapm04" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sneha-mukunthan-95b86a2b6/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400" title="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </section>

      {/* Download Resume Button */}
      <div className="mt-6">
        <a href="https://drive.google.com/file/d/12SjnbE6iMRjj1EhSCLYIGWtFp73H7-NH/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg transition duration-300">
            Download Resume
          </button>
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-lightGray text-center">
        <p>Made by Sneha</p>
      </footer>
    </div>
  );
}
