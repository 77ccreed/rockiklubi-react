import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    404 - Lehele pääseb  <Link to="/" className="text-success">siit!</Link>
  </div>
);

export default NotFoundPage;