import '../App.css'
//import writingDBanner from '../assets/writingdbanner.jpg'
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

export default function WritingDevices() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-3 text-white text-center rounded bg-dark">
        <h1 className="display-4">Writing Devices</h1>

        <div id="wrapper" className="text-left">
          <p className="lead my-3">Style is […] a matter of knowing when one has said enough.</p>
          <i>— Hallie & Whit Burnett, Fiction Writer&apos;s Handbook</i>
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
        <img className="card-img-top w-100" src={writingDBanner} alt="Thumbnail" />
      </div>
*/}

      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">
              <h2 id="post-20-1" className="blog-post-title">20.1: GENERAL</h2>
             

              <div id="content">

                <p>general info here,</p>

                <h2 id="post-20-2" className="blog-post-title">20.2: Offer/Promise</h2>

                <p>This refers to story details making an implied promise to the audience that a particular idea will later unfold in a particular way. </p>
                <div className="p-3 mb-3 bg-light rounded">
                  <p className="mb-0">“Make frequent promises that excitement or insight will soon be revealed to the reader. Sometimes an entire story can be made to turn on a single promise of things to come. In Treasure Island we are kept reading both by the tantalizing premise of buried treasure and the fact that somebody's going to find it. Will it be the pirates or Jim Hawkins's band?”<a href="#f1"><sup>1</sup></a></p>
                  <p></p><i>— David Carroll</i>
                </div>

                <u>A Manual of Writer's Tricks, David Carroll.</u>

                <p>Example, in context, Rick Blaine's (Humphrey Bogart) "Of all the gin joints in all the towns in all the world, she walks into mine," is a promise that Ilsa and himself will interact later, and buried feelings will resurface.</p>

                <p>Subsequently denying the development of that idea constitutes 'blocking' - see below. </p>
                <p>Example: In Pet Sematary, by establishing that the ‘Sematary’ resurrects creatures, King makes an offer that a character will die and be resurrected. If the main character decided not to resurrect someone at the last minute, it would result in the offer being ‘blocked’ (below).</p>
                <p>When the original offer/expectation is not met, but substituted with something else, this is called a ‘counter offer’. If successful, the substitute will be something even better than the original offer. If unsuccessful, it will be something less interesting - however, an unsuccessful counter offer doesn't constitute a block. Blocks can have the effect of pulling the audience out of the story altogether, 'ripping' the story away from them, whereas an unsuccessful counter offer will merely make the audience less interested/invested.</p>

                <h2 id="post-20-3" className="blog-post-title">20.3: Blocking</h2>
                <p>This refers to denying the development of an idea. This doesn't mean concluding an idea by going outside the audience's expectations, it means actively choking the idea and preventing any further development at all.</p>
                <p>Example: Really overused blocking is where an event was just a dream, or worse; the whole story was a dream. In effect, everything shown contained in the dream can be entirely severed from the plot (if you were recounting the plot to someone, you wouldn’t mention the dream as if it was part of the plot). Therefore it’s like it didn’t even happen at all (literally, it did not actually happen).</p>
                <h5>20.2.1 Examples of Blocked Promises: </h5>
                <p><strong>The 'Warning'</strong></p>
                <p className='indent-text-1'>X: “Where are you heading?”</p>
                <p className='indent-text-1'>Y: “I’m staying in Slains Hotel tonight.”</p>
                <p className='indent-text-1'>X: “Don’t you know it’s haunted? Don’t you stay in that place, I’m telling you, bad things will happen.” </p>
                <p>Corrected version #1:</p>
                <p className='indent-text-1'>X: “Where are you heading?”</p>
                <p className='indent-text-1'>Y: “I’m going camping on Fog Mountain.”</p>
                <p className='indent-text-1'>X: “Yeah? I know the place. Weren’t you up there last year?”</p>
                <p className='indent-text-1'>Y: “No, never been.”</p>
                <p className='indent-text-1'>X: “You sure? I could swear I remember you coming up. Or someone who looked just like you. Said you’d never come back.”</p>

                <p>Corrected version #2:</p>
                <p className='indent-text-1'>X: “Where are you heading?”</p>
                <p className='indent-text-1'>Y: “I’m going diving in Deadwood Lake.”</p>
                <p className='indent-text-1'>X: “Sounds like fun. I shuttle between Elmville and Mapledale regularly. Always pass the lake. But I’ve never stopped there. Not once. Never seen anyone swimming either. It’s interesting. You enjoy yourself.”</p>

                <p><strong>'Fortune Telling'</strong></p>
                <p className='indent-text-1'>X: Tommy slid a Dunhill out of the packet, lit up and took a drag, all the while not knowing that he had less than six hours to live.</p><u>Carrie</u>

                <p><strong>'Cryptic Gobbledygook'</strong></p>
                <p className='indent-text-1'>“The Mother,” Marie said. </p>
                <p className='indent-text-1'>“What?”  </p>
                <p className='indent-text-1'>“The statue you’re staring at. It’s of the Mother.”   </p>
                <p className='indent-text-1'>“Who’s that?”   </p>
                <p className='indent-text-1'>“A very old goddess.”   </p>
                <p className='indent-text-1'>“Oh. What about this?” I pointed my knife at the road.   </p>
                <p className='indent-text-1'>“That takes you to a city.”   </p>
                <p className='indent-text-1'>“A city?”   </p>
                <p className='indent-text-1'>“A city by the sea,” she said. “I don’t think you’d care to visit it.”   </p>
                <p className='indent-text-1'>“By the sea?”   </p>
                <p className='indent-text-1'>“It’s different here.”   </p>
                <p className='indent-text-1'>“What does that mean?”   </p>
                <p className='indent-text-1'>“You’ll see,” she said, and crossed the road.  </p>

                <h2 id="post-20-4" className="blog-post-title">20.4: Reincorporation</h2>
                <p>Revisiting an idea established earlier on in a story. For instance, Chekhov said that if a gun is shown in Act one, it must go off by Act three.</p>

                <h2 id="post-20-5" className="blog-post-title">20.5: Raising the Stakes</h2>
                <p>As the name suggests, making failure potentially risky (or more risky) for a protagonist.</p>

                <h2 id="post-20-6" className="blog-post-title">20.6: Setting the Story</h2>
<h5>20.5.1 Setting the Story: The Microcosm</h5>
<p>One methodical way of starting a story (as opposed to starting anywhere you like) is to dedicate the first chapter to some miniature episode in the main characters lives, which acts as a microcosm of the main story/themes. Clever intros can even subtly spoil the whole story, if you read into them correctly on a second read. This first chapter should be somewhat dislocated (but not entirely remote) from the plot (thus, an ‘episode’). It should promptly introduce all the main characters, and table the main issue/conflicts, without resolution. A good ‘microcosm’ intro may be provocative, quirky or interesting or controversial, and grab the reader. They’re also economic because they quickly sieve out the disinterested readers: if you don’t like the intro, you won’t like the rest.</p>
<p><u>Example: </u> The Invitation (2015): although a film, there is a good example. The main characters accidently hit a fox with the car, and have to euthanize it. This doesn’t directly relate to the plot, but does reduce the entire conflict in the film, being: when is it acceptable – if at all – to assist a miserable or suffering person to suicide?</p>

<h5>20.5.2 Setting the Story: The Question</h5>
<p>Another – similar – way to start a story is to pose a question or raise an issue which isn’t properly realised or answered by the reader until they have all the details of the story. The question or issue can once again be put to the reader at the very end of the story, with new significance. The advantage of this method is that it deals with both start and end in one swoop.</p>
<p><u>Example: The Events At Poroth Farm </u> at the beginning, the main character seems to be afraid of a young kid vigilantly sitting on the steps of the courthouse across the road from his motel. Obviously the question is – why? You need to read the subsequent story, where the main character escapes from a monster that can take over people’s bodies to realise, by the end, that the monster may have caught up with the protagonist; it may now be the kid, waiting for the main character to leave his house.</p>

                <h2 id="post-20-7" className="blog-post-title">20.7: Self-Awareness</h2>
<p>Characters referencing writing devices in-story, e.g. 'that's so meta'. On a sliding scale of '1' (least self-aware) to '3' (most self-aware), it includes: </p>
<ol>
  <li>Parody: Playfully borrowing and making fun of ideas from other works;</li>
  <li>Textuality: In-story references to other texts, implying the story is another such text, even if the characters aren't aware of it (ft: neverending story See Michael Ende's 'The Neverending Story' for an example of this done very well)</li>
