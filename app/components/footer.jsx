'use client';
import SocialMediaLinks from './../components/socialMediaLinks';

const Footer = ({ setCurrentView }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-100 mb-4">About Me</h2>
            <p className="text-sm">
              I'm Remy, a passionate full-stack developer building user-friendly applications. Specializing in React, Node.js, and ASP.NET Core.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => setCurrentView("home")}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setCurrentView("projects")}
                  className="hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setCurrentView("about")}
                  className="hover:text-white transition-colors"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setCurrentView("contact")}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Follow Me</h2>
            <SocialMediaLinks />
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">&copy; 2024 Remy Flores. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;