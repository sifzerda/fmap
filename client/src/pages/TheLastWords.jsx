import '../App.css'
//import lastWBanner from '../assets/lastwbanner.jpg'
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';
import FootnoteRef from '../components/FootnoteRef';

export default function TheLastWords() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-3 text-white text-center rounded bg-dark">
        <h1 className="display-4">The Last Words</h1>

        <div id="wrapper" className="text-left">
          <p className="lead my-3">If you want a happy ending, that depends, of course, on where you stop your story </p>
          <i>— Orson Welles</i>
          <p className="lead my-3">A great ending is inevitable yet unexpected</p>
          <i>— Aristotle</i>
        </div>
      </div>

      {/* 
      <div className="card flex-md-row mb-4 box-shadow h-md-250 p-0">
        <img className="card-img-top w-100" src={lastWBanner} alt="Thumbnail" />
      </div>
*/}

      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">
              <h2 id="post-19-1" className="blog-post-title">19.1: What is an Ending?</h2>

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

                <div className="p-3 mb-3 rounded custom-light-box">
                  <p className="mb-0">Your endings will be better if you remember that other parts of your story need endings, too. Sentences have endings. Paragraphs have endings. [And]…each of these mini-endings anticipates your finale</p>
                  <p></p><i>— Roy Clark <FootnoteRef text="Roy Peter Clark, Writing Tools: 50 Essential Strategies for Every Writer." /></i>
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
                    <li id="f6">The Birds, <i>The Birds and Other Stories.</i></li>
                  </ol>
                </div>

------------------------------------------------ */}

              </div>
            </div>

            <nav className="blog-pagination">
              <a className="btn btn-outline-primary" href="#">Back to Top</a>
            </nav>

          </div>

          <aside className="col-md-4 blog-sidebar">
            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">About</h4>
              <p className="mb-0-1">The end of a piece of writing should resolve or conclude previously established issues and conflict.</p>
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
              <h4 className="font">Also See</h4>
              <ol className="list-unstyled">
                <li><a href="/TheFirstWords">17. The First Words</a></li>
                <li><a href="/TheNextWords">18. The Next Words</a></li>
                <li><a href="/Editing">22. Editing</a></li>
              </ol>
            </div>
          </aside>
        </div>
      </main>

    </div>
  );
}
