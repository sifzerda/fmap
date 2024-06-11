import { Link } from 'react-router-dom';

function Sidebar() {
    return (
 
      <div className="sidebar-container">
      <div className="dropdown">
          <button className="dropbtn">Subjects</button>
          <div className="dropdown-content">
              <ol>
                  <li><Link to="/Story">Story</Link></li>
                  <li><Link to="/Premise">Premise</Link></li>
                  <li><Link to="/Plot">Plot</Link></li>
                  <li><Link to="/Themes">Themes</Link></li>
                  <li><Link to="/Conflict">Conflict</Link></li>
                  <li><Link to="/Scenes">Scenes</Link></li>
                  <li><Link to="/MainCharacters">Main Characters</Link></li>
                  <li><Link to="/SecondaryCharacters">Secondary Characters</Link></li>
                  <li><Link to="/Setting">Setting</Link></li>
                  <li><Link to="/Subtext">Subtext</Link></li>
                  <li><Link to="/Description">Description</Link></li>
                  <li><Link to="/Dialogue">Dialogue</Link></li>
                  <li><Link to="/Suspense">Suspense</Link></li>
                  <li><Link to="/POV">POV</Link></li>
                  <li><Link to="/Voice">Voice</Link></li>
                  <li><Link to="/Antagonists">Antagonists</Link></li>
                  <li><a href="/TheFirstWords">The First Words</a></li>
                  <li><Link to="/TheNextWords">The Next Words</Link></li>
                  <li><Link to="/TheLastWords">The Last Words</Link></li>
                  <li><Link to="/WritingDevices">Writing Devices</Link></li>
                  <li><Link to="/WritersBlock">Writers Block</Link></li>
                  <li><Link to="/Editing">Editing</Link></li>
                  <li><Link to="/Title">Title</Link></li>
                  <li><Link to="/Logline">Logline</Link></li>
                  <li><Link to="/Synopsis">Synopsis</Link></li>
                  <li><Link to="/References">References</Link></li>
              </ol>
          </div>
      </div>
  </div>
);
}
  
export default Sidebar;