<li>Metatextuality: or 'meta': Characters interpret plot events through a lens of 'genre-savviness', even if they aren't aware they are in such a genre;</li>
<li>'Breaking the fourth wall': This is the most extreme version, where characters are aware they are in a story, and make direct reference to the fact, or the reader themselves. </li>
</ol>

<p>Good writing uses writing devices to construct an illusion of reality. Drawing attention to these devices threatens that illusion. </p>
<p>References to real-world media, brands, real-life people, etc, is not self-referential. If your protagonist owns a Harry Potter book on their bedroom shelf, it's a stab at verismilitude -- a legitimate writing device. If anything, this lends to the realism of your character.</p>
<p>On the other hand, cultural references: brand names, references to other media, celebrities, etc, can date your writing as well as betray socioeconomic class.</p>
<p>When it's self-referential, it detracts from realism; it reminds the author they're reading a story. It's like the protagonist is speaking directly to the reader, saying, "I know I'm only a character in a story." Worse, it can read like the <i>author</i> is speaking directly to the reader, saying, "I know it's only a story."</p>
<p>Self-referentiality is one of those 'avant-gardist' styles. Remember the rule for using extra-conventional writing techniques? (hint, see: REF). You should not use them unless: (a) there is no other way you can convey your idea; (b) you are a wizard at the conventional stuff (and can therefore 'graduate' to higher forms).</p>

                <h2 id="post-20-8" className="blog-post-title">20.8: Irony</h2>
<h5>20.6.1 What Is Irony?</h5>
<p>The common understanding of irony is reality contradicting expectation; one thing is predicted, the opposite happens, and there is an odd or amusing lack of sync in the sequence of events. For a brief moment, the universal narrative is incoherent.</p>
<p>On a deeper level, irony in reality communicates cosmic blindness. A rational mind can comprehend what ‘should’ have happened, which the larger universe was blind to. </p>
<p>Unlike the cosmic order, you – the author – are not blind, and unlike the universe, your story is entirely governed by a single intention. Yet, stories have irony because the art is modelled off reality. But irony in reality doesn’t have a ‘point’; it’s the result of blind, coincidental accident, an unusual but statistical inevitability according to the laws of probability. Conversely, narrative irony exists only to serve a particular point; it’s calculated for a specific end. </p>
<p>...You might say this is ironic?</p>

<h5>20.6.2 Difference between Irony and Coincidence</h5>
<p>This is an understandable confusion because the two concepts are so alike. Generally, Irony is characterised by the contrast of opposites, whereas coincidence is characterised by the comparison of similarity or relatedness. Something may fall short of being ironic, but may be a coincidence. </p>
<p>Compare:</p>
<p>If a prisoner on death row is pardoned and goes free on the day he was going to be executed, it’s merely a coincidence that the release date and execution date are <strong>the same</strong>. Contrast if the pardon comes one minute after the prisoner is executed, it’s ironic that the prisoner was supposed to be released, but <strong>the opposite</strong> happened; he was executed.</p>
<p>If someone with a fear of flying takes a plane ride and the plane crashes, it is an (unfortunate) coincidence that the passenger’s fear and the actual event, are <strong>the same</strong>. Contrast if the plane ride was advised by the person’s psychologist for the purpose of curing the phobia through fear exposure. Then it’s ironic that the event was supposed to reinforce that air travel is relatively safe, but <strong>the opposite</strong> happened; there was a plane crash. </p>

<p><i><strong>When to use coincidence:</strong></i></p>
<p>As stated above, story creates meaning out of a series of events. Coincidence is the opposite; events or circumstances thrown together by pure chance. If your story is pure coincidence, there is no meaning to be derived. However, like irony, coincidence happens in real, so the artform must incorporate it sometimes for a degree of realism.</p>
<p>If you are going to rely on coincidence to set up events, use it early, and build meaning out of it later. Don’t use coincidences past the halfway mark of your story, and above all, don’t end on a coincidence (this is called a ‘Deus Ex Machina’).  The meaning in a story should expand and develop throughout the story, until you reach the end, where the meaning of everything becomes clear. If there is a big coincidence at the end, it detracts from the meaningfulness.</p>
<p>As the story progresses, events should rely less and less on chance, and increasingly on character’s actions and intentions.</p>

