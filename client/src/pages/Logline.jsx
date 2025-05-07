import '../App.css'
//import logBanner from '../assets/logbanner.jpg'
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

export default function Logline() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <h1 className="display-4">Logline</h1>

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
        <img className="card-img-top w-100" src={logBanner} alt="Thumbnail" />
      </div>
*/}

      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">
              <h2 id="post-24-1" className="blog-post-title">24.1 What Is A Logline?</h2>
            
              <div id="content">

                <p>In Dante’s Inferno, the punishment of writing a logline sits between the 5th-6th level of Hell. You do it over and over until you get it right (you never do). If it sounds scary, don’t worry, you have to murder about 10 people to be punished with it in the afterlife. </p>
                <p>A logline is your story in one sentence. In screenwriting they sometimes call this an ‘elevator pitch,’ the idea being that your pitch should not exceed the duration of a standard elevator ride. A publisher may not even be that generous.</p>
                <p>An obvious example: the logline for ‘Pride and Prejudice and Zombies’ would be ‘Pride and Prejudice, with Zombies.’</p>
                <p>A less obvious example: for ‘Harry Potter and the Philosopher’s Stone’ – ‘A young boy learns he is a wizard on his tenth birthday, and goes to a wizarding boarding school to learn magic.’</p>
                <p>There is no ‘perfect’ logline, and different authors will phrase loglines slightly differently, but all loglines (at least, for the same story) will converge on the same ideas.</p>

                <h2 id="post-24-2" className="blog-post-title">24.2 The Purpose of a Logline</h2>
                <p>Some publishers demand them. Even if the publisher doesn’t ask for it, it’s worth writing one anyway, because you can use it for marketing your story; even if you’re published your publisher may or may not require you to do marketing activities, like book signings, interviews, etc. Having a rehearsed line is better than making something up on the spot, or rambling, or accidentally spoiling your story to a potential reader. </p>
                <p>Even if no one ever sees your logline, it’s still useful for personal, story-planning purposes. It tells you what your story is supposed to do, and gives you a simple direction to follow. When you get lost or your story gets too complicated, you can look at your logline and remind yourself what you’re writing.</p>
                <p>A bad logline may be a warning bell that your story sucks. When all it takes is writing one single sentence, wouldn’t you rather save time doing that litmus test, than discovering it after committing 150,000 long words?</p>

                <h2 id="post-24-3" className="blog-post-title">24.3 Features of a Good Logline</h2>
                <p>Blake Snyder lists features of good loglines, including:<a href="#f1"><sup>1</sup></a></p>

                <h5>24.3.1 	Irony</h5>
                <p>A good logline uses irony to grab the reader’s interest – irony, not merely coincidence. I defined irony above; remember the difference between irony (opposite) and coincidence (similarity).</p>
                <p>Using a logline for Harry Potter and the Philosopher’s Stone as an example:</p>

                <p className='indent-text-1'><u>Coincidental Logline:</u> A young boy who lives with his magical relatives, discovers he is also a wizard. </p>
                <p className='indent-text-1'><u>Ironic Logline:</u> A young boy who lives with his magical relatives, discovers he is also a wizard. </p>

                <p>It’s easy to see which logline is makes for a more interesting story.</p>

                <p>Here are some more examples of ironic loglines:</p>
                <p className='indent-text-1'>A cop comes to L.A. to visit his estranged wife and her office building is taken over by terrorists (Die Hard). </p>
                <p className='indent-text-1'>A businessman falls in love with a hooker he hires to be his date for the weekend (Pretty Woman). </p>

                <h5>24.3.2 	Entire Story</h5>
                <p>A good logline will comprise a compelling mental picture. It will ignite the promise of your whole story, i.e. you know where it’s going to go. You may not know down to precise detail, but you’ll get the gist of the overall structure; the protagonist, their goal, their obstacle, and the possible outcome/s.</p>

                <h5>24.3.2 	Killer Title</h5>
                <p>I dealt with this already, but a good logline is completed with a good title. If pressed for time, the two bits of information a person will want about your story is the logline, and the title. A publisher might not care so much about the title, but the general public do.</p>
                <p>A good title says what it is; like the logline, what you read is what you get. </p>

                <h5>24.3.3 	Logline Template</h5>
                <p>Blake Snyder  has a ready template to construct a logline around a straightforward ‘A Story’:</p>
                <p className='indent-text-1'>[On the verge] of a [Stasis = Death moment], a flawed protagonist [Breaks into Two]; but when the [Midpoint] happens, he/she must learn the [Theme Stated], before [All Is Lost]. </p>

                <p><u>"On the verge of" </u> = where the protagonist is when we start the story, before the plot veers them in a different direction</p>
                <p><u>"Stasis = Death"  </u> = the moment the hero realises their life is deficient, an emotional starting point implying needed change. This also explains why the protagonist needs to be 'flawed'</p>
                <p><u>"Breaks into Two"   </u> = what sets this story into motion</p>
                <p><u>"Midpoint"   </u> = the 'no-turning-back' point of the story</p>
                <p><u>"All is Lost"   </u> = the moment the protagonist is worse off than when the story started</p>
                <p><u>"Theme Stated"   </u> = what the story is about</p>

                <p>He provides some example loglines for famous films:</p>
                <p className='indent-text-1'>On the verge of another "suit and tie" assignment, a tomboy FBI agent goes undercover as a contestant in the American Miss Pageant; but when the pageant receives a new threat, she must learn to be a woman and tough before she's thrown off the case and out of the bureau. (Miss Congeniality) </p>
                <p className='indent-text-1'>On the verge of returning to Earth after another routine mission, a rules-obssessed warrant officer lets an unknown alien species onto the ship; but when the creature kills one member of the crew and begins to grow in power, she must do what is right rather than what she's been told or else all on board will meet the same deadly fate. (Alien) </p>

                <p>You can also add some more elements to this ‘B Story’ logline template: </p>
                <p className='indent-text-1'>i.e. [On the verge] of a [Stasis = Death] moment, a flawed protagonist has a [Catalyst] and [Breaks into Two] with the [B Story]; but when the [Midpoint] happens, he/she must learn the [Theme Stated], before [All Is Lost], to defeat (or stop) the [flawed antagonist] (from getting away with his/her plan). </p>

                <p><u>"the B Story"   </u> = the love interest, mentor, or group that helps the hero learn the lesson.</p>
                <p><u>"Catalyst"   </u> = the event that sets the story into motion.</p>
                <p><u>"the flawed Antagonist"   </u> = the hero's nemesis or obstacle, and subject to his own flaw.</p>

                <p className='indent-text-1'>On the verge of a divorce, a bullheaded street-smart cop is trapped in his wife's office building by terrorists and teams up with a 'desk cop' patrolman to thwart them; but when he taunts the terrorists, and risks exposing his hostage wife's identity, he must learn to adapt to change to outsmart the leader and stop what are really thieves from getting away with a billion-dollar heist. (Die Hard) </p>
                <p className='indent-text-1'>On the verge of losing the girl he loves, a super-powered young man's abilities start to wane as a demented criminal he helped create begins to rain havoc on the city; but when he gives up his crime-fighting ways, he must learn what it means to make a promise, before more innocents die, to save his city from the criminal's super weapon. (Spider-Man 2) </p>

                <u>Save The Cat! Strikes Back: More Trouble For Screenwriters To Get Into...And Out Of, Blake Snyder.</u>

                <p>If you start with a logline you might want to reverse-engineer your story by structuring a plot around it, along with or in lieu of an E Chain or 3-turn structure. This means designing a couple of scenes to illustrate each element:</p>

                <ol>
                  <li>On the verge of...
                    <ol><li>Scene 1;</li>
                        <li>Scene 2;</li>
                    </ol>
                  </li>

                  <li>Stasis = Death..
                    <ol><li>Scene 1;</li>
                        <li>Scene 2;</li>
                    </ol>
                  </li>

                  <li>Catalyst...
                    <ol><li>Scene 1;</li>
                        <li>Scene 2;</li>
                    </ol>
                  </li>

                  <li>Breaks into Two...
                    <ol><li>Scene 1;</li>
                        <li>Scene 2;</li>
                    </ol>
                  </li>

                  <li>B Story...
                    <ol><li>Scene 1;</li>
                        <li>Scene 2;</li>
                    </ol>
                  </li>

                  <li>Midpoint...
                    <ol><li>Scene 1;</li>
                        <li>Scene 2;</li>
                    </ol>
                  </li>

                  <li>Theme Stated…
                    <ol><li>Scene 1;</li>
                        <li>Scene 2;</li>
                    </ol>
                  </li>

                  <li>All is Lost…
                    <ol><li>Scene 1;</li>
                        <li>Scene 2;</li>
                    </ol>
                  </li>

                  <li>Flawed Antagonist…
                    <ol><li>Scene 1;</li>
                        <li>Scene 2;</li>
                    </ol>
                  </li>
                </ol>

