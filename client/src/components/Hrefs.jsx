import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Hrefs() {
    const [isListVisible, setIsListVisible] = useState(false);

    const toggleListVisibility = () => {
        setIsListVisible(!isListVisible);
    };

    const handleLinkClick = () => {
        setTimeout(() => {
            window.location.reload();
        }, 100);
    };

    return (
        <div className="sidebar-container">
            <div className="button-container">
                <button
                    className={`toggle-btn ${isListVisible ? 'active' : ''}`}
                    onClick={toggleListVisibility}
                >
                    Subjects
                </button>
            </div>
            <div className={`list-content ${isListVisible ? 'visible' : ''}`}>
                <ol>
                    <li><Link to="/Story" onMouseDown={handleLinkClick}>Story</Link></li>
                    <li><Link to="/Premise" onMouseDown={handleLinkClick}>Premise</Link></li>
                    <li><Link to="/Plot" onMouseDown={handleLinkClick}>Plot</Link></li>
                    <li><Link to="/Themes" onMouseDown={handleLinkClick}>Themes</Link></li>
                    <li><Link to="/Conflict" onMouseDown={handleLinkClick}>Conflict</Link></li>
                    <li><Link to="/Scenes" onMouseDown={handleLinkClick}>Scenes</Link></li>
                    <li><Link to="/MainCharacters" onMouseDown={handleLinkClick}>Main Characters</Link></li>
                    <li><Link to="/SecondaryCharacters" onMouseDown={handleLinkClick}>Secondary Characters</Link></li>
                    <li><Link to="/Setting" onMouseDown={handleLinkClick}>Setting</Link></li>
                    <li><Link to="/Subtext" onMouseDown={handleLinkClick}>Subtext</Link></li>
                    <li><Link to="/Description" onMouseDown={handleLinkClick}>Description</Link></li>
                    <li><Link to="/Dialogue" onMouseDown={handleLinkClick}>Dialogue</Link></li>
                    <li><Link to="/Suspense" onMouseDown={handleLinkClick}>Suspense</Link></li>
                    <li><Link to="/POV" onMouseDown={handleLinkClick}>POV</Link></li>
                    <li><Link to="/Voice" onMouseDown={handleLinkClick}>Voice</Link></li>
                    <li><Link to="/Antagonists" onMouseDown={handleLinkClick}>Antagonists</Link></li>
                    <li><a href="/TheFirstWords" onMouseDown={handleLinkClick}>The First Words</a></li>
                    <li><Link to="/TheNextWords" onMouseDown={handleLinkClick}>The Next Words</Link></li>
                    <li><Link to="/TheLastWords" onMouseDown={handleLinkClick}>The Last Words</Link></li>
                    <li><Link to="/WritingDevices" onMouseDown={handleLinkClick}>Writing Devices</Link></li>
                    <li><Link to="/WritersBlock" onMouseDown={handleLinkClick}>Writers Block</Link></li>
                    <li><Link to="/Editing" onMouseDown={handleLinkClick}>Editing</Link></li>
                    <li><Link to="/Title" onMouseDown={handleLinkClick}>Title</Link></li>
                    <li><Link to="/Logline" onMouseDown={handleLinkClick}>Logline</Link></li>
                    <li><Link to="/Synopsis" onMouseDown={handleLinkClick}>Synopsis</Link></li>
                    <li><Link to="/References" onMouseDown={handleLinkClick}>References</Link></li>
                </ol>
            </div>
        </div>
    );
}

export default Hrefs;