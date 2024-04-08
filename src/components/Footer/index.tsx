import React from 'react';
import { Link } from 'react-router-dom'; // Importando Link do react-router-dom
import { Github, Linkedin, Instagram } from 'lucide-react';



const FooterComponent: React.FC = () => {
    return (
      <div className="dark bg-gray-900 text-white py-10 min-w-full">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="https://www.instagram.com/joaomsdev/" className="text-white hover:text-gray-300">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link to="https://github.com/joaosmendess" className="text-white hover:text-gray-300">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link to="https://www.linkedin.com/in/joaosmendess/" className="text-white hover:text-gray-300">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-gray-300">© 2024 Acme Inc. All rights reserved.</p>
        </div>
      </div>
    );
  }
  
  export default FooterComponent;