<p>This is only an example. In reality, you may need to rearrange elements and alter how many scenes they generate. But it’s a starting point to experiment with. The advantage of starting with structure is you aim to have a full outlined story before you start writing it. You troubleshoot plot issues long before sinking time into writing. This is the opposite approach of most fiction dabblers, and in my opinion, only lets them down; wasting time labouring under the sunk cost fallacy trying to fix a broken plot only because they’ve come so far with it.</p>
<p>Once you’ve got your scenes, you can start giving them beats. Snyder says you can structure scenes in the above way: giving each scene a ‘catalyst’ and ‘midpoint’ and ‘all is lost’ etc, in bitesize forms. Maybe that’s too pedantic at this stage, but it’s possible. Every scene starts with a hero, an expectation, an obstacle, a change, a possible reward or goal and a possible ‘death.’ And if your scenes don’t have these beats, then where’s the momentum and interest?</p>

<h2 id="post-24-4" className="blog-post-title">24.4 Loglines Need Causation</h2>
<p>In this age of loglines and elevator pitches we're pressured to think of our stories as single sentences which encapulate the entire plot. You can make your story idea so simple that it obliterates causation, which doesn't help in the planning stages, where you're trying to link necessary plot events together. </p>
 
<p>Compare these summaries of 'The Virgin Suicides' by Jeffrey Eugenides: </p>
 
 <p><u>Logline #1</u></p>
<p>Some girls inexplicably commit suicide</p>

 <p><u>Logline #2</u></p>
<ol>
  <li>A girl inexplicably commits suicide; </li>
  <li>Her parents and the community fail to respond;</li>
  <li>The girl's sisters commit suicide.</li>
</ol>

<p>Both summaries work to simplify the plot -- neither is incorrect -- but if the story hadn't yet been written and you were at the front-end of story planning, which summary would help you more? Probably summary #2 because it implies causation.</p>

{/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

<ThoughtForm />

<ThoughtList />

{/* ------------------------------------------------- footnotes --------------------------------------------- */}

<div className="footnotes">
                  <h4>Footnotes</h4>
                  <ol>
                    <li id="f1">Blake Snyder, <i>Save The Cat! Strikes Back: More Trouble For Screenwriters To Get Into...And Out Of.</i></li>
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
                <li><a href="#post-24-1">24.1 What Is A Logline?</a></li>
                <li><a href="#post-24-2">24.2 Purpose of a Logline</a></li>
                <li><a href="#post-24-3">24.3 Features of a Good Logline</a></li>
                <li><a href="#post-24-4">24.4 Loglines Need Causation</a></li>
              </ol>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Also See</h4>
              <ol className="list-unstyled">
                <li><a href="/Story">1. Story</a></li>
                <li><a href="/Premise">2. Premise</a></li>
                <li><a href="/Title">24. Title</a></li>
              </ol>
            </div>
          </aside>
        </div>
      </main>

    </div>
  );
}
