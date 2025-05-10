import splashPic from '../assets/splashPic.jpg'
import '../App.css'

export default function About() {
  return (
    <div>

<div className="jumbotron p-1 text-center text-white text-center rounded bg-dark">
  <h1 className="m-0 p-0">About</h1>
</div>

      <p className="separator-line"></p>

      <img className="profile-picture" src={splashPic} alt="Profile" />

      <div className="separator-line"></div>

      <div className="jumbotron p-1 p-md-1 text-center text-white rounded bg-dark">
        <div id="wrapper" className="text-left">
          <p className="lead my-1 text-white"><i>By this art you may contemplate the variation of the 23 letters. </i></p>
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

    </div>
  );
}