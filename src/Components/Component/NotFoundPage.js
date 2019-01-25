import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="m-5 font-weight-bold">
    <p>404 - Lehele pääseb  <Link to="/" className="text-success">siit!</Link></p> 
  </div>
);

export default NotFoundPage;