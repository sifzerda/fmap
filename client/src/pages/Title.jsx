import '../App.css'
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

export default function Title() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <h1 className="display-4">Title</h1>

        <div id="wrapper" className="text-left">
          <p className="lead my-3">Let your mind be working on your title as you go along</p>
          <i>— F. Scott Fitzgerald</i>
        </div>
      </div>

      <div className="col-md-6"></div>
      <div className="card flex-md-row mb-4 box-shadow h-md-250">
        <div className="card-body d-flex flex-column align-items-start">
          <strong className="d-inline-block mb-2 text-success">Design</strong>
          <h3 className="mb-0">
            <a className="text-dark" href="#">Post title</a>
          </h3>
          <div className="mb-1 text-muted">Nov 11</div>
          <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to dditional content.</p>
          <a href="#">Continue reading</a>
        </div>

        <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18eeca52e10%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18eeca52e10%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.1953125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true"></img>
      </div>


      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">
              <h2 id="post-23-1" className="blog-post-title">23.1: What is An Effective Title?</h2>
              <p className="blog-post-meta">January 1, 2014 by <a href="#">zerda</a></p>
              <div id="content">

                <p>Some writers may defer this stage until they finish the story, but I recommend creating a list of possible titles for your story as you write it, continually adding or subtracting from the list as you think of a new one. </p>

                <p>Effective titles tend to have some things in common:</p>

                <ol>
                  <li>They contain metaphors;</li>
                  <li>They contrast unalike things;</li>
                  <li>They are eye-catching or provoke interest;</li>
                </ol>

                <p>However, your title might be eye-catching for other reasons:</p>

                <ul>
                  <li>It provokes debate and controversy, e.g. <i>Rape: A Love Story</i> by Joyce Carol Oates</li>
                  <li>It overturns commonly accepted moral positions, e.g. <i>Live and Let Die</i> by Ian Fleming</li>
                  <li>It makes an oddly specific designation, e.g. <i>Fahrenheit 451</i> by Ray Bradbury</li>
                  <li>It creates an image you don’t normally see in real life, e.g. <i>Flow my tears, the policeman said</i> by Philip K. Dick</li>
                  <li>It suggests an answer to an age-old mystery, e.g. <i>The Da Vinci Code</i> by Dan Brown</li>
                  <li>It makes a witty or ironic observation, e.g. <i>When You Look Like Your Passport Photo, It's Time to Go Home</i> by Erma Bombeck</li>
                  <li>An evocation of something exotic, e.g. <i>Water for Elephants</i> by Sara Gruen</li>
                </ul>

                <p>Other effective titles:</p>
                <ul>
                  <li><i>Do Androids Dream of Electric Sheep? </i>(Philip K. Dick)</li>
                  <li><i>I, Robot </i>(Isaac Asimov)</li>
                  <li><i>I Have No Mouth and I Must Scream </i>(Harlan Ellison)</li>
                  <li><i>Atlas Shrugged </i>(Ayn Rand)</li>
                  <li><i>The Postman Always Rings Twice </i>(James M. Cain)</li>
                  <li><i>The Big Sleep </i>(Raymond Chandler)</li>
                  <li><i>War of the Worlds </i>(H. G. Wells)</li>
                </ul>

                <h2 id="post-23-2" className="blog-post-title">23.2: Tips</h2>

                <p>Go for shorter, punchier titles.</p>
                <p>Should evoke interest, make the person want to pick up the book and start reading. If a horror story, should raise a suggestion of horror, i.e. 'that sounds scary'. Avoid genre-bending, i.e. a horror story with a 'soft' title misleadingly making it sound like a sentimental drama.</p>
                <p>Some horror stories already have great titles. Draw inspiration from them, but don't downright copy.</p>
                <p>Should link to a key theme of the story. For instance, if you wanted to write a story about 'X', title should be about X, or converging on it.</p>
                <p>Should be something not overused (if used at all) in the story. For instance, avoid in-story lines which create conspicuous 'title drops'. </p>
                <p>It doesn't have to lay the whole story out bare once you 'get' the title. It could merely raise questions or a line of inquiry. In other words, it doesn't contain an 'answer' to a thematic question, rather it is a thematic question itself. The title shouldn't contain an answer to a thematic question as to remove the point of reading the book itself, because the title gives the answer.</p>
                <p>Apply the 'person you know' or 'person on the street' test: Could you say that you've written a story under that name to a person you know or a person on the street without feeling silly?</p>

{/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

<ThoughtForm />

<ThoughtList />

{/* ------------------------------------------------- footnotes 

<div className="footnotes">
                  <h4>Footnotes</h4>
                  <ol>
                    <li id="f1">Jack Hart, <i>Storycraft: Complete Guide to Writing Narrative Nonfiction.</i></li>
                    <li id="f2">William Sloane, <i>The Craft Of Writing.</i></li>
                    <li id="f3"><i>Rebecca.</i></li>
                    <li id="f4">Don’t Look Now, <i>Not After Midnight, and other stories.</i></li>
                    <li id="f5">Monte Verità, <i>The Birds and Other Stories.</i></li>
                    <li id="f46">Facing the Wind, <i>Julie Salamon,</i> note: This is non-fiction.</li>
                    <li id="f47">The Fly, <i>George Langelaan.</i></li>
                  </ol>
                </div>

-------------------------------------------------------- */}

              </div>
            </div>

            <nav className="blog-pagination">
              <a className="btn btn-outline-primary" href="#">Older</a>
              <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
            </nav>

          </div>

          <aside className="col-md-4 blog-sidebar">
            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">About</h4>
              <p className="mb-0-1">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Index</h4>
              <ol className="list-unstyled mb-0">
                <li><a href="#post-23-1">23.1: What is an Effective Title?</a></li>
                <li><a href="#post-23-2">23.2: Tips</a></li>
              </ol>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Elsewhere</h4>
              <ol className="list-unstyled">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
              </ol>
            </div>
          </aside>
        </div>
      </main>

    </div>
  );
}
