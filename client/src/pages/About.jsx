import splashPic from '../assets/splashPic.jpg'
import '../App.css'

export default function About() {
  return (
    <div>

      <h1>About</h1>

      <p className="separator-line"></p>

      <img className="profile-picture" src={splashPic} alt="Profile" />

      <div className="separator-line"></div>

      <div className="jumbotron p-3 p-md-3 text-white rounded bg-dark">

        <div id="wrapper" className="text-left">
          <p className="lead my-3"><i>By this art you may contemplate the variation of the 23 letters. </i></p>
          <i>— 'The Library of Babel', Jorge Luis Borges</i>
        </div>
      </div>

      <p className='portfolio-bio'>
        This is a smaller sibling blog to my other site Fiction Map. It's a resource
        for writers looking to improve their craft and write scarier, better horror stories.
      </p>

      <p className='portfolio-bio'>
        Horror is a special genre. It is definable by what it does not possess:
        clear plot goals, antagonists, positive themes, tidy resolutions, and happy endings.

        If a reader is left with an overall sense of dread, confusion, bewilderment and upset, according
        to other genres, the story is a failure...
      </p>
      <p className='portfolio-bio'> ...Except for horror, where this is the goal.</p>

      <p className='portfolio-bio'>Special storytelling rules apply, which are covered in this blog. I hope you find it useful! </p>

      <div className="separator-line"></div>

      <h2>Index</h2>

      <div className="index-card">
        <ul className="index-list">
          <li>Story: where this is the goal.</li>
          <li>Premise: where this is the goal.</li>
          <li>Plot: where this is the goal.</li>
          <li>Themes: where this is the goal.</li>
          <li>Conflict: where this is the goal.</li>
          <li>Scenes: where this is the goal.</li>
          <li>Main Characters: where this is the goal.</li>
          <li>Secondary Characters: where this is the goal.</li>
          <li>Setting: where this is the goal.</li>
          <li>Subtext: where this is the goal.</li>
          <li>Description: where this is the goal.</li>
          <li>Dialogue: where this is the goal.</li>
          <li>Suspense: where this is the goal.</li>
          <li>POV: where this is the goal.</li>
          <li>Voice: where this is the goal.</li>
          <li>Antagonists: where this is the goal.</li>
          <li>The First Words: where this is the goal.</li>
          <li>The Next Words: where this is the goal.</li>
          <li>The Last Words: where this is the goal.</li>
          <li>Writing Devices: where this is the goal.</li>
          <li>Writer's Block: where this is the goal.</li>
          <li>Editing: where this is the goal.</li>
          <li>Title: where this is the goal.</li>
          <li>Logline: where this is the goal.</li>
          <li>Synopsis: where this is the goal.</li>
          <li>References: all cited sources</li>
        </ul>
      </div>
    </div>
  );
}