import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

// const NavLink = styled.a`
//   color: #fff;
//   text-decoration: none;
//   font-size: 1rem;
//   &:hover {
//     text-decoration: underline;
//   }
// `;



const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo to="/">ML & Web Dev Blog</Logo>
      <NavLinks>
        {/* <NavLink href="/">Home</NavLink> */}
        {/* <NavLink href="/about" >About</NavLink> */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        
        {/* <NavLink href="/contact">Contact</NavLink> */}
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
