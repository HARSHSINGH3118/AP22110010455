import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 py-4 md:px-6 md:py-6 max-w-5xl">
        {children}
      </main>
      <footer className="py-4 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        © 2025 Social Media Analytics Platform
      </footer>
    </div>
  );
};

export default Layout;
