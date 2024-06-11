import '../App.css'
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

export default function TheLastWords() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <h1 className="display-4">The Last Words</h1>

        <div id="wrapper" className="text-left">
          <p className="lead my-3">If you want a happy ending, that depends, of course, on where you stop your story </p>
          <i>— Orson Welles</i>
          <p className="lead my-3">A great ending is inevitable yet unexpected</p>
          <i>— Aristotle</i>
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
              <h2 id="post-19-1" className="blog-post-title">19.1: What is an Ending?</h2>
              <p className="blog-post-meta">January 1, 2014 by <a href="#">zerda</a></p>
              <div id="content">

                <p>In order to know what an ending is supposed to do, you need to know what an ending is.</p>

                <h5>19.1.1 	Memory</h5>
                <p>The beginning of a story presumes ‘tabula rasa,’ i.e. you don’t need any foreknowledge for it to work. By contrast, an ending requires the foreknowledge of the plot. </p>
                <p>Your ending will be pointless if your reader approaches it ‘blank slate’. This may happen because you didn’t work in enough information throughout the course of your story to ‘remind’ your reader why the ending makes sense. Sometimes a story will try to short circuit this problem by inserting a flashback at the ending to do the work, but this is ‘cheating’ and should be avoided.  </p>

                <h5>19.1.2 	Meaningfulness</h5>
                <p>Remember a story is not just a series of events (see chapter 1: Story), there is some overall meaningfulness which makes the events transcend mere miscellaneous factual information and become self-contained. </p>
                <p>Aristotle’s quote at the start of this chapter illustrates this: ‘inevitable’ such that you could not remove the ending without damaging the whole work.  </p>

                <h2 id="post-19-2" className="blog-post-title">19.2: Ending a Scene</h2>
                <p>Your story may not have just one ending. If you raise live issues throughout your story (as you should) each of these will have endings, giving your story several ‘mini’ endings. These are also good practice for writing your ultimate ending.</p>
                <div className="p-3 mb-3 bg-light rounded">
                  <p className="mb-0">Your endings will be better if you remember that other parts of your story need endings, too. Sentences have endings. Paragraphs have endings. [And]…each of these mini-endings anticipates your finale</p>
                  <p></p><i>— Roy Clark </i>
                </div>

                <p>He’s not referring to the words that come at the end of the sentences and paragraphs, but sentences and paragraphs throughout your writing.</p>
                <p>An issue raised in one scene can be ‘ended’ or concluded in another scene. To do this, the sentences/paragraphs should reflect each other somehow. Make use of techniques such as:</p>

                <h5>19.1.1 	Repetition  </h5>
                <p>Repeating key words (particularly when they appear nowhere else in the story) can be a good way to flag an ending.</p>
                <p>See 18.3.10 Purposeful Repetition.</p>

                <h5>19.1.2 	Callback </h5>
                <p>A callback is any reference to previous information. This may include a character remembering something (better that they encounter something in-story that causes them to remember), or a full on flashback. The first time the information comes in, it may be left unconcluded until you callback to it in a later scene, e.g.</p>
                <p className='indent-text-1'>The air siren split through the sky, like the first time it had played when I’d arrived in the compound and Charlie’s dead eyes had stared straight through me: “It’s not real today. One day it will be.”</p>
                <p className='indent-text-1'>He did not know that the enemy had been killed three years ago. But the siren was as real today as it was then, because the enemy was already here. It was inside the perimeter, inside our minds. The siren went on, and on, and it never stopped.  </p>

                <h2 id="post-19-3" className="blog-post-title">19.3: Ending a Chapter</h2>
                <p>The end of a chapter should simultaneously have a sense of conclusion and continuation, or open-endedness. The reader must be rewarded for reaching the end, but enticed to continue. Resolve a small issue/s while keeping others open.</p>
                <p>To use a visual metaphor, it’s like you’re fishing with two rods at the same time; as you cast one line out, you’re pulling the other in, and you’re constantly alternating. As you conclude whether or not one line has caught something, the other is out there, yet unconfirmed. Never pull both lines in at the same time (even if you plan to cast them again at the start of the next chapter). If you lose your lines any time before the end of the story, you risk losing the reader as well. Reading a novel is work; the reader will take upon any excuse to stop reading at any point before the very end. Your ongoing goal is to prevent that – never be complacent that you have the reader now, you have them until the end. Always leave at least one ‘line,’ – or question/issue unanswered – for the reader to keep reading and wondering about. </p>
                <p>Look at the example of live issues raised by Sphere under section ‘2.3 Structuring the Plot with Interest.’ In Sphere, a single chapter never answers all of the questions by the end – and even the final chapter left some minor questions open.</p>
                <p>Look at this example of a chapter ending from ‘The Dead Zone’ by Stephen King:</p>
                <p className='indent-text-1'>“I love you, Sarah,” Johnny said. So it was out, it couldn’t be called back, it hung between them in the moving car waiting for someone to do something about it. She did what she could.   </p>
                <p className='indent-text-1'>“Thank you, Johnny.” They drove on in a comfortable silence.   </p>
                <p>Previously, love between these characters burgeoned throughout the chapter (and previous chapters). Now, abruptly, the issue is concluded; one character says ‘I love you,’ and the other conspicuously does not respond in kind. It resolves that she doesn’t love him (yet), but keeps a live issue open that she may in future, rather than if she just said ‘I love you,’ back. This ensures the reader sticks around to find out if she changes her mind, and if she doesn’t, how will the other react?</p>

                <h2 id="post-19-4" className="blog-post-title">19.4: Ending an Act</h2>
                <p>NOTHING HERE YET</p>

                <h2 id="post-19-5" className="blog-post-title">19.5: Ending the Story</h2>
                <p>NOTHING HERE YET</p>

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
                    <li id="f6">The Birds, <i>The Birds and Other Stories.</i></li>
                  </ol>
                </div>

------------------------------------------------ */}

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
                <li><a href="#post-19-1">19.1: What is an Ending?</a></li>
                <li><a href="#post-19-2">19.2: Ending a Scene</a></li>
                <li><a href="#post-19-3">19.3: Ending a Chapter</a></li>
                <li><a href="#post-19-4">19.4: Ending an Act</a></li>
                <li><a href="#post-19-5">19.5: Ending the Story</a></li>
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
