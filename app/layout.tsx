import Link from 'next/link';
import './globals.css';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html>
      <body className="bg-dark text-lightGray min-h-screen">
        <header className="flex justify-between items-start p-4">
          {/* Name as a clickable link to return to the home page */}
          <Link href="/" passHref>
            <div className="text-2xl font-bold text-cyan animate-pulse cursor-pointer">
              I'm Sneha...
            </div>
          </Link>
          {/* Vertical menu bar on the right side */}
          <nav className="fixed top-20 right-6 lg:top-10 lg:right-10 flex flex-col space-y-4 lg:space-y-6 text-lg pr-2 lg:pr-4">
            <Link 
              href="/skills" 
              className="bg-slate hover:bg-hoverSlate transition duration-300 p-1 lg:p-2 rounded"
            >
              Skills
            </Link>
            <Link 
              href="/experience" 
              className="bg-slate hover:bg-hoverSlate transition duration-300 p-1 lg:p-2 rounded"
            >
              Experience
            </Link>
            <Link 
              href="/projects" 
              className="bg-slate hover:bg-hoverSlate transition duration-300 p-1 lg:p-2 rounded"
            >
              Projects
            </Link>
            {/*<Link 
              href="/certifications" 
              className="bg-slate hover:bg-hoverSlate transition duration-300 p-1 lg:p-2 rounded"
            >
              Certifications
            </Link>*/}
          </nav>
        </header>
        <main className="pt-6 pl-4 lg:pt-10 lg:pl-10">{children}</main>
      </body>
    </html>
  );
}
