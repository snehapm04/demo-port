// app/layout.tsx
import Link from 'next/link';
import './globals.css';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Include viewport meta for mobile devices */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-dark text-lightGray min-h-screen">
        <header className="flex justify-between items-center p-4 md:p-6">
          {/* Name as a clickable link to return to the home page */}
          <Link href="/" passHref>
            <div className="text-xl md:text-2xl font-bold text-cyan animate-pulse cursor-pointer">
              I'm Sneha...
            </div>
          </Link>
          {/* Vertical menu bar on the right side */}
          <nav className="fixed top-16 right-4 lg:top-10 lg:right-10 flex flex-col space-y-3 md:space-y-4 lg:space-y-6 text-base md:text-lg pr-2 lg:pr-4">
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
          </nav>
        </header>
        <main className="pt-8 px-4 md:px-6 lg:px-10">{children}</main>
      </body>
    </html>
  );
}
