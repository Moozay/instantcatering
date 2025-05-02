import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-2xl font-bold text-blue-800">Instant Catering Services Ltd.</span>
    </Link>
  );
};

export default Logo;