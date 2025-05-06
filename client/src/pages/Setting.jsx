import '../App.css'
//import settingBanner from '../assets/settingbanner.jpg'
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

export default function Setting() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <h1 className="display-4">Setting</h1>

        <div id="wrapper" className="text-left">
          <p className="lead my-3">Every story would be another story, and unrecognizable if it took up its characters and plot and happened somewhere else...Fiction depends for its life on place. Place is the crossroads of circumstance, the proving ground of, What happened? Who's here? Who's coming?... </p>
          <i>— Eudora Welty</i>

        </div>
      </div>

{/* 
      <div className="card flex-md-row mb-4 box-shadow h-md-250 p-0">
        <img className="card-img-top w-100" src={settingBanner} alt="Thumbnail" />
      </div>
*/}

      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">
              <h2 id="post-9-1" className="blog-post-title">9.1: What is a Setting?</h2>
              <p className="blog-post-meta">January 1, 2014 by <a href="#">zerda</a></p>

              <div id="content">
                <p>DEFINE SETTING.</p>

                <h2 id="post-9-2" className="blog-post-title">9.2: Enhance Interest and Conflict </h2>

                <p>It's a mistake to see setting as a passive element of a story, like the 'virtual wallpaper' that papers the background of the action. Approaching setting as an afterthought, by uncritical intuition, or coin-flipping between alternatives, or wanting to vicariously 'visit' the scene for personal reasons, are all great ways to <i>not</i> select your setting.</p>

                <p>Some basic rules:</p>
                <ul>
                  <li>
                    Like characters and dialogue, story settings are not real places. They are patchworks of details and virtual ‘set pieces’ and ‘props’ calculated to enhance conflict and interest in the story;
                  </li>
                  <ul>
                    <li>
                      Another way of thinking of it is like lego; you can break up and add to any part of your scene how you need to for the story. Readers will forgive a strange setting for particularisation setting it apart from other scenes in other stories; e.g.
                    </li>
                    <ul>
                      <li>
                        A haunted mansion that is half bulldozed (meaning you can walk into a room leading directly to outside);
                      </li>
                      <li>
                        An amusement park in the middle of the forest;
                      </li>
                    </ul>
                    <li>
                      Another way to particularise or add new life to settings is to make the characters behave unexpectedly or unconventionally in them. The movie ‘The Terminal’ (starring Tom Hanks) is a great example of this, with a man living in an airport;
                    </li>
                  </ul>
                  <li>
                    Think of a setting less like a location in a movie, and more like a set on a theatre stage: props and scenery flats economically selected to suggest a broader place; a door suggesting a room, a child’s toy suggesting a play pen, a beach ball and floatie suggesting a pool, etc. Your setting isn’t a pretty backdrop (after all, unlike in a movie, your reader won’t be able to see it) it’s a playground of ‘toys’ for your characters to interact with; with ‘let mot juste’ rule in mind, you only detail your setting with the relevant toys and details to make the story move. Your reader will always assume anything obvious which wasn’t described;
                  </li>
                  <li>
                    Scenes should provide obstacle to the protagonist, not provide obstacle to the story.
                  </li>
                </ul>

                <h2 id="post-9-3" className="blog-post-title">9.3: Describing Setting </h2>

                <p>Physical objects should be given physical descriptions. Robert Meredith and John Fitzgerald say, <i>"When we introduce a thing in a novel, the reader must be given a clear picture of it."</i></p>
                <p>This extends to settings, as they say: <i>"[w]hen a place is introduced in a [story], the reader must see it with sufficient clarity to be able to form a mental image of it."</i></p>
                <p>Descriptions of settings should be concrete, not emotional (i.e. how the place makes the character feel). Objective observations based on the senses are fine, however (e.g. 'hot' or 'silent'). In other words, characters should be able to agree on the observation.</p>
                <p>As a basic rule,<i>"[T]he amount of wordage a novelist devotes to describing a character, a setting, a place, or a thing depends on their importance to the plot or story line."</i></p><a href="#f1"><sup>1</sup></a>

                <h2 id="post-9-4" className="blog-post-title">9.4: Setting as Character </h2>

                <p>Your setting isn’t just a landscape or backdrop; it can also be a character. Use your environment to suggest things which cannot be said in dialogue or description. Some examples I’ve come across: </p>

                <ul>
                  <li>
                    A character having to ‘climb stairs’ to get somewhere suggests the activity at the forthcoming place will be difficult or tiresome, and is not something looked forward to by the character;
                  </li>
                  <li>
                    A thunderstorm during a party or get-together suggests underlying tensions between guests which might ignite;
                  </li>
                  <li>
                    A house with furniture that is incredibly heavy or unmovable suggests the occupants are settled in for the long term, or maybe feel trapped there against their own preferences;
                  </li>
                  <li>
                    Transport can be a setting, too – e.g. the inside of a car, train, houseboat, elevator, etc. Settings in motion can add an extra dimension of action and uncertainty because characters are only together for a finite period of time – the duration of the trip;
                  </li>
                </ul>

                <p>
                  Example from Pet Sematary:
                </p>

                <p className="code-left">
                  <code><i>Then there was a sound, and he remembered this from the last time as well: a high, gobbling laugh that became a sob. There was silence for a moment and then the laugh came again, this time rising to a maniacal shriek that froze Louis’s blood. The mist drifted dreamily around him. </i></code>
                </p>

                <p>
                  The mist here is characterised as ‘dreamy.’ There are two inferences: One, making it seem the protagonist is in a dream. The second is to attribute a mental state to the misty forest. As if the mist itself is aware, but blissfully ignorant to what is happening. This is unsettling; making the protagonist seem more alone.
                </p>

                <p>
                The last thing you want is for people to act ‘dreamy’ or out of it when in a danger scenario. However, there is no second character here to impute a dreamy state to; it is then necessary to give that characterisation to the environment itself. This is effective because, rather than having the protagonist talking to himself or feeling trapped inside his head, the environment acts as a ‘response’ or ‘second person.’
                </p>

                <h2 id="post-9-5" className="blog-post-title">9.5: Sub-Setting </h2>

