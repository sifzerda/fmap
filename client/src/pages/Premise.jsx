import '../App.css'
import premiseBanner from '../assets/premisebanner.jpg';
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';
import FootnoteRef from '../components/FootnoteRef';

export default function Premise() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-3 text-white text-center rounded bg-dark">
        <h1 className="display-4">Premise</h1>

        <div id="wrapper" className="text-left">
          <p className="lead my-3">Even the most complicated stories start with a very simple premise </p>
          <i>— Chris Van Allburg</i>
        </div>
      </div>

      <div className="card flex-md-row mb-4 box-shadow h-md-250 p-0">
        <img className="card-img-top w-100" src={premiseBanner} alt="Thumbnail" />
      </div>

      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">
              <h2 id="post-2-1" className="blog-post-title">2.1: Your Story In One Sentence</h2>
              <div id="content">

                <p>The premise is the essence of your plot. You should be able to sum up your story in one sentence. If you can’t, you will be unable to pitch your story in an intention-grabbing way.</p>

                <h5>2.1.1 	Difference between Premise and Plot</h5>
                <p>By contrast, your plot is a little more detailed; it suggests a beginning, middle and end. Unlike premises, plots contain <u>goals</u> (forces of progression) and <u>obstacles</u> (forces of regression). </p>
                <p>Consider which of the following premises constitute a plot:</p>

                <div className="p-3 mb-3 rounded custom-light-box">
                  <ol>
                    <li>A man uses a portal to travel back in time;</li>
                    <li>A girl’s identical twin mysteriously vanishes;</li>
                    <li>A bunch of kids wash up on a deserted island;</li>
                    <li>A young boy discovers he is a wizard;</li>
                    <li>A woman is terrorized by a rabid dog;</li>
                    <li>Aliens invade Earth and start exterminating humanity;</li>
                    <li>A group of strangers stay the night in a haunted house;</li>
                  </ol>
                </div>

                <p>The answer is: none of the above. These are all premises. Why? None of these examples have plot direction. They constitute larger worlds but don’t provide the tighter narrative pathway which will explore the larger world. They don’t have both goals and obstacles. Without these, your main character is merely a tourist or sightseer in their own story; they have nothing to do other than observe the events randomly happening around them.</p>

                <p>By contrast, the following premises do constitute plots:</p>
                <div className="p-3 mb-3 rounded custom-light-box">
                  <ol>
                    <li>A man uses a portal to travel back in time to kill Hitler;</li>
                    <li>A girl searches for answers after her identical twin mysteriously vanishes;</li>
                    <li>After washing up on a deserted island, a bunch of kids slowly turn on each other in their desperation to survive;</li>
                    <li>A young boy discovers he is a wizard and is destined to kill the dark lord wizard;</li>
                    <li>A woman is terrorized by a rabid dog and must protect her son;</li>
                    <li>After aliens invade Earth and start exterminating humanity, a man must leave his home and seek shelter;</li>
                    <li>To win a million dollar prize, a group of strangers stay the night in a haunted house;</li>
                  </ol>
                </div>

                <p>Notice the above give the main characters a direction, a goal. You suggest, of the infinite possibilities which spring from the idea (time travel, wizardry, alien invasion, etc) which angle you are going for, which tells your reader what your story is actually about. </p>
                <p>In short, ‘Captain Zolton visits Planet Terror’ is a premise. ‘Captain Zolton visits Planet Terror to kill the Hive Queen’ is a plot. It suggests an end – protagonist will either succeed or fail. Don’t allow Captain Zolton to wander Planet Terror aimlessly, sightseeing – even if you personally think his incidental observations are fantastically interesting – ensure that his every move is getting him closer and closer to his goal.</p>

                <h5>2.1.2 X in Y</h5>
                <p>A quick formula for generating a basic plot is putting X character in Y situation – this has the bonus of creating a protagonist as well. The situation (or location) should act as a foil for the character, emphasizing the character’s traits and increasing conflict. This is a great starter for short stories.</p>
                <p>Examples:</p>
                <div className="p-3 mb-3 rounded custom-light-box">
                  <ul>
                    <li>What if a cynical ghost hunting skeptic was in a genuinely haunted house?</li><FootnoteRef text="1408, Stephen King." />
                    <li>What if an intellectually handicapped man was in an experiment that made him a genius? (Flowers for Algernon, Daniel Keyes);</li>
                    <li>What if a typical, conservative 1950s breadwinning husband started physically shrinking? (The Incredible Shrinking Man, Richard Matheson) </li>
                  </ul>
                </div>

                <p>Note this method doesn’t work if your protagonist is an ‘everyman’ or ordinary person in an abnormal situation – in that case, the plot is the abnormal situation. But here, like Yin and Yang, the plot is a combination of the protagonist and the situation – you can’t subtract or replace either. For instance, you can’t switch Carrie in Carrie with any of the other kids, because her timid, agreeable, repressive nature builds the conflict, however you could switch Harry Potter with another kid in Harry Potter, because his personality doesn’t build the conflict (outside events do).</p>
                <p>Compare with a story which is not ‘X in Y’ – Jurassic Park by Michael Crichton. You can put any characters in a living Dinosaur Park and it’ll be interesting seeing them try to survive. Also goes for any story with a survival element (e.g. Lord of the Flies by William Golding, Arena by Matthew Reilly, The Hunger Games by Suzanne Collins).</p>

                <h5>2.1.3 A Bridge Too Far</h5>
                <p>An idea related to X in Y is to give your protagonist special capability, knowledge or experience, and put them in a situation which requires them to use that capability, knowledge or experience, but seems to be a little above their abilities.</p>
                <p>The idea of the doctor whose child unexpectedly dies (or any similar variation on this) is an example. You could have a straight retelling of this idea (such as in the nonfiction ‘The Blessing: A Memoir’ by Gregory Orr) or a heavily fictionalized version, (such as ‘Pet Sematary’ by Stephen King). </p>

                <h2 id="post-2-2" className="blog-post-title">2.2: Ideas</h2>

                <h5>2.2.1 	Dinner Conversation</h5>
                <p>A basic brainstorming idea from Sol Stein. If you’re at the most basic part of story planning (thinking up a story) imagine this: you’re having dinner with a stranger. They start talking. Ask yourself, what thing could the person say – what story could they begin telling – to make you stop eating and listen to them with full attention, and encourage them to continue? Make a small list of basic topics.</p>
                <p>These are the ingredients of your storytelling, and your story is basically aspiring to do this: make someone stop what they’re doing and want to hear the rest. This is a hook. The information saturation of the modern age has reduced peoples’ patience; stories today need a hook – a really good one – otherwise they’re cold toast. </p>
                <p>If you’re lucky, one of the above ideas might directly lead to a story and write itself. Others you may have to rearrange. The important thing is to never depart from this basic storytelling goal. Once you have formed a story, evaluate it by this method again.</p>

                <h2 id="post-2-3" className="blog-post-title">2.3: Building the Story from the Premise</h2>
                <p>‘How to Write’ advice tends to suggest starting with a character and an obstacle, or a challenge. When I kick start a story I normally start with a character and a question. A question should not be rhetorical or abstract. It should create the subject for the plot; above all. You pose the question not to the protagonist, but the reader – the question should be something the reader wants answered, and they will read the rest of the story to get the answer. A good question might begin: ‘What If…?’  For instance, here’s an idea I made up on the spot:</p>
                <p>Protagonist is up late one night at home and hears a strange sound pass over their house. They go outside and find a mysterious smoking object sitting in their backyard. </p>
                <p>This builds the question: ‘What if someone found some alien technology?’ Notice this does not create an obstacle or a challenge – that comes later. </p>
                <p>At this point you could start building an ‘E chain’. Start with the three major plot points (events) creating the plot arc (generally: (1) Challenge (2) Complication (3) Solution) for example:</p>

                <div className="p-3 mb-3 rounded custom-light-box">
                  <ol>
                    <li>Protagonist finds mysterious object;</li>
                    <li>Protagonist gets pursued by mysterious security personnel;</li>
                    <li>Protagonist destroys the object.</li>
                  </ol>

                  <p>Or:</p>

                  <ol>
                    <li>Protagonist finds mysterious object;</li>
                    <li>Protagonist uses object and is sent to the future;</li>
                    <li>Protagonist returns to present time.</li>
                  </ol>

                  <p>Or:</p>

                  <ol>
                    <li>Protagonist finds mysterious object;</li>
                    <li>Protagonist is stalked by a terrifying alien presence;</li>
                    <li>Protagonist’s alien infection starts turning him into an alien.</li>
                  </ol>

                  <p>Or:</p>

                  <ol>
                    <li>Protagonist finds mysterious object;</li>
                    <li>Protagonist is beamed to alien planet;</li>
                    <li>Protagonist marries alien prince/princess.</li>
                  </ol>

                  <p>I give different examples to show that your question should not lock you into a predetermined ‘answer.’ At this stage your story can still be about whatever you want, in whatever genre you want. To further expand the E chain, let’s take one of the above examples:</p>

                  <ol>
                    <li><span className='highlight'>[event] </span>Protagonist finds mysterious object;</li>
                    <li><span className='highlight'>[event] </span>Protagonist is beamed to alien planet;</li>
                    <li><span className='highlight'>[event] </span>Protagonist is married to an alien prince/princess</li>
                  </ol>

                  <p>Now, for each ‘Event,’ you’re brainstorming to resolve why the event happens, in the most interesting, dynamic ways you can think of. Refer to ‘Encouragement’ and ‘Effect’, to create a logical chain of activity. For example, starting with number one:</p>

                  <ol>
                    <li><span className='highlight'>[event] </span>Protagonist finds mysterious object;</li>
                    <ol>
                      <li><span className='red-text-span'>[encouragement] </span>why does the protag investigate the noise, rather than ignore it?</li>
                      <li><span className='red-text-span'>[encouragement] </span>why does the protag take the object and keep it, rather than discard it?</li>
                      <li><span className='blue-text-span'>[effect] </span>why does the protag take the object and keep it, rather than discard it?</li>
                      <li><span className='blue-text-span'>[effect] </span>why does the protag take the object and keep it, rather than discard it?</li>
                    </ol>
                  </ol>
                </div>

                <p>You could just say your protag has a curious and investigative personality, but this is easy and uninteresting. Alternatively, you could set up that your protag’s beloved GF/BF recently ended their relationship because they found protag boring. That is a more interesting incentive for your protag to investigate the object, particularly if they suspect it came from space. Surely a discovery of an alien artefact makes someone highly interesting. It also raises a great potential sub-plot about your protag trying to get back their ex – and notice how this raises interesting conflict with the ‘married to alien’ event later.</p>
                <p>We can use this brainstorming to flesh out the E chain (remember that ‘encouragement’ comes before ‘event’ even though below I’ve put it under event):</p>

                <div className="p-3 mb-3 rounded custom-light-box">
                  <ol>
                    <li><span className='highlight'>[event] </span>Protagonist finds mysterious object;</li>
                    <ol>
                      <li><span className='red-text-span'>[enouragement] </span>Protag dumped by ex for being ‘boring’; wants to use object to disprove this to ex;</li>
                      <li><span className='blue-text-span'>[effect] </span>protagonist investigates and experiments with object;</li>
                      <li><span className='red-text-span'>[enouragement] </span>Protagonist does not tell anyone about object, wanting to get the credit for discovering it to impress ex;</li>
                    </ol>

                    <li><span className='highlight'>[event] </span>Protagonist is beamed to alien planet;</li>
                    <ol>
                      <li><span className='red-text-span'>[enouragement] </span>Protag wants to return home to be with ex and attempts to befriend and flatter alien prince/princess to get them to return him/her home to Earth;</li>
                      <li><span className='blue-text-span'>[effect] </span>The alien prince/princess falls in love with protag; </li>
                    </ol>

                    <li><span className='highlight'>[event] </span>Protagonist is married to an alien prince/princess;</li>
                    <ol>
                      <li><span className='blue-text-span'>[effect] </span>Earth learns of this and protag is made diplomat representing Earth to alien planet;</li>
                      <li><span className='blue-text-span'>[effect] </span>Ex realises protag – diplomat for Earth and discoverer of aliens – has become most interesting person on the planet and regrets dumping them;</li>
                      <li><span className='blue-text-span'>[effect] </span>Protag declines ex’s plea to resume relationship OR protag divorces alien and gets back with repentant ex OR other </li>
                    </ol>
                  </ol>
                </div>

                <p>Notice it’s beginning to look like a ‘chain’ now. You may find less instances of encouragement as you go along – that’s fine. Encouragement winds the characters’ up into performing plot-relevant action. If you set it up substantially early on (as you should be) you’ll find it will cover you for the rest of the story.</p>
                <p>Now you can take number two and three and repeat the process. You can then repeat the process on the encouragement and effects – for instance, if protag gets back with ex, why? Has ex changed? How and why? These questions need to be answered through their own scenes.</p>
                <p>This is where the challenges and obstacles (above) come in: You want to continually ask ‘what if’ to generate the most interesting scenarios. For instance, what if the alien prince/princess realised the protag retained feelings for the ex, jealously abducted the ex to be put to death? What if the protag loved the alien planet and the alien prince/princess better than Earth and the ex, but every visit to its toxic atmosphere harmed the protag. What if the alien prince/princess impregnated protag? What if it looked like protag had a chance with ex again, but ex was killed? What if protag had to choose between ex and the alien planet/princess/prince? What if the alien prince/princess had protag turned into an alien? What if Earth waged war on the aliens, and protag had to choose a side?</p>
                <p>Notice the above questions centre on the relationships. In this plot, that’s where the interest lies because it’s the encouragement – the thing pushing the protagonist on. If you want to run a different kind of ‘what if’ like ‘what if the aliens threaten to blow up the planet’ you need to tie it into the protag’s incentives, for instance, this makes protag comply with aliens’ demands because if planet blew up, ex would die. But if protag doesn’t like ex anymore, it’s not a good plot point because saving the world at large gives no direct connection for the reader to relate to, particularly if protag has a surrogate home – the alien planet – to remain on. So you can see how important former encouragement is for subsequent events.</p>

                <h5>2.3.1 Start Big</h5>
                <p>When using an E Chain, once you have brainstormed multiple possible stories and you’re figuring out which brainstormed scenes to pursue (and which to abandon), prioritize your biggest scenes, or most interesting scenes.</p>

                <h2 id="post-2-4" className="blog-post-title">2.4: Structuring the plot with live issues</h2>
                <p>In basic form, a novel is where you tell the reader ‘stick around for the next 200 pages and something excellent will happen.’ Why not save the reader time and condense your story into a short story, 3000 words ending with something excellent? Or, why not just tell the reader the ‘excellent’ thing immediately? Why go to the bother? </p>
                <p>The novel must be something more: generally every 3000 words something good is happening (a ‘live issue’), and by the end, something excellent has happened (the climax). </p>

                <h5>2.4.1 	What is a ‘Live issue’?</h5>
                <p>What is the aforementioned ‘something good’ that litters the story? Answer: a ‘live issue’.</p>
                <p>A live issue is a plot element which raises an issue that demands resolution. It’s a plot detail that causes the reader to ask questions and demand answers (who, what, when, where, why, how). </p>

                <div className="p-3 mb-3 rounded custom-light-box">
                  <p className="mb-0">“Good stories need an engine, a question the story answers for the reader. Who done it? Guilty or not guilty? Who will win the race? Which man will she marry? Will the hero escape, or die trying? Good questions drive good stories.” </p>
                  <p></p><i>— Roy Clark </i><a href="#f1"><sup>1</sup></a>
                </div>

                <u>Writing Tools: 50 Essential Strategies for Every Writer.</u>

                <div className="p-3 mb-3 rounded custom-light-box">
                  <p className="mb-0">"Plant little queries along the way, little hints and teasers. Then answer them one by one, substituting new queries as you do."  </p>
                  <p></p><i>— David Carroll </i><a href="#f2"><sup>2</sup></a>
                </div>

                <u>A Manual of Writer's Tricks.</u>

                <p>Live issues must accord with all of these criteria:</p>
                <ol>
                  <li>They relate to the plot;</li>
                  <li>They help or hinder the protagonist; and</li>
                  <li>The issue puts something at stake;</li>
                </ol>

                <p>Insinuating that a side character is hiding a secret is not a live issue. But, insinuating that a side character is hiding a secret from the protagonist, which bears on the plot, is a live issue. Other times, the reader already knows the answer to the live issue’s question, they just want to see it play out – that’s also acceptable, as long as you ask the right question. </p>
                <p>It’s critical to structure your plot with live issues. Without, your story will be a guaranteed flop. You literally fail to provide your reader any reason to read it.</p>

                <h5>2.4.2 	Examples of live issues</h5>
                <p>Sphere by Michael Crichton, is a good example of a plot structured with live issues. The main plot issue is: What is the Sphere? Wisely, the novel does not limit itself that question. Each chapter raises a new question/s to continue to feed the reader’s interest and reward their continued reading. Examples of live issues raised throughout:</p>

                <div className="p-3 mb-3 rounded custom-light-box">
                  <ul>
                    <li>Protag gets summoned to a secret military/navy base (why?);</li>
                    <li>An alien spaceship was found in the deep sea (What? how? Why?);</li>
                    <li>The spaceship has never before seen human technology (how?);</li>
                    <li>The ship’s original crew is missing (where?)</li>
                    <li>The physicist starts talking ominously like something bad will happen to them (why? What?)</li>
                    <li>A piece of alien technology – the sphere – is found on the ship (what?)</li>
                    <li>A character is seen entering the sphere (how?)</li>
                    <li>The previous character won’t say what was in the sphere (why?)</li>
                    <li>A single mummified crew mate is discovered in a secret room that wasn’t there before (how? Who?)</li>
                    <li>Marine life is found with impossible anatomy (how? What?)</li>
                    <li>More marine life is found but now with the correct anatomy (why?)</li>
                    <li>The ship’s AI communicates to the crew (who? How?)</li>
                    <li>Bad things happen because an antagonist entered the sphere, but once he is incapacitated, bad things still happen (why? How?)</li>
                    <li>Different rooms in the spaceship change appearance inexplicably (how? Why?)</li>
                    <li>Protag accuses female character of entering the sphere, female cross-accuses same about protag (who?)</li>
                    <li>Multiple different characters acting out of character (why?)</li>
                  </ul>
                </div>

                <p>With each new question raised, you get increasingly pumped for the conclusion, which you expect to answer all these questions, and it does. Also, although different questions are answered at different times, Crichton never answers all his questions; there is always at least one question open. Even better, some of the answers actually raise more questions. Lastly, the ending does not directly answer all of the questions, but throughout the story, enough information is provided for the reader to answer those questions themselves – this is a great way to encourage multiple reading, or just keeping the story in your reader’s mind to encourage discussion with others, and possibly recommendation.</p>
                <p>Ira Levin is another author good with live issues;</p>

                <p>The Stepford Wives:</p>
                <div className="p-3 mb-3 rounded custom-light-box">
                  <ul>
                    <li>What happened to the women's association?</li>
                    <li>What do the men do at the men's association?</li>
                    <li>Why do the women act strangely?</li>
                    <li>Was the talkative police officer in on the 'plot'?</li>
                    <li>Is Dale a robot? </li>
                    <li>What happened to Bobby?</li>
                    <li>What did Bobby do with the knife?</li>
                    <li>What happened to Joanne?</li>
                    <li>Are the women altered with robotics, or entirely replaced with robots? and if they're replaced, do the original women get killed?</li>
                    <li>Was Walter in on the 'plot'?</li>
                    <li>Who is 'in' on it, and who isn't</li>
                  </ul>
                </div>

                <p>Etc.</p>

                <p>Levin is great at resolving his issues; or not resolving them. His thriller The Stepford Wives is a lesson in the economy of suspense; he only gives you the threadbare information to get the gist of what's going on, without outright telling you, and like Crichton, leaves specific details unexplained at the end.</p>

                <h5>2.4.3 	...And Foreclosure</h5>
                <p>If you raise issues, you must give them satisfying closure. Generally, this means, if you raised questions, you must provide answers, and if you make promises you must deliver.</p>
                <p>Exceptions: Note, in the ‘Sphere’ example above, I mentioned some issues were raised and left unanswered. For instance, one of these issues was, at any one time, precisely who is acting under the influence of the Sphere – by the end of the story, as long as it’s revealed how the Sphere works on the characters generally, we don’t need to know who was specifically affected at all times – it would be interesting to know, but not necessary.</p>
                <p>This was acceptable, as certain exceptions applied, e.g.</p>

                <ul>
                  <li>The issue was relatively unimportant, compared to other issues;</li>
                  <li>Nothing was at stake if the issue went unresolved;</li>
                  <li>The issue was created by implication, rather than expressed outright;</li>
                  <li>No answer would have been more effective than leaving the reader to wonder (i.e. the ‘closed door’ rule)  </li>
                </ul>

                <h5>2.4.4 	Turning Dead Issues Into Live Issues</h5>

                <p>INSERT STUFF HERE</p>

                <h2 id="post-2-5" className="blog-post-title">2.5: The 'Strange Sandwich'</h2>
                <p>Never do strange on strange. Your plot can be strange, but your reader needs to be able to contrast the strangeness with commonplace real life. Therefore, you should never layer strange plot elements on strange elements – e.g. strange characters layered on a strange setting – otherwise the reader won’t have anything solid to contrast the strange against. As with anything, strangeness is only apparent by contrast with its opposite, normality.</p>
                <p>As an example of ‘strange on strange’ I saw a story idea posted on Reddit where characters are on an alien planet, trapped in a 4D labyrinth, and being hunted down by an alien monster. Cool idea, but utterly unrelatable. Any single one of those ideas is stronger on its own, against a backdrop of normality. But all combined, risks giving the reader ‘strangeness’ fatigue. </p>
                <p>My E chain plot example further above has 3 strange elements – </p>

                <div className="p-3 mb-3 rounded custom-light-box">
                  <ol>
                    <li> A weird alien device;</li>
                    <li> An alien planet/civilization;</li>
                    <li> An alien prince/princess.</li>
                  </ol>
                </div>

                <p>This is okay as long you separate each strange element and relate it to, or backdrop it against, something ordinary to ‘normalize’ it. Once a strange element has been normalized, you can then introduce another strange element. Think of it like separating exotic sandwich ingredients each with another slice of bread: too much bread together tastes bland, but too many exotic ingredients together and flavours clash or cancel each other out. </p>
                <p>To normalize each strange element, try to pair it with something relatable in real life, for example: </p>

                <div className="p-3 mb-3 rounded custom-light-box">
                  <ol>
                    <li>  [A weird alien device] → A person digs up a strange object/artefact/antique in their backyard</li>
                    <li>  [An alien planet/civilization] → A person is lost in the wilderness</li>
                    <li>  [An alien prince/princess] → Meeting someone from a totally foreign culture</li>
                  </ol>
                </div>

                <p>There are countless examples you could think up. For example, maybe the protag steals the alien device from a museum or bids for it at a junk sale; weird but relatable. Maybe protag watches a sci-fi video before realizing he is viewing footage of the actual alien planet (people can relate better to watching something strange on TV than seeing it in real life). Maybe protag communicates long distance with the alien prince/princess for a long time, before meeting him/her in person and realizing he/she’s an alien – people can relate to long distance communication where the person in real life doesn’t seem anything like their long distance self. </p>

                <hr />

                {/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

                <ThoughtForm />
                <ThoughtList />

                {/* ------------------------------------------------- footnotes --------------------------------------------- */}

                <div className="footnotes">
                  <div className="p-3 mb-3 rounded pixar-box">
                    <h4>Footnotes</h4>
                    <ol>
                      <li id="f1">Roy Clark, <i>Writing Tools: 50 Essential Strategies for Every Writer.</i></li>
                      <li id="f2">David Carroll, <i>A Manual of Writer's Tricks.</i></li>
                      <li id="f3">William Sloane, <i>The Craft of Writing</i></li>
                      <li id="f4">William Sloane, <i>The Craft of Writing</i></li>
                      <li id="f5">William Sloane, <i>The Craft of Writing</i></li>
                      <li id="f6">William Sloane, <i>The Craft of Writing</i></li>
                      <li id="f7">William Sloane, <i>The Craft of Writing</i></li>
                      <li id="f8">William Sloane, <i>The Craft of Writing</i></li>
                      <li id="f9">William Sloane, <i>The Craft of Writing</i></li>
                    </ol>
                  </div>
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
              <p className="mb-0-1">The premise is a story's core idea, summed up in one or two sentences.</p>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Index</h4>
              <ol className="list-unstyled mb-0">
                <li><a href="#post-2-1">2.1: Your Story In One Sentence</a></li>
                <li><a href="#post-2-2">2.2: Ideas</a></li>
                <li><a href="#post-2-3">2.3: Building the Story from the Premise</a></li>
                <li><a href="#post-2-4">2.4: Structuring the plot with live issues</a></li>
                <li><a href="#post-2-5">2.5: The 'Strange Sandwich'</a></li>
              </ol>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Also See</h4>
              <ol className="list-unstyled">
                <li><a href="#">23. Title</a></li>
                <li><a href="#">24. Logline</a></li>
                <li><a href="#">25. Synopsis</a></li>
              </ol>
            </div>
          </aside>
        </div>
      </main>

    </div>
  );
}
