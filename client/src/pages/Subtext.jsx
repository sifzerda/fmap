import '../App.css'
//import subtextBanner from '../assets/subtextbanner.jpg'
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';
import { FootnoteProvider } from '../components/FootnoteContext';
import FootnoteRef from '../components/FootnoteRef';

export default function Subtext() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-3 text-white text-center rounded bg-dark">
        <h1 className="display-4">Subtext</h1>

        <div id="wrapper" className="text-left">
          <p className="lead my-3">INSERT QUOTE HERE</p>
          <i>— Hallie & Whit Burnett, Fiction Writer&apos;s Handbook</i>
        </div>
      </div>

{/* 
      <div className="card flex-md-row mb-4 box-shadow h-md-250 p-0">
        <img className="card-img-top w-100" src={subtextBanner} alt="Thumbnail" />
      </div>
*/}

      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">
              <h2 id="post-10-1" className="blog-post-title">10.1: What is subtext?</h2>
            
              <div id="content">
                <p>Stories are made up of text and subtext. Text is the surficial and literal meaning conveyed by the words. Subtext is the latent implied (or belied) meaning. </p>
                <p>One way of thinking of it; Subtext conveys that people cohabit two worlds simultaneously: one of present reality, of words, sights, sounds and activity. And a second; the inner world of conscious and subconscious thought, desire, impulse and emotion.</p>
                <p>When your characters are in a position where they wouldn’t realistically express what they mean, you use subtext to communicate.</p>
                <p>Example:</p><a href="#f1"><sup>1</sup></a>

                <p className='indent-text-1'>Father: Here we go, some nice peanut butter sandwiches.</p>
                <p className='indent-text-1'>Daughter: I’m allergic to peanut butter.</p>
                <p className='indent-text-1'>Father: Since when?</p>
                <p className='indent-text-1'>Daughter: Birth.</p>

                <p>Subtext = bad father. This is conveyed more dynamically here in an interaction, than the daughter merely spinning off a cliché like "I hate you, you were never there."</p>
                <p>You can also convey subtext through action and description. For example, a game played between characters could be the arena for subtext of deadly opposition between rivals, or flirting between potential love interests. Just note the character saying, “You’re good at chess. Also, you’re cute. Let’s go out,” is not subtext, it’s just text, because there is only one way of reading it. Rather, it’s subtext when dialogue or action acquires a secondary, implied meaning, that is, there are two (not necessarily opposing) ways of reading the situation; the textual and the subtextual, e.g.</p>

                <p className='indent-text-1'>She: “You haven’t moved your King.”</p>
                <p className='indent-text-1'>He: “I’m waiting for the right moment.”</p>
                <p className='indent-text-1'>She: “You’ve had plenty of opportunities to get closer.”</p>
                <p className='indent-text-1'>He: “I want to surprise you.”</p>

                <p>Another example: In Daniel Keyes’ <i>Flowers for Algernon</i>, the main character is developing new romantic interest in the love interest, but doesn’t consciously realise it (yet). The protagonist idly reminisces; ‘she looked younger than I remembered.’ That is the textual/primary meaning, while the secondary/subtextual meaning is that he finds her more physically attractive.</p>
                <p>Another example: In Stephen King’s <i>The Dead Zone</i>, the secondary protagonist evaluates the relationship material of her date by thinking, ‘[He] <i>never made</i> [her] <i>cry</i>.’ The subtext being that a previous boyfriend has.   </p>

                <h5>10.1.1 Types of Subtext</h5>

                <p>There are two kinds of subtext, let's call them:</p>

                <ol>
                  <li>Concurrent, and</li>
                  <li>Contradictory.</li>
                </ol>

                <h6>Concurrent</h6>

                <p>This is where the subtextual meaning – although different to – is not in contradiction with the textual meaning. That is, both meanings can be taken together, without affecting each other.</p>
                <p>For example, the way a character describes their house may be subtext for the way the character subconsciously feels about themselves. Description of the interior may also suggest things about the character’s mentality (messy, organized, artistic, etc). That the description/dialogue describes both the house and the character is not in contradiction – maybe the character intended the likeness. </p>
                <p>The title of Hemingway’s short story, ‘A clean, well-lighted place’ is subtext for a person’s place in the world, in that it’s opposite (a dirty, disorganized, dark place) refers to the larger universe. </p>

                <h6>Contradictory</h6>

                <p>This is where the textual and subtextual meanings are contradictory and cannot be taken together; if one is true, the other must be false.</p>
                <p>For example, if a character makes a joke at a funeral, the subtext may be that they didn’t actually care much for the deceased. This action is inconsistent with the character’s action in attending the funeral. Therefore, either the intention to attend is genuine, or the joke-telling was – they can’t both be.</p>

                <h5>10.1.2 	Why Use It?</h5>

                <p>Subtext mirrors the duality of the real world. Nothing is what it seems. People don’t always mean what they say and they hide their true intentions and feelings. To paint an authentic view of the world, you must show your insight into its duplicity.</p>
                <p>The author’s job is to portray the extreme heights and drops of human experience. However, it’s those extremes that people are least likely to expose to one another in the open. In a practical sense, people don’t normally go up to each other and say, ‘I hate you,’ or ‘I love you.’ Subtext is a compromise for this inherent contradiction – having your characters say what they mean without having to confess it.  </p>
                <p>Also, readers don’t want to be told the story; they want to find it out for themselves. If your story has no subtext, the reader will feel like they have no brain. </p>

                <h2 id="post-10-2" className="blog-post-title">10.2 Symbolism</h2>

                <p>Symbolism is far less important than subtext, so don’t worry too much about it, but it’s still worth knowing what it is and what it does.</p>
                <p>Differences between symbolism and subtext:</p>
                <ol>
                  <li>Symbolism is conveyed abstractly, through colour, imagery, sound and other impressions, whereas subtext is conveyed more directly, through dialogue, mood and action;</li>
                  <li>Symbolism doesn’t reveal your characters’ mental states and unspoken inclinations, whereas subtext does;</li>
                  <li>Symbolism should not be consciously acknowledged by the reader; it should be noticed on some unassuming, subconscious level. Whereas, the point of subtext is to be consciously noticed. </li>
                </ol>

                <li>Subtext is absolutely necessary for a work pitched at anyone over the age of eight, however, symbolism is optional. Why not be simple about it: if you don’t need it, why have it? Where the work is complicated or subtle or has a lot of different thematic concerns, symbolism might be useful to flag and distinguish each concern. </li>
                <li>If you do use it, make sure it’s not obvious, but in the background to build mood. For instance:</li>
                <li>Good (subtle/effective) symbolism: A character is walking through a fairground. In the background, some circus attractions are described, including a tiger in a cage. The tiger in the cage symbolizes a mounting danger, or risk.</li>
                <li>Bad (clumsy/ineffective) symbolism: A character is walking through a park. In the background, a circus is setting up, including a tiger in a cage, symbolizing impending danger or risk. This is clumsy because the circus and tiger in cage draws attention to itself, and risks making itself known purely as symbolism. Don’t enable your reader become more of an expert on your story than you are.</li>
                <li>Symbolism is very easy to get wrong. There’s a risk that you could rely on symbolism as a substitute for thematic development through actual writing, for instance, using the colour red to denote love rather than having characters just act and interact in ways which suggest love, and assuming the reader will pick up on it. </li>

                <h6>10.2.1 	Types of Symbolism</h6>

<p>There are generally two types of symbolism:</p>

<ol>
  <li>External Imagery:</li>
</ol>

<p>This relies on an existing connection between image (logos) and meaning (semantic), e.g. spiders = fear; applies = temptation. The risk with this is if the reader doesn’t make the connection (e.g. they don’t fear spiders, or dislike apples) the effect fails. </p>

<ol>
  <li>External Imagery:</li>
</ol>

<p>This creates a new connection between image and meaning, for instance, birds = anxiety; oranges = death. This is harder, relying more on organic writing ability, but can be memorably evocative if done right.</p>

{/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

<ThoughtForm />

<ThoughtList />

{/* ------------------------------------------------- footnotes --------------------------------------------- */}

<div className="footnotes">
                  <h4>Footnotes</h4>
                  <ol>
                    <li id="f1">From Steven Spielberg’s <i>War of the Worlds.</i></li>
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
                <li><a href="#post-10-1">10.1: What is subtext?</a></li>
                <li><a href="#post-10-2">10.2: Symbolism</a></li>
              </ol>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Also See</h4>
              <ol className="list-unstyled">
                <li><a href="/Themes">4. Themes</a></li>
                <li><a href="/Conflict">5. Conflict</a></li>
                <li><a href="/Dialogue">12. Dialogue</a></li>
              </ol>
            </div>
          </aside>
        </div>
      </main>


    </div>
  );
}
