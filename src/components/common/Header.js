import React, { PropTypes } from 'react';
import {Link, IndexLink } from 'react-router';

//Stateless functional component
const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link> 
      {" | "}
      <Link to="/todo" activeClassName="active">To Dos</Link>
    </nav>
  );
};

export default Header;