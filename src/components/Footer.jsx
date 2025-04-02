const Footer = () => {
    return (
      <footer className="bg-blue-600 text-white text-center p-4 dark:bg-gray-900 mt-10">
        <p className="text-sm">
          © {new Date().getFullYear()} On This Day. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Built with ❤️ using React, Tailwind CSS, and Wikipedia API.
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href="https://wikipedia.org" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Wikipedia API
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  