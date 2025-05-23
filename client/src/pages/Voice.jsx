import '../App.css';
//import voiceBanner from '../assets/voicebanner.jpg'
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';
import FootnoteRef from '../components/FootnoteRef';

export default function Voice() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-3 text-white text-center rounded bg-dark">
        <h1 className="display-4">Voice</h1>

        <div id="wrapper" className="text-left">
          <p className="lead my-3">Style is […] a matter of knowing when one has said enough.</p>
          <i>— Hallie & Whit Burnett</i>
          <p className="lead my-3">If you can tell stories, create characters, devise incidents, and have sincerity and passion, it doesn’t matter a damn how you write.</p>
          <i>— Somerset Maugham</i>
          <p className="lead my-3">Poor Faulkner. Does he really think big emotions come from big words?</p>
          <i>— Ernest Hemingway</i>
          <p className="lead my-3">Good writing is like a window pane.</p>
          <i>— George Orwell</i>
          <p className="lead my-3">We pay attention to externals when we do not know what else to do with a poem.</p>
          <i>— I. A. Richards</i>
        </div>
      </div>

      {/* 
      <div className="card flex-md-row mb-4 box-shadow h-md-250 p-0">
        <img className="card-img-top w-100" src={voiceBanner} alt="Thumbnail" />
      </div>
*/}

      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">
              <h2 id="post-15-1" className="blog-post-title">15.1: What is Voice?</h2>

              <div id="content">
                <p>&lsquo;Voice&rsquo; refers to the individuality of your writing. It&apos;s also referred to as &lsquo;style&rsquo; i.e. writing style. Just like you can distinguish different people’s voices in a room, you should be able to distinguish different authors’ writing voices out of a pile of texts.
                </p>

                <hr></hr>
                <p>Sol Stein says voice has two components: <i>&lsquo;the originality of what is said and the originality of the way it is said.&rsquo;</i><FootnoteRef text="Sol Stein, Stein on Writing: A Master Editor of Some of the Most Successful Writers of Our Century Shares His Craft Techniques and Strategies." /></p>

                <p>Like speaking voice, there are a multiple indicators of writing voice:
                  <ul>
                    <li>Vernacular, formality/colloqiualism, syntax and figures of speech;</li>
                    <li>More reliance on concrete or abstract language;</li>
                    <li>Inward looking (e.g. &lsquo;I&rsquo; focused) or outward looking (&lsquo;others&rsquo;, &lsquo;objects&rsquo; and &lsquo;outsides&rsquo;);</li>
                    <li>Serious, detached, emotional or light, witty, jovial;</li>
                  </ul>
                </p>

                <p>
                  If you want an even clearer indicator of &lsquo;voice,&rsquo; take different works and try reading paragraphs out loud (or listening to someone else read them out loud). Some styles sound natural spoken, whereas others do not survive the leap from thought to speech.
                </p>

                <p>
                  Ben Yagoda<FootnoteRef text="Ben Yagoda, How to Not Write Bad." /> explains: There was a spoken language before there was a written language, and good writing has always been intimately connected to the ear, whether the short sentences of Hemingway or the near-endless periods of Samuel Johnson and David Foster Wallace.
                </p>
                <hr></hr>

                <p>Another term for this is the &lsquo;middle style&rsquo;; sometimes it’s claimed to be “transparent” prose. That’s because it’s clear, precise, and concise and doesn’t call attention to itself. </p>

                <p>
                  William Hazlitt gave it some other names, and a good characterization, back in 1821:
                </p>

                <p><i>“To write a genuine familiar or truly English style, is to write as anyone would speak in common conversation, who had a thorough command and choice of words, or who could discourse with ease, force, and perspicuity.”</i><FootnoteRef text="William Hazlitt, INSERT REF." /></p>

                <p>
                  He also gives an example of voiceless – soulless – writing:
                </p>

                <p><i>‘Not only do journalists possess an undying passion to uncover and showcase relevant information to enhance the public’s knowledge on current events, but exhibit a willingness to go to great lengths to obtain stories fit to print.’ </i></p>

                <p>
                  It has all the telltale signs of mindless writing: wordiness, clichés, and catchphrases poorly used; subjects and verbs that don’t line up; incorrect use of words; faulty parallelism.
                </p>

                <p>
                  The purpose of style is not merely to sound “amusing or lyrical or emotive or profound or fun” but to:<FootnoteRef text="David Carroll, A Manual of Writer's Tricks." /></p>
                <ol>
                  <li>Gain the audience's attention</li>
                  <li>Hold their interest</li>
                  <li>Win their long-term confidence so that they keep reading.</li>
                </ol>

                <hr></hr>

                <h2 id="post-15-2" className="blog-post-title">15.2: How to Create Voice</h2>

                <p>You create your own writing voice/style in two ways:</p>

                <h5>
                  (1) By practicing writing
                </h5>

                <p>
                  The only way you can critique and develop your own writing is by actually writing and read and critically appraise what you’ve written, sometimes months or years after writing it. By doing so, you will attune yourself to your existing style and be able to decide what you like and dislike about it. This will inform the styles which you subsequently are inspired by.
                </p>

                <p>
                  For instance, if you are concerned your writing waffles too much, you might take special notice of concise writing styles, and make effort to emulate them.
                </p>

                <h5>
                  (2) By reading and incorporating other writing styles
                </h5>

                <p>
                  The styles you incorporate will include writers you naturally write like, and writers you wish you wrote like. Somewhere in between you’ll find a happy medium. If you read a lot, you will also pick up lots of writing tricks and techniques from different authors – who, you won’t particularly wish to write like – but which you will minutely be inspired by in very select ways. You will also critically learn the styles you don’t want to emulate, and you should take note what those styles did which made you dislike them.
                </p>

                <hr></hr>

                <h2 id="post-15-3" className="blog-post-title">15.3: Be Quiet</h2>

                <div className="p-3 mb-3 rounded custom-light-box">
                  <p className="mb-0">One must be careful to distinguish between those who write beautiful things and those who write things beautifully</p>
                  <p></p><i>— Somerset Maugham</i><FootnoteRef text="Somerset Maugham, INSERT REF." />
                </div>

                <p>
                  The best voice/style is the least noticeable. Like symbolism, voice is not something you want shoved in your face while you’re reading – it’s something you appreciate in afterthought.
                </p>

                <p>Bickham says:<FootnoteRef text="Jack Bickham, The 38 Most Common Fiction Writing Mistakes (And How To Avoid Them)." /></p>

                <p className="code-left">
                  <code><i>“Your style and attitude in your stories should be like a clean pane of glass through which the reader sees the action. If </i>[your writing]<i> pose</i>[s] <i>and posture</i>[s]… [it’ll] <i>draw attention to you as a writer, rather than to what's happening.” </i></code></p>

                <hr />

                <p>Mittelmark and Newman agree, saying:<FootnoteRef text="Howard Mittelmark and Sandra Newman, How NOT to Write a Novel." /> words which draw attention to themselves draw attention away from the story you are telling and remind the reader that they are reading a story.</p>

                <p>Writing only works <i>"when both parties [reader and writer] agree beforehand on what words mean."</i></p>
                <p>They advise to choose only the word/s which are the best to express the idea.</p>

                <p>There's no point consciously striving for style, William Sloane says.<FootnoteRef text="William Sloane, The Craft of Writing." />  Your style should recreate your tone of voice. The paradoxical thing about style is it's like an accent; you shouldn't be aware of your own.</p>

                <hr />
                Don’t worry too much about actively modifying your writing style (and if you are consciously striving to write in a ‘voice’, then it isn’t your real voice). Focus more on writing in a natural, comfortable way, Also, realise that writing style may surface as much in your editing technique as your writing technique – which words you remove and how you rearrange and re-write your sentences.
                <hr />

                <h2 id="post-15-4" className="blog-post-title">15.4: Contrast</h2>

                <p>
                  If you’re interested in learning what your writing voice sounds/reads like, try these two activities: Get a book by an author whose voice you’re familiar with, choose a random chapter and attempt the write the subsequent chapter. If you already know what happens in the subsequent chapter, your chapter will probably mimic that, and the difference will be the pure writing styles of the author and yourself.
                </p>

                <p>If you haven’t yet read the subsequent chapter, this activity will still work, but it will also show you as the differences in structuring, plotting and pacing, between the author and yourself, which is also informative (works better if you haven’t read the subsequent chapter). </p>
              </div>
            </div>

            <hr />

            {/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

            <ThoughtForm />
            <ThoughtList />

            {/* ---------------------------------------------------------------------------------------------- */}

            <nav className="blog-pagination">
              <a className="btn btn-outline-primary" href="#">Back to Top</a>
            </nav>

          </div>

          <aside className="col-md-4 blog-sidebar">
            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">About</h4>
              <p className="mb-0-1">A writer's voice is an expression of their personality or individuality created through their writing style: their word choice, syntax, and tone.</p>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Index</h4>
              <ol className="list-unstyled mb-0">
                <li><a href="#post-15-1">15.1: What is Voice?</a></li>
                <li><a href="#post-15-2">15.2: How to Create Voice</a></li>
                <li><a href="#post-15-3">15.3: Be Quiet</a></li>
                <li><a href="#post-15-4">15.4: Contrast</a></li>
              </ol>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Also See</h4>
              <ol className="list-unstyled">
                <li><a href="/Description">11. Description</a></li>
                <li><a href="/WritersDevices">20. Writer's Devices</a></li>
                <li><a href="/Editing">22. Editing</a></li>
              </ol>
            </div>
          </aside>
        </div>
      </main>

    </div>
  );
}
