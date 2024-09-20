import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Subjects() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="nav nav-tabs-subjects">
            <li className="nav-item">
                <Link
                    to="/Story"
                    // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                    className={currentPage === '/Story' ? 'nav-link active' : 'nav-link'}
                >
                    Story
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/Premise"
                    // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/Premise' ? 'nav-link active' : 'nav-link'}
                >
                    Premise
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/Plot"
                    // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/Plot' ? 'nav-link active' : 'nav-link'}
                >
                    Plot
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/Themes"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/Themes' ? 'nav-link active' : 'nav-link'}
                >
                    Themes
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/Conflict"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/Conflict' ? 'nav-link active' : 'nav-link'}
                >
                    Conflict
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/Scenes"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/Scenes' ? 'nav-link active' : 'nav-link'}
                >
                    Scenes
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/MainCharacters"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/MainCharacters' ? 'nav-link active' : 'nav-link'}
                >
                    MainCharacters
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/SecondaryCharacters"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/SecondaryCharacters' ? 'nav-link active' : 'nav-link'}
                >
                    SecondaryCharacters
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/Setting"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/Setting' ? 'nav-link active' : 'nav-link'}
                >
                    Setting
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/Subtext"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/Subtext' ? 'nav-link active' : 'nav-link'}
                >
                    Subtext
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/Description"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/Description' ? 'nav-link active' : 'nav-link'}
                >
                    Description
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/Dialogue"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/Dialogue' ? 'nav-link active' : 'nav-link'}
                >
                    Dialogue
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/Suspense"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/Suspense' ? 'nav-link active' : 'nav-link'}
                >
                    Suspense
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/POV"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/POV' ? 'nav-link active' : 'nav-link'}
                >
                    POV
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/Voice"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/Voice' ? 'nav-link active' : 'nav-link'}
                >
                    Voice
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/Antagonists"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/Antagonists' ? 'nav-link active' : 'nav-link'}
                >
                    Antagonists
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/TheFirstWords"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/TheFirstWords' ? 'nav-link active' : 'nav-link'}
                >
                    FirstWords
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/TheNextWords"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/TheNextWords' ? 'nav-link active' : 'nav-link'}
                >
                    NextWords
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/TheLastWords"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/TheLastWords' ? 'nav-link active' : 'nav-link'}
                >
                    TheLastWords
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/WritingDevices"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/WritingDevices' ? 'nav-link active' : 'nav-link'}
                >
                    WritingDevices
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/Block"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/Block' ? 'nav-link active' : 'nav-link'}
                >
                    WriterBlock
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/Editing"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/Editing' ? 'nav-link active' : 'nav-link'}
                >
                    Editing
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/Title"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/Title' ? 'nav-link active' : 'nav-link'}
                >
                    Title
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/Logline"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/Logline' ? 'nav-link active' : 'nav-link'}
                >
                    Logline
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/Synopsis"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/Synopsis' ? 'nav-link active' : 'nav-link'}
                >
                    Synopsis
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="/References"
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === '/References' ? 'nav-link active' : 'nav-link'}
                >
                    References
                </Link>
            </li>


        </ul>
    );
}

export default Subjects;