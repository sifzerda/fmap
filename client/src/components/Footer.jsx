import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

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
          <FontAwesomeIcon icon={faPencilAlt} className="ml-1" />
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

