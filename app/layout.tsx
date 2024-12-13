"use client";
import Link from 'next/link';
import './globals.css';
import { ReactNode, useState } from 'react';
import { FaTools, FaBriefcase, FaProjectDiagram } from 'react-icons/fa'; // Import relevant icons

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [activeLink, setActiveLink] = useState<string>(''); // To handle active link state

  // Function to handle link clicks
  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <html>
      <body className="bg-dark text-lightGray">
        <header className="flex justify-between items-start p-4">
          {/* Name as a clickable link to return to the home page */}
          <Link href="/" passHref>
            <div className="text-2xl font-bold text-cyan animate-pulse cursor-pointer">
              I'm Sneha...
            </div>
          </Link>
          {/* Vertical menu bar on the right side with icons */}
          <nav className="fixed right-10 top-50 flex flex-col space-y-6 text-lg pr-4">
            <Link href="/skills" passHref>
              <div
                className={`relative flex items-center space-x-2 p-2 rounded cursor-pointer transition duration-300
                  ${activeLink === 'skills' ? 'bg-cyan' : 'bg-slate hover:bg-hoverSlate'}`}
                onClick={() => handleClick('skills')}
              >
                <FaTools size={24} className="text-lightGray" />
                <span className="absolute right-full mr-2 opacity-0 transform translate-x-4 transition-all duration-300 hover:opacity-100 hover:translate-x-0">
                  Skills
                </span>
              </div>
            </Link>
            <Link href="/experience" passHref>
              <div
                className={`relative flex items-center space-x-2 p-2 rounded cursor-pointer transition duration-300
                  ${activeLink === 'experience' ? 'bg-cyan' : 'bg-slate hover:bg-hoverSlate'}`}
                onClick={() => handleClick('experience')}
              >
                <FaBriefcase size={24} className="text-lightGray" />
                <span className="absolute right-full mr-2 opacity-0 transform translate-x-4 transition-all duration-300 hover:opacity-100 hover:translate-x-0">
                  Experience
                </span>
              </div>
            </Link>
            <Link href="/projects" passHref>
              <div
                className={`relative flex items-center space-x-2 p-2 rounded cursor-pointer transition duration-300
                  ${activeLink === 'projects' ? 'bg-cyan' : 'bg-slate hover:bg-hoverSlate'}`}
                onClick={() => handleClick('projects')}
              >
                <FaProjectDiagram size={24} className="text-lightGray" />
                <span className="absolute right-full mr-2 opacity-0 transform translate-x-4 transition-all duration-500 hover:opacity-100 hover:translate-x-0">
                  Projects
                </span>
              </div>
            </Link>
          </nav>
        </header>
        <main className="pt-10 pl-10">{children}</main>
      </body>
    </html>
  );
}
