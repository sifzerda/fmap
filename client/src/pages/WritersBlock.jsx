import '../App.css'
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

export default function WritersBlock() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <h1 className="display-4">Writer's Block</h1>

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
              <h2 id="post-21-1" className="blog-post-title">21.1: What is Writer's Block?</h2>
              <p className="blog-post-meta">January 1, 2014 by <a href="#">zerda</a></p>
              <div id="content">

<p>DEFINE WRITER'S BLOCK, SPECULATE ON ORIGIN</p>

                <h2 id="post-21-2" className="blog-post-title">21.2: Imagine Saying It</h2>
<p>Thought experiment: If struggling for the simplest way to voice ideas, imagine conveying the information to a lay person orally. This can help to pull you out of the pressure you often subconsciously place on yourself to sound ‘writerly’ or ‘literary’, and will help you decide what the most crucial information is from out of a bunch of different ideas;</p>
<p>Experiment with variations of this, e.g. pretend you are trying to sum up the idea and are short for time, compared to conveying the information with all the time in the world;</p>

                <h2 id="post-21-3" className="blog-post-title">21.3: The Right Idea Will Come</h2>
<p>Don’t freak out because you feel your story lacks substance or doesn’t sound original or just doesn’t sound right. If the idea is meant to be, it’ll write itself in own time. Ideas come from everywhere, and come eventually;</p>
<ul>
  <li>Try reading other books dealing with the same subject matter – including non-fiction (and as many different kinds of books, to reduce the risk of plagiarism, intentional or otherwise);</li>
<li>There’s no harm in taking a break from your writing, because a good idea will play on your mind whether you like it or not, and eventually something (something you read, or hear in the news, or watch on TV) will jar an idea again. The more you get away from the story the more you will appreciate it with a fresh mind, making the creative process more productive;  </li>
</ul>

                <h2 id="post-21-4" className="blog-post-title">21.4: Constrain your Writing</h2>
<p>A writing constraint is where you set rules delimiting what and how you write. Robert Frost said that writing free (unconstrained) verse is like playing tennis with no net. Sounds contradictory, but constraints are necessary to inspire creativity.  </p>
<p>The whole point of poetry is to generate creative connections through restricted verse. When you see awful poetry it’s likely because the poet didn’t apply constraints to their writing, they just wrote whatever came to mind.</p>
<p>Some examples of constraints include:</p>
<ul>
  <li><u>Mandated vocabulary:</u> avoid using a particular word/s or otherwise limits the word use in some way;</li>
  <li><u>Lipogram:</u> avoid using a particular letter of the alphabet, particularly more common letters;</li>
  <li><u>Rhopalism:</u> a sentence in which in successive word is one letter longer;</li>
  <li><u>Abecedarius:</u> a kind of acrostic poem where successive lines begin with successive letters of the alphabet;</li>
  <li><u>Palindrome</u> using words and even full sentences which read the same backwards as forwards;</li>
  <li><u>Tautogram:</u> all the words in a sentence or phrase begin with the same letter;</li>
  <li><u>Pangram:</u> a sentence that contains every letter of the alphabet (e.g. “the quick brown fox jumps over the lazy dog”);</li>
  <li><u>Pilish:</u> the number of letters in each successive word is equal to the successive decimal places of pi, 3.14159265359...</li>
  <li><u>Repetition:</u> Finding ways to work the same word or phrase into a story, multiple times</li>
  <li><u>Aliteration:</u> relying on a certain letter to start words;</li>
  <li><u>First letter acronyms:</u> the first letter of each sentence in a paragraph/s must spell out a sentence;</li>
  <li><u>Concrete instead of abstract descriptions:</u> (e.g. ‘smile’, but not ‘happy’);</li>
  <li><u>Double entendres:</u> phrases that hold two simultaneous meanings, commonly with sexual undertones;</li>
  <li><u>Straining metaphors:</u> making the description of one thing sound like and evoke something entirely different.</li>
</ul>

<p>Placing constraints on your writing makes writing easier, because it gives you bright, clear lines about what and how to write. It’s like being given a writing prompt as opposed to being asked to write whatever you want. The freedom conferred in the latter can be its own prison.</p>
<p>You can and should invent your own. A writing constraint can be any rule you want, and you can employ them anywhere in your writing, as long as you avoid employing them so often that your writing ends up sounding artificial and strange.</p>
<p>You don’t have to be consistent. You can break your own constraints. You might, for example, impose a rule in one chapter against using the letter ‘e’, but break that rule once – and that one exception may be used to communicate something very important.</p>
                
                
                <h2 id="post-21-5" className="blog-post-title">21.5: From Another Author’s POV</h2>
<p>If you’re struggling with an idea, try to imagine how it might be done if your favourite author wrote it (particularly if your favourite author writes in that genre).</p>
               
                <h2 id="post-21-6" className="blog-post-title">21.6: As A Movie</h2>
<p>Same as above, but imagine if the idea played out as a movie. This will help write scenes which have more immediacy, because you can’t film a scene with abstract content.</p>
               
                <h2 id="post-21-7" className="blog-post-title">21.7: The Lover’s Quarrel</h2>
<p>This is a writing exercise from Sol Stein for application in romance scene/s. You aim to fill in the dialogue below which both conveys that the characters are in love, but are having a quarrel (without outright stating it). The more creatively you can suggest these pieces of information, the better. Try to work the dialogue into an imagined scene, setting or event. Here’s a hint: the characters don’t have to be talking directly at each other (could be making an observation or statement).</p>
<p><strong>Lovers’ Quarrel in Ten Brief Exchanges:</strong></p>    
<p className='indent-text-1'>He:</p>
<p className='indent-text-1'>She:</p>   
<p className='indent-text-1'>He:</p>
<p className='indent-text-1'>She:</p>   
<p className='indent-text-1'>He:</p>
<p className='indent-text-1'>She:</p>   
<p className='indent-text-1'>He:</p>
<p className='indent-text-1'>She:</p>   
<p className='indent-text-1'>He:</p>
<p className='indent-text-1'>She:</p>     

<p>Example:</p>
<p className='indent-text-1'>"I need to get off."</p>
<p className='indent-text-1'>"You chose this ride."</p>   
<p className='indent-text-1'>"I went on your rollercoaster with you. Wasn't that enough?"</p>
<p className='indent-text-1'>"That wasn't even a rollercoaster, it was a ghost train. I don't even like Ferris Wheels, I only got on this with you because I thought you wanted to go on it."</p>   
<p className='indent-text-1'>"I didn't actually want to."</p>
<p className='indent-text-1'>"Well, then why did you get on?"</p>   
<p className='indent-text-1'>"Why did you get on?"</p>
<p className='indent-text-1'>She: *says nothing*</p>   
<p className='indent-text-1'>"You didn't have to."</p>
<p className='indent-text-1'>"Isn't it obvious?"</p>   

                <h2 className="blog-post-title">21.8: Write What You Love</h2>
<p>This is a tip from Stephen King; ask yourself, “Am I Having Fun?”  The answer needn’t always be ‘yes.’ But if it’s never ‘yes,’ then you have a problem. Go back to writing what you really enjoy.</p>

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
                    <li id="f31">The Crate at Outpost 1, <i>Matthew Gant.</i></li>
                    <li id="f32">The Duel, <i>Joan Vatsek.</i></li>
                    <li id="f47">The Fly, <i>George Langelaan.</i></li>
                  </ol>
                </div>

----------------------------------------------------- */}

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
                <li><a href="#post-21-1">21.1: Imagine Saing It</a></li>
                <li><a href="#post-21-2">21.2: The Right Idea Will Come</a></li>
                <li><a href="#post-21-3">21.3: Constrain Your Writing</a></li>
                <li><a href="#post-21-4">21.4: From Another Author's POV</a></li>
                <li><a href="#post-21-4">21.5: As a Movie</a></li>
                <li><a href="#post-21-4">21.6: The Lover's Quarrel</a></li>
                <li><a href="#post-21-4">21.7: Write What You Love</a></li>
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
