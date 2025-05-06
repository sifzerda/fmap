import profilePic from '../assets/propic.jpg'
import '../App.css'

export default function About () {
  return (
    <div>
      <h1>About This Site</h1>

      <p className="separator"></p>

      <img className="profile-picture" src={profilePic} alt="Profile"  />

      <p className='portfolio-bio'>
Add description here.
      </p>



    </div>
  );
}