<p>You don't have to change the location to get a different setting. Change the time of day (or night) or weather conditions, and a place can transform into a completely different setting.</p>
<p>Make sure there is some significance in using the same setting: for instance, a setting that performs the same function as it ever did, despite looking different, can be reassuring for a character who was there a long time ago. Conversely, a formerly familiar setting that now appears foreign and different could be unsettling for a character who thought they knew the place well. </p>
<p>Otherwise, if the setting hasn't changed, it may provide a foil to emphasise how much the character has changed/hasn't changed.</p>

{/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

<ThoughtForm />

<ThoughtList />

{/* ------------------------------------------------- footnotes --------------------------------------------- */}

<div className="footnotes">
                  <h4>Footnotes</h4>
                  <ol>
                    <li id="f1">Robert Meredith and John Fitzgerald, <i>Structuring Your Novel: From Basic Idea to Finished Manuscript (Everyday Handbook).</i></li>
                    <li id="f2">Robert Meredith and John Fitzgerald,  </li>
                    <li id="f3">Sol Stein, <i>On Writing</i></li>
                    <li id="f4">Jack Hart, <i>Storycraft: Complete Guide to Writing Narrative Nonfiction.</i></li>
                    <li id="f5">Robie Macauley & George Lanning, <i>Technique In Fiction (2nd ed).</i></li>
                    <li id="f6">Robie Macauley & George Lanning, <i>Technique In Fiction (2nd ed).</i></li>
                    <li id="f7">Jack Hart, <i>Storycraft: Complete Guide to Writing Narrative Nonfiction.</i></li>
                    <li id="f8">James Frey, <i>How to Write a Damn Good Novel Part 1.</i></li>
                    <li id="f9">The quote is from Thomas Williams book ‘The Hair of Harold Roux’: <i>“He has always thought of a novel, before it has taken on its first, tentative structure, as a scene on this dark plain, the characters standing around a small fire which warmly etches the edges of their faces. Distant mountains are turning moon-cold and blue as the last light fades as if forever. It is that small fire he must constantly re-create or these last warm lives will cease to live, will never have lived even to fear the immensities of coldness and indifference around them.”</i></li>
                    <li id="f10">PBS News Hour (2016, Oct 6), <i>Stephen King wants to reach out and grab you — with his writing.</i>Retrieved from <a href='https://www.pbs.org/newshour/show/stephen-king-wants-reach-grab-writing'></a></li>
                    <li id="f11">Howard Mittelmark and Sandra Newman, <i>How NOT to Write a Novel.</i></li>
                    <li id="f12">Henry A. Murray, <i>Explorations in Personality.</i></li>
                    <li id="f13">Edwin Shneidman, <i>The Suicidal Mind.</i></li>
                    <li id="f14">They can make effective side characters, however, see. e.g. ‘The Virgin Suicides.’</li>
                    <li id="f15">James Pennebaker, <i>The Secret Life of Pronouns.</i></li>
                    <li id="f16">Sol Stein, <i>How To Grow A Novel.</i></li>
                    <li id="f17">William Peter Blatty, <i>The Exorcist.</i></li>
                    <li id="f18">John Yorke, <i>How Stories Work and Why We Tell Them.</i></li>
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
                <li><a href="#post-9-1">9.1: What is a Setting?</a></li>
                <li><a href="#post-9-2">9.2: Enhance Interest and Conflict</a></li>
                <li><a href="#post-9-3">9.3: Describing Setting</a></li>
                <li><a href="#post-9-4">9.4: Setting as Character</a></li>
                <li><a href="#post-9-5">9.5: Sub-Setting</a></li>
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
