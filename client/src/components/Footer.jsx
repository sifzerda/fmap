//import React from 'react';
import f3 from '../../src/assets/f3.png';

function Footer() {
  return (
    <footer className="text-center text-white">
        <div className="col-lg-8">
        
        <p className="footer-text footer-center">
          sifzerda
          <a 
            href="https://github.com/sifzerda/fiction" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Visit my GitHub repository"
          >
            <img
              src={f3}
              alt="fox head"
              className="fox-head"
              width="23"
              height="23"
            />
          </a>
          2024-25
        </p>

          <a href="https://react-td-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="View my project portfolio">Portfolio</a>

      </div>
    </footer>
  );
}

export default Footer;