<h5>20.6.3 Purposes of Irony</h5>
<p>Irony may serve to:</p>
<ul>
  <li>Provide humour;</li>
  <li>Teach a character a lesson;</li>
  <li>Provide the story universe some sense of moral or karmic equilibrium;</li>
  <li>Challenge the protagonist’s sense of agency and autonomy;</li>
  <li>Create a sense of mysterious serendipity;</li>
  <li>Romanticise a meeting;</li>
  <li>Add poignant sense of mindlessness to accident or tragedy;</li>
  <li>Suggest the intention or interference of a greater will (a God, supernatural being, or even a mortal character more powerful than the protagonist);</li>  
  <li>Suggest the protagonist is unalike or out of sync with another (character, or group)</li>
  <li>Suggest the protagonist is curiously alike or in sync with another (character or group)</li>
  <li>To suggest that something is more complicated than it outwardly looks;</li>
</ul>

<h5>20.6.4 	Kinds of Irony</h5>
<p>There are multiple kinds of irony, namely:</p>
<p><i><strong>(1) Verbal Irony:</strong></i></p>
<p>This is irony that comes out in dialogue; a speaker’s intention is the opposite of what they are saying. For example, when it’s raining and someone says “Nice weather.” </p>
<p>Arguably, it’s also ‘verbal’ irony when a waiter drops and breaks a plate, and the chef claps in applause (sarcastically).</p>
<p>Here is a written example of verbal irony: <a href="#f2"><sup>2</sup></a></p>
<p className='indent-text-1'>[…] whoever could find out a fair, cheap, and easy method of making [destitute] children sound, useful members of the commonwealth, would deserve so well of the public as to have his statue set up for a preserver of the nation.</p>
<p className='indent-text-1'>I have been assured by a very knowing American of my acquaintance in London, that a young healthy child well nursed is at a year old a most delicious, nourishing, and wholesome food, whether stewed, roasted, baked, or boiled; and I make no doubt that it will equally serve in a fricassee or a ragout.</p>

<p><i><strong> (2) Situational Irony</strong></i></p>
<p>This is where the result of a situation is the opposite of what you’d expect. For example, in O. Henry’s <i>The Gift of the Magi</i>, a husband sells his watch to buy his wife a hair comb, while his wife sells her hair to buy her husband a watch chain.</p>
<p>In the film <i>Ruthless People</i>, a woman is kidnapped but gives her basement prison a makeover; installing a spa, and while confined there, exercises and eats healthy, and loses weight. As a result, she is grateful to her kidnappers; so grateful in fact that when they tell her they’re going to let her go because her husband won’t pay the ransom, she promises to get it for them.</p>

<p><i><strong> (3) Dramatic Irony</strong></i></p>
<p>This is where the audience or reader knows a critical piece of information – unknown by a character – which dramatically alters their perception of a situation. This is basically situational irony, except the reader has knowledge which allows them to perceive the irony of the situation before it actually happens.</p>
<p>For example, in Romeo and Juliet, we know Juliet’s intention to fake her death, where Romeo – failing to get the message – does not. This creates tragic irony when Romeo mistakes her for actually being dead, and kills himself.</p>
<p>As Robert McKee says, like with symbolism, “to point at irony destroys it.” It cannot be obvious.  </p>

{/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

<ThoughtForm />

<ThoughtList />

{/* ------------------------------------------------- footnotes --------------------------------------------- */}

<div className="footnotes">
                  <h4>Footnotes</h4>
                  <ol>
                    <li id="f1">David Carroll, <i>A Manual of Writer's Tricks.</i></li>
                    <li id="f2">Johnathan Swift, <i>A Modest Proposal.</i></li>      
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
                <li><a href="#post-20-1">20.1: General info</a></li>
                <li><a href="#post-20-2">20.2: Offer/Promise</a></li>
                <li><a href="#post-20-3">20.3: Blocking</a></li>
                <li><a href="#post-20-4">20.4: Reincorporation</a></li>
                <li><a href="#post-20-5">20.5: Raising the Stakes</a></li>
                <li><a href="#post-20-6">20.6: Setting the Story</a></li>
                <li><a href="#post-20-7">20.7: Self-Awareness</a></li>
                <li><a href="#post-20-8">20.8: Irony</a></li>
              </ol>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Also See</h4>
              <ol className="list-unstyled">
                <li><a href="/Conflict">5. Conflict</a></li>
                <li><a href="/Description">11. Description</a></li>
                <li><a href="/WritersBlock">21. Writer's Block</a></li>
              </ol>
            </div>
          </aside>
        </div>
      </main>

    </div>
  );
}
