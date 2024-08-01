import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">TechConnect</h1>
        <nav>
          <Link className="mx-2" to="/">Home</Link>
          <Link className="mx-2" to="/tech-news">Tech News</Link>
          <Link className="mx-2" to="/events">Events</Link>
          <Link className="mx-2" to="/scholarships">Scholarships</Link>
          <Link className="mx-2" to="/mentorships">Mentorships</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
