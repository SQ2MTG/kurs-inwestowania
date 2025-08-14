
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Od Zera do 100k. Wszelkie prawa zastrzeżone.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Regulamin</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Polityka Prywatności</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Kontakt</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
