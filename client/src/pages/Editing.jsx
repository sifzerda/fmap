import '../App.css'
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

export default function Editing() {

  return (
    <div>

      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <h1 className="display-4">Editing</h1>

        <div id="wrapper" className="text-left">
          <p className="lead my-3">The first draft of anything is shit.</p>
          <i>— Ernest Hemingway</i>
          <p className="lead my-3">In writing, you must kill all your darlings.</p>
          <i>— William Faulkner</i>
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
              <h2 id="post-22-1" className="blog-post-title">22.1: General Deadweights</h2>
              <p className="blog-post-meta">January 1, 2014 by <a href="#">zerda</a></p>

              <div id="content">

                <p>Writing is the skill of putting words on the page; writing well is the skill of taking words off the page. This is a simple matter of knowing what kinds of words you take out. Here are some examples:</p>

                <p><strong>I. Adverbs:</strong> words which add to a verb, e.g. ‘Thoroughly’, ‘Laughingly’, ‘Harshly’, etc;</p>
                <ul>
                  <li><strong>Tip:</strong> Try to replace with word/s which imply your adverb, e.g.</li>
                  <ul>
                    <li>Replace ‘He dried the towel out thoroughly’ with ‘He wrung out the towel’</li>
                    <li>Replace ‘That’s not my dog– it’s a duck’ she said laughingly, with ‘That’s a duck,’ she said. "A duck!"</li>
                    <li>Replace ‘I’m not playing tennis with Casey – she’s horrible’ she said harshly, with ‘Casey and tennis? Useless!’  </li>
                  </ul>
                </ul>

                <p><strong>II. Adjectives:</strong> words which add to a noun, e.g. ‘tall’, ‘sinewy’, rhythmic’;</p>

                <ul>
                  <li>Select nouns which already imply your adjectives, e.g.
                    <ul>
                      <li>Instead of saying ‘Grey, towering, gothic building’ say ‘Castle.’</li></ul> </li>
                  <li>If using more than one to describe a thing, get rid of all except the strongest. </li>
                </ul>
<p>This is a tip from Sol Stein. The ‘strongest’ adjective is the one which most immediately gets across the gist of what you want to show. Which adjective, alone, puts the most striking image in your reader’s mind? Anything implied needs to go; i.e. trees are assumed to be ‘big,’ ‘graceful,’ etc. ‘Tiny tree,’ rotting tree,’ ‘red tree,’ and ‘ugly tree’, however, are evocative in their own right.</p>

                <p><strong>III. 'Had' as past tense:</strong> Sol Stein suggests removing all past tense ‘hads’.<a href="#f1"><sup>1</sup></a> Note there are three uses of ‘had’: </p>
                <ul>
                  <li><i>past tense</i>; means ‘did’ (He had turned on the oven) </li>
                  <li><i>mandatory</i>; interchangeable with ‘needed’ (I had to go to the dentist) and </li>
                  <li><i>possessive;</i> interchangeable with ‘owned’ (I had a basketball) </li>
                </ul>

                <p>It’s the first kind (past tense) you need to remove and make present tense, for instance ‘He had turned on the oven’ would become ‘He turned on the oven.’</p>

                <p><strong>IV. Verb-laden sentences which start with present tense verbs:</strong> these sound awkward and ungrammatical and cluttered with too many verbs. Try to split each verb into a separate sentence. E.g.</p>
                <ul>
                  <li>Change ‘Running to the house, he began screaming,’ to ‘He ran until the house came into view. Then he screamed.’</li>
                  <li>Change ‘Reaching for the phone, her hands shaking,’ to ‘She reached for the phone. Her hands were shaking.’</li>
                </ul>

                <p><strong>V. Speech Breaks:</strong> These are sounds people make during speech which give them pause – without actually pausing, e.g. ‘Uh,’ ‘Um,’ ‘Er,’ ‘Ah’,</p>
                <ul>
                  <li>Remove all of these. Even if you want them to make your character sound nervous or uncertain, instead describe their behaviour which achieves this effect.</li>
                </ul>

                <p><strong>VI. Filler Words:</strong> Like speech breaks, but are actual words. They are gratuitously inserted to join together sentences. E.g. ‘So’, ‘Yeah’, ‘Like’, ‘Okay, ‘Right,’ ‘You know.’</p>
                <ul>
                  <li>b.	Remove all of these. They communicate nothing. Read page 12 'Dodgem dialogue' for tips on how to correct this.</li>
                </ul>

                <p><strong>VII. Qualifying Terms:</strong> These are words which describe the extent of something, e.g. ‘Very’, ‘Actually,’ ‘Really’, ‘Somewhat’, ‘Mostly.’ Replace with a single, more appropriate word. Go for exaggeration rather than moderation:</p>
                <ul>
                  <li>Rather than saying ‘very tall’ say ‘towering’ or ‘titanic’ or ‘giant’ </li>
                  <li>Rather than saying ‘really very beautiful’ (two qualifiers – doubly bad) say ‘stunning’ or ‘ravishing’ </li>
                </ul>

                <p><strong>VIII. Echoing:</strong> When information is repeated, mostly in dialogue, but sometimes seen in narration as well, e.g.</p>
                <ul>
                  <li><u>Dialogue:</u></li>
                  <li> A: "Where does Joe go at night?"</li>
                  <li> B: "I don't know where Joe goes at night." </li>
                  <li> <u>Narration:</u></li>
                  <li> <i>He wondered where Joe might be, and realized he didn’t actually know where Joe might be.</i></li>
                </ul>

                <p><strong>IX. Formal Language:</strong> ‘Notwithstanding,’ ‘thereof,’ ‘Nonetheless,’ ‘wherewithal’, ‘therein’.</p>
                <p><strong>X. Poetic Language:</strong> Words and phrases used to ‘poeticise’ banal things, and which no one actually uses in real life. Swap with simpler, more standard language, e.g. </p>
                <ul>
                  <li>Instead of ‘All was silent,’ say ‘It was silent.’</li>
                  <li>Instead of ‘None was to be found,’ say ‘It never came.’</li>
                  <li>Instead of ‘As powerful as a thousand winds’ say ‘A powerful wind.’</li>
                </ul>

                <p><strong>XI. Bridges:</strong> Includes compound prepositions and conjunctions – these are sentences which transition from one idea to the next, e.g. ‘…and, for that matter,’ ‘More to the point…’ ‘In the nature of’ ‘For the most part.’ Either split into separate sentences, or replace:</p>
                <p>Robert Flesch lists these along with their replacements:<a href="#f2"><sup>2</sup></a></p><u>Robert Flesch, The Art of Plain Talk.</u>
                <ul>
                  <li>Along the lines of...................like;</li>
                  <li>As to.........................................about;</li>
                  <li>For the purpose of.................for</li>
                  <li>For the reason that...............since</li>
                  <li>From the point of view of.....for</li>
                  <li>Inasmuch as...........................since</li>
                  <li>In favour of..............................for</li>
                  <li>In order to................................to</li>
                  <li>In accordance with................by</li>
                  <li>In the case of...........................if</li>
                  <li>In the event that.....................if</li>
                  <li>In the nature of.......................like</li>
                  <li>In terms of................................in</li>
                  <li>On the basis of........................by</li>
                  <li>Prior to......................................before</li>
                  <li>With a view to..........................to</li>
                  <li>With a reference to................about</li>
                  <li>With regard to.........................about</li>
                  <li>With the result that................so that</li>
                </ul>

                <p><strong>XII. Connectives:</strong> words that tie clauses and sentences together. Robert Flesch also lists these and their replacements:</p>
                <ul>
                  <li>Likewise.......................................and;</li>
                  <li>In addition...................................besides, also;</li>
                  <li>Moreover......................................now, next</li>
                  <li>Furthermore...............................then</li>
                  <li>Nevertheless..............................but</li>
                  <li>Rather..........................................however</li>
                  <li>That is to say...............................in other words</li>
                  <li>More specifically.........................for example</li>
                  <li>Indeed...........................................in fact</li>
                  <li>To be sure.....................................of course</li>
                  <li>For this reason.............................so</li>
                  <li>Accordingly, consequently........and so</li>
                  <li>Hence, thus...................................therefore</li>
                </ul>

                <h6>Exceptions to deadweights</h6>
                <p>The general rule is these words should go if possible; if they don’t take away something essential from the writing – the strict definition of essential: without, the text wouldn’t make sense, not your personal definition of essential: makes the writing sound nicer. </p>
                <p>This includes dialogue. You might argue ‘that’s how the character would speak in real life!’ but dialogue is not real life speech. It’s made up and abridged to maintain the reader’s interest. It’s a representation of speech, not a transcription of it. </p>
                <p>The exception: Sometimes you want to convey meaning not merely by the words, but their form and structure (for instance, see: ‘13.3.4 Deliberately awkward sentences,’ and ‘10.1.1 When to not abridge’). </p>
                <p>For example, you’ve got this echoing dialogue:</p>

                <p className='indent-text-1'>A: “Where does Joe go at night?”</p>
                <p className='indent-text-1'>B: “I don’t know where Joe goes at night.”</p>
                <p>If in this scene you want B’s echoing to show that the character is stressed out and evasive, maybe lying, then removing the echo would negate this effect, e.g.</p>
                <p className='indent-text-1'>A: “Where does Joe go at night?”</p>
                <p className='indent-text-1'>B: “I don’t know.”</p>
                <p>Therefore, the echo would not be a ‘deadweight’, because it’s carrying some essential meaning; it’s doing ‘work.’ So it’s necessary to keep it. Keep in mind using ungrammatical or ‘odd’ dialogue is an effective way to infer meaning.</p>

                <h2 id="post-22-2" className="blog-post-title">22.2: Pronouns</h2>
                <p>Amateur writers often start sentences with pronouns (e.g. the main character), and the description that follows orbit around the pronouns, i.e. character-focused writing. So it sounds like every sentence starts ‘I.’ This is partly due to the interiority of modern writing (see 13.1.6 Starve the Ego, Feed the Soul). It gets grating fast, and you risk your character boring the reader (really bad, because they’re stuck with the character the entire story). By removing pronouns you push yourself to describe more interesting things; your setting, events, other characters, etc. Your story stops sounding like a page from your main character’s diary and starts being about the actual experiences and events happening. This facilitates your reader to pretend they are the main character, and wonder ‘what if this was me; what would I do in this situation?’ Your reader will thank you for that experience. Taking the focus off your protagonist also makes them more mysterious and interesting, too.</p>
                <p>See these examples and consider which you prefer:</p>
                <p>(1) Personal Pronouns: </p>
                <p className='indent-text-1'><span className='highlight'>I </span> opened the front door and walked straight into a fog of black. <span className='highlight'> I </span> felt up one wall for a light switch, then the other wall, but there was none. <span className='highlight'>I </span> froze. <span className='highlight'>I </span> could hear a dragging sound coming from another room, but as soon as <span className='highlight'>I </span> caught it, it stopped. <span className='highlight'>I </span> remembered the funny thing my friend, Damien, had said about this house. <span className='highlight'>I </span> could hear the scraping sound again, but now it sounded like it was coming from a different room. <span className='highlight'>I </span> didn't want to take another step in the dark, but the front door had no inside knob. <span className='highlight'>I </span> couldn't open it.</p>

                <p>(1) Removal of Pronouns: </p>
                <p className='indent-text-1'>The front door had a hole instead of a knob., but opened with a nudge. Dim inside. Then the iron weight door slammed shut, and it was a fog of black. One step forward scuffed carpet, the next scraped concrete. Further steps were muffled again by carpet. The light switch wasn't on the left wall, or the right. There was a dragging sound between footsteps. Then silence. It was funny, what Damien said about this house. The dragging sound came again, but from a different room. It took a moment to find the door again. There was no knob on the inside, either. The door felt like a rock wall. It only opened from the outside.</p>

                <p>In (2) because I removed pronouns, description moved off the protagonist, forcing me to add description to the setting, to fill up the paragraph. This reads better as reader is more interested in the place, in this scene, than the character.</p>

                <h2 id="post-22-3" className="blog-post-title">22.3: Right-Branching Sentences</h2>
                <p>Roy Peter Clark says <i>“The next time you struggle with a sentence, see if you can rewrite it by placing subject and verb at the beginning,”</i><a href="#f3"><sup>3</sup></a>  and letting subordinate elements ‘branch to the right.’ </p>
                <u>Writing Tools: 50 Essential Strategies for Every Writer.</u>

                <p>You normally see this kind of writing in journalism, e.g.</p>
                <p className='indent-text-1'>A reporter writes a lead sentence with subject and verb at the beginning, followed by other subordinate elements, creating what scholars call a "right-branching sentence."</p>
                <p className='indent-text-1'>Rebels seized control of Cap Haitien, Haiti's second largest city, on Sunday, meeting little resistance as hundreds of residents cheered, burned the police station, plundered food from port warehouses and looted the airport, which was quickly closed.</p>
                <p className='indent-text-1'>Police officers and armed supporters of President Jean-Bertrand Aristide fled.</p>

                <p>An advantage of this sentence structure is that it keeps you anchored on the subject, so you don’t go off topic midway, e.g. in the first sentence, the subject is the ‘reporter,’ the second, the ‘rebels [seizing] control,’ the third, the ‘police officers and armed supporters.’ Everything in the paragraph that follows should elaborate the subject.</p>
                <p>Don’t separate subject and verb, or you risk confusing the reader, e.g.</p>
                <p className='indent-text-1'><span className='highlight'>A bill </span> that would exclude tax income from the assessed value of new homes from the state education funding formula <span className='highlight'>could mean </span> a loss of revenue for Chesapeake County schools.</p>
                <p>Here, the subject ‘bill’ is too separate from the verb ‘could mean.’</p>

                <h2 id="post-22-4" className="blog-post-title">22.4: Start and End Strong</h2>

                <p>This comprises two bits of advice; (1) Use the strongest combinations of verbs/adverbs. For instance replace ‘he went quickly’ with ‘he dashed.’</p>
                <p>(2) Place strong ‘headline’ words at the start of sentences, and at the end. This makes sentences sound full and complete.  For this reason, you hear the advice not to end on a preposition, e.g. ‘I like school, well, kind of.’</p>
                <p>Ask yourself, what information is the most important in this sentence?</p>

                <h2 id="post-22-5" className="blog-post-title">22.5: Guarding Word Territory</h2>
                <p>Roy Clark coined the useful concept ‘word territory’. It basically means giving important words their own space. Don’t repeat key words unless the emphasis is necessary. For instance, <i>“Long sentences create a flow that carries the reader down a stream of understanding, creating an effect that Don Fry calls "steady advance."</i><a href="#f4"><sup>4</sup></a></p>

{/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

<ThoughtForm />

<ThoughtList />

                <div className="footnotes">
                  <h4>Footnotes</h4>
                  <ol>
                    <li id="f1">Sol Stein, <i>On Writing.</i></li>
                    <li id="f2">Robert Flesch, <i>The Art of Plain Talk.</i></li>
                    <li id="f3">Roy Peter Clark, <i>Writing Tools: 50 Essential Strategies for Every Writer.</i></li>
                    <li id="f4">Roy Peter Clark, <i>Writing Tools: 50 Essential Strategies for Every Writer.</i></li>
                  </ol>
                </div>

{/* ---------------------------------------------------------------------------------------------- */}


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
                <li><a href="#post-21-1">21.1: General Deadweights</a></li>
                <li><a href="#post-21-2">22.2: Pronouns</a></li>
                <li><a href="#post-21-3">22.3: Right-Branching Sentences</a></li>
                <li><a href="#post-21-4">22.4: Start and End Strong</a></li>
                <li><a href="#post-21-5">22.5: Guarding Word Territory</a></li>
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
