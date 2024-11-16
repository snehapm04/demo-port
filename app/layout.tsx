import Link from 'next/link';
import './globals.css';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
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
          {/* Vertical menu bar on the right side */}
          <nav className="fixed right-10 top-50 flex flex-col space-y-6 text-lg pr-4">
            <Link 
              href="/skills" 
              className="bg-slate hover:bg-hoverSlate transition duration-300 p-2 rounded"
            >
              Skills
            </Link>
            <Link 
              href="/experience" 
              className="bg-slate hover:bg-hoverSlate transition duration-300 p-2 rounded"
            >
              Experience
            </Link>
            <Link 
              href="/projects" 
              className="bg-slate hover:bg-hoverSlate transition duration-300 p-2 rounded"
            >
              Projects
            </Link>
            {/*<Link 
              href="/certifications" 
              className="bg-slate hover:bg-hoverSlate transition duration-300 p-2 rounded"
            >
              Certifications
            </Link>*/}
          </nav>
        </header>
        <main className="pt-10 pl-10">{children}</main>
      </body>
    </html>
  );
}
