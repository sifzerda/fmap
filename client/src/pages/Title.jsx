import '../App.css';
//import titleBanner from '../assets/titlebanner.jpg'
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';
import FootnoteRef from '../components/FootnoteRef';

export default function Title() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-3 text-white text-center rounded bg-dark">
        <h1 className="display-4">Title</h1>

        <div id="wrapper" className="text-left">
          <p className="lead my-3">Let your mind be working on your title as you go along</p>
          <i>— F. Scott Fitzgerald</i>
        </div>
      </div>

      {/* 
      <div className="card flex-md-row mb-4 box-shadow h-md-250 p-0">
        <img className="card-img-top w-100" src={titleBanner} alt="Thumbnail" />
      </div>
*/}

      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">
              <h2 id="post-23-1" className="blog-post-title">23.1: What is An Effective Title?</h2>

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
                  <li>It provokes debate and controversy, e.g. <i>Rape: A Love Story</i><FootnoteRef text="Rape: A Love Story, Joyce Carol Oates." /></li>
                  <li>It overturns commonly accepted moral positions, e.g. <i>Live and Let Die</i><FootnoteRef text="Live and Let Die, Ian Fleming." /> </li>
                  <li>It makes an oddly specific designation, e.g. <i>Fahrenheit 451</i> by Ray Bradbury</li>
                  <li>It creates an image you don’t normally see in real life, e.g. <i>Flow my tears, the policeman said</i><FootnoteRef text="Flow My Tears, the Policeman Said, Philip K. Dick." /></li>
                  <li>It suggests an answer to an age-old mystery, e.g. <i>The Da Vinci Code</i><FootnoteRef text="The Da Vinci Code, Dan Brown." /></li>
                  <li>It makes a witty or ironic observation, e.g. <i>When You Look Like Your Passport Photo, It's Time to Go Home</i><FootnoteRef text="When You Look Like Your Passport Photo, It's Time to Go Home, Erma Bombeck." /></li>
                  <li>An evocation of something exotic, e.g. <i>Water for Elephants</i><FootnoteRef text="QWater for Elephants, Sara Gruen." /></li>
                </ul>

                <p>Other effective titles:</p>
                <ul>
                  <li><i>Do Androids Dream of Electric Sheep? </i><FootnoteRef text="Do Androids Dream of Electric Sheep?, Philip K. Dick." /></li>
                  <li><i>I, Robot </i><FootnoteRef text="I, Robot, Isaac Asimov." /></li>
                  <li><i>I Have No Mouth and I Must Scream </i><FootnoteRef text="I Have No Mouth and I Must Scream, Harlan Ellison." /></li>
                  <li><i>Atlas Shrugged </i><FootnoteRef text="Atlas Shrugged, Ayn Rand." /></li>
                  <li><i>The Postman Always Rings Twice </i><FootnoteRef text="The Postman Always Rings Twice, James M. Cain." /></li>
                  <li><i>The Big Sleep </i><FootnoteRef text="The Big Sleep, Raymond Chandler." /></li>
                  <li><i>War of the Worlds </i><FootnoteRef text="War of the Worlds, H. G. Wells." /></li>
                </ul>

                <h2 id="post-23-2" className="blog-post-title">23.2: Tips</h2>

                <p>Go for shorter, punchier titles.</p>
                <p>Should evoke interest, make the person want to pick up the book and start reading. If a horror story, should raise a suggestion of horror, i.e. 'that sounds scary'. Avoid genre-bending, i.e. a horror story with a 'soft' title misleadingly making it sound like a sentimental drama.</p>
                <p>Some horror stories already have great titles. Draw inspiration from them, but don't downright copy.</p>
                <p>Should link to a key theme of the story. For instance, if you wanted to write a story about 'X', title should be about X, or converging on it.</p>
                <p>Should be something not overused (if used at all) in the story. For instance, avoid in-story lines which create conspicuous 'title drops'. </p>
                <p>It doesn't have to lay the whole story out bare once you 'get' the title. It could merely raise questions or a line of inquiry. In other words, it doesn't contain an 'answer' to a thematic question, rather it is a thematic question itself. The title shouldn't contain an answer to a thematic question as to remove the point of reading the book itself, because the title gives the answer.</p>
                <p>Apply the 'person you know' or 'person on the street' test: Could you say that you've written a story under that name to a person you know or a person on the street without feeling silly?</p>

                <hr />

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
              <a className="btn btn-outline-primary" href="#">Back to Top</a>
            </nav>

          </div>

          <aside className="col-md-4 blog-sidebar">
            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">About</h4>
              <p className="mb-0-1">A good title should be brief, memorable, and elicit curiosity.</p>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Index</h4>
              <ol className="list-unstyled mb-0">
                <li><a href="#post-23-1">23.1: What is an Effective Title?</a></li>
                <li><a href="#post-23-2">23.2: Tips</a></li>
              </ol>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Also See</h4>
              <ol className="list-unstyled">
                <li><a href="/WritersBlock">21. Writer's Block</a></li>
                <li><a href="/Logline">24. Logline</a></li>
                <li><a href="/Synopsis">25. Synopsis</a></li>
              </ol>
            </div>
          </aside>
        </div>
      </main>

    </div>
  );
}
