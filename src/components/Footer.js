// Footer.js
import React from 'react';
import styled from 'styled-components';
// import {Link} from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 ML & Web Dev Blog. All rights reserved.</FooterText>
      <FooterText>Rajiv's Blog</FooterText>
      {/* <Link to='/about' >About</Link> */}
    </FooterContainer>
  );
};

export default Footer;
