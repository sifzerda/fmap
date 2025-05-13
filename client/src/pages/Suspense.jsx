import '../App.css'
//import suspenseBanner from '../assets/suspensebanner.jpg'
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';
import FootnoteRef from '../components/FootnoteRef';

export default function Suspense() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-3 text-white text-center rounded bg-dark">
        <h1 className="display-4">Suspense</h1>

        <div id="wrapper" className="text-left">
          <p className="lead my-3">You do not keep the audience's interest by giving it information, but by withholding information.</p>
          <i>— Robert McKee</i>
          <p className="lead my-3">The easiest thing for a reader to do is to quit reading.</p>
          <i>— Michael Gartner</i>
          <p className="lead my-3">Make them laugh. Make them cry. But, most of all, make them wait.</p>
          <i>— Charles Dickens</i>
        </div>
      </div>

      {/* 
      <div className="card flex-md-row mb-4 box-shadow h-md-250 p-0">
        <img className="card-img-top w-100" src={suspenseBanner} alt="Thumbnail" />
      </div>
*/}

      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">
              <h2 id="post-13-1" className="blog-post-title">13.1 What is Suspense?</h2>

              <div id="content">

                <p>Suspense is basically just holding off on resolving conflict or answering plot-related questions for as long as possible. It’s necessary if you want the reader to keep reading until the end. </p>

                <p>Burnett and Burnett<FootnoteRef text="Hallie Burnett and Whit Burnett, Fiction Writer's Handbook." /> says suspense is “that half-revealed something which makes us ask for more,” and is ‘essential’ even if only “a matter of how a girl will make up her mind, or a young man turn his back on his fears.”</p>

                <h2 id="post-13-2" className="blog-post-title">13.2 How to Create Suspense</h2>

                <p>One way of providing suspense is, obviously, to stubbornly refuse to provide a resolution until the very end of the story.</p>

                <p>The problem is your conflict risks going ‘cold’ for the reader; they might assume the conflict is of no importance and probably won’t be resolved by the end, and subsequently stop reading.</p>

                <p>Alternatively, you want to provide build ups of suspense on the way to the resolution; making small promises which add up to your resolution being really worthwhile, whilst reminding the reader that the conflict hasn’t been forgotten, and teasing that the end will provide the answer.</p>

                <p>I like Sol Stein’s<FootnoteRef text="Sol Stein, On Writing." /> workmanlike definition of suspense as where the reader wants something to happen and it isn’t happening yet, or the reader wants something to stop, and it doesn’t. However, it doesn’t capture the variety of ways you can invite suspense into your story. The reader might: </p>

                <ol>
                  <li>want something to happen, or </li>
                  <li>want something to <i>not</i> happen, or  </li>
                  <li>not know, of multiple, terrible outcomes, which is worse, or  </li>
                  <li>of a ‘too good to be true’ outcome, how it could go wrong, or  </li>
                  <li>of a guaranteed confrontation, when the confrontation will actually occur, and under what circumstances, etc. </li>
                </ol>

                <p>The layman definition of suspense tends to associate suspense building with raising the stakes. That is one form of suspense building but it’s not the only one. In order to build suspense, all you need to do is supply information, or create events which lend the final outcome more weight.</p>

                <h2 id="post-13-3" className="blog-post-title">13.3 Tension</h2>

                <h5>13.3.1 What Is Tension?</h5>

                <p>Sol Stein defines this as a separate concept from suspense. I tend to think of it as an offshoot of suspense, or suspense in miniature. Generally, suspense refers to the protraction of the main plotline. Tension refers to the little obstacles which are auxiliary to the main plotline, but still delay the main plotline’s resolution.</p>
                <p>Here’s what suspense is<i> not:</i><FootnoteRef text="The Dead Zone, Stephen King." /></p>

                <p className="code-left"><code><i>A thick feeling of tension had begun to creep into his body. </i></code></p>
                <p>As with most writing effects, you cannot generate tension merely by telling your reader it’s there. You have to create it.</p>

                <h5>13.3.2 How to Create Tension</h5>

                <p>A basic way of increasing tension is to take your protagonist’s plan and shoot little holes in it. They have to fire a gun; they miss. They have to make a delivery, or pick someone up; they’re late. This not only adds tension, it makes your story sound more realistic because life events rarely turn out exactly as planned.</p>
                <p>You can increase tension merely by rearranging sentences and how information is delivered – this affects pacing, i.e. protracting or delaying how quickly narrative points are resolved. </p>
                <p>Generally, to increase tension, make the pacing frustrate the protagonist’s intention. If your protagonist needs time, speed the pacing up. If your protagonist needs to be fast, slow the pacing down.</p>
                <p>You slow pacing by adding detail. A way to speed pacing up is what Sol Stein calls ‘skipping for effect’. This is where you selectively omit information. For example:<FootnoteRef text="The Country Husband, John Cheever." /></p>

                <p className="code-left"><code><i>He washed his body, shaved his jaws, drank his coffee, and missed the seven-thirty-one. </i></code></p>

                <h2 id="post-13-4" className="blog-post-title">13.4 Pacing</h2>

                <h5>13.4.1 	What Is Pacing</h5>

                <p>Pacing describes several things:</p>

                <ol>
                  <li>The speed you give the reader information;</li>
                  <ol>
                    <li>a.	This may relate to the speed the protagonist makes mental connections or the speed they take in mental stimuli;</li>
                  </ol>
                  <li>The speed of singular events being described;</li>
                  <ol>
                    <li>This is the speed gauged of a single physical, determined start to finish;</li>
                  </ol>
                  <li>The speed of a chain of multiple events being described;</li>
                  <ol>
                    <li>Of related events (or a single event comprised of multiple smaller events) this is the overall sense of how quickly those events happened, one after another.</li>
                  </ol>
                </ol>

                <h5>13.4.2 	Why is it important?</h5>

                <p>Roy Clark<FootnoteRef text="Roy Peter Clark, Writing Tools: 50 Essential Strategies for Every Writer." />  lists three reasons to manipulate a story’s pacing:</p>

                <ol>
                  <li>To simplify the complex; </li>
                  <li>To create suspense;</li>
                  <li>To focus on the emotional truth.</li>
                </ol>

                <p>By ‘emotional truth’ Clark means that long sentences sound more ‘academic’ and intellectual, allowing time to process complicated ideas, whereas short sentences sound more powered by raw emotional, as if observations and thoughts are whipping along on an almost subconscious level.</p>
                <p>For instance, shorter sentences are more appropriate to describe a person dying quickly, not only to convey the quick passage of time, but to convey that, you don’t have complicated thoughts in that situation; only immediate, vivid and emotional ones.</p>
                <p>However, when you want to let the reader rest and think, you go for longer sentences.</p>
                <p>Pacing also influences how fast the reader determines events are happening. Events may be physical, or mental (e.g. the speed the protagonist makes mental connections or the speed they take in mental stimuli). Because many physical events occur to your protagonist as mental stimuli, there is overlap.</p>
                <p>By example, two Stephen King stories: </p>

                <ol>
                  <li>Fast Pacing:</li>
                  <p>In Children of the Corn, the events happen within a day or so. This largely because the circumstance of the plot; a bunch of townspeople have been murdered and the protagonists are captives of the remaining children. The plot events must play out very quickly after this point to manage the likelihood of the protagonists running away or calling authorities – on that logic, there is no sense drawing the events out longer.</p>
                  <li>Slow Pacing</li>
                  <p> In The Dead Zone, the events happen across many years. While the protagonist is in a coma, events aren’t skipped over until he wakes up, but continue to be described to convey the long passage of time and sense of change while he is comatose.</p>
                  <p>After he has awoken, the rest of the story plays out across a few years between the protagonist making a psychic prediction, and it coming true. This is to convey how far into the future he can see, and the sense of uncertainty or dread in the meantime.</p>
                </ol>

                <h5>13.4.3	No-Clock Pacing</h5>

                <p>It’s tempting to reduce pacing to literal references of the passage of time, e.g.</p>
                <p className='indent-text-1'><i>We left two hours later.</i></p>
                <p className='indent-text-1'><i>The city was a twenty minute drive away.</i></p>
                <p className='indent-text-1'><i>I worked at this job for six months, before they fired me.</i></p>

                <p>Etc.</p>

                <p>There are two problems with this: (1) it’s too formulaic and, (2) reminding your reader the passage of time in the story risks reminding them of the passage of time in real life, and that is the opposite of what a story – in trying to immerse someone – is aiming to do.</p>
                <p>Try to convey the passage of time by the activities your characters are doing, or observations going around them, e.g. </p>

                <p className='indent-text-1'>The dance floor eventually gets crowded, mostly with guys, but the vibe is good. I have about ninety beers as another incredible African sky turns from blue to orange to purple to black. The music gets louder and more insistent. I soldier through broken conversations with drunken strangers.<FootnoteRef text="To Hellholes and Back, Chuck Thompson." /></p>
                <p>Multiple parts of this paragraph jump time ahead – ‘ninety beers’, the sky changing colour, several ‘conversations.’</p>

                {/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

                <ThoughtForm />
                <ThoughtList />

                {/* ------------------------------------------------- footnotes --------------------------------------------- */}

                <div className="footnotes">
                  <h4>Footnotes</h4>
                  <ol>
                    <li id="f1">Stephen King, <i>The Dead Zone.</i></li>
                    <li id="f2">John Cheever, <i>The Country Husband .</i></li>
                    <li id="f3">Chuck Thompson, <i>To Hellholes and Back.</i></li>
                  </ol>
                </div>

                {/* ---------------------------------------------------------------------------------------------- */}


              </div>
            </div>

            <nav className="blog-pagination">
              <a className="btn btn-outline-primary" href="#">Back to Top</a>
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
                <li><a href="#post-13-1">13.1 What is Suspense?</a></li>
                <li><a href="#post-13-2">13.2 How to Create Suspense</a></li>
                <li><a href="#post-13-3">13.3 Tension</a></li>
                <li><a href="#post-13-4">13.4 Pacing</a></li>
              </ol>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Also See</h4>
              <ol className="list-unstyled">
                <li><a href="/Conflict">5. Conflict</a></li>
                <li><a href="/Suspense">10. Subtext</a></li>
                <li><a href="/WritingDevices">20. Writing Devices</a></li>
              </ol>
            </div>
          </aside>
        </div>
      </main>


    </div>
  );
}
