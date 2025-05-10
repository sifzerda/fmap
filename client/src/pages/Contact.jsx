import ContactForm from '../components/ContactForm';
import splashPic from '../assets/splashPic.jpg';

export default function Contact() {
  return (
    <div>

      <div className="jumbotron p-1 text-center text-white rounded bg-dark">
        <h1 className="m-0 p-0">Contact Me</h1>
      </div>

      <p className="separator-line"></p>

      <img className="profile-picture" src={splashPic} alt="Profile" />

      <div className="separator-line"></div>
    
        <div id="wrapper" className="text-left">

          <div className="form-box">
            <ContactForm />
          </div>

        </div>
 
      <div className="separator-line"></div>

    </div>

  )
};