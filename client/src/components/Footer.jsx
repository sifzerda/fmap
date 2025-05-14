import React from 'react';
import f3 from '../../src/assets/f3.png';

function Footer() {
  return (
    <footer className="footer text-white">
      <div className="footer-content">
        <p className="footer-text">
          sifzerda
          <a
            href="https://github.com/sifzerda/fiction"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub repository"
          >
          <span className="comet">☄️</span>  
          </a>
          2024–25
        </p>

        <a
          href="https://react-td-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View my project portfolio"
        >
          Portfolio
        </a>
      </div>
    </footer>
  );
}

export default Footer;

