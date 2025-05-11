import { Link } from 'react-router-dom';
import '../App.css'
import plotBanner from '../assets/plotbanner.jpg'
import threeRt from '../assets/3rt.jpg'
import crossArrow from '../assets/crossarrow.jpg'
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

export default function Plot() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-3 text-white text-center rounded bg-dark">
        <h1 className="display-4">Plot</h1>

        <div id="wrapper" className="text-left">
          <p className="lead my-3">For the purposes of [a story] a convincing impossibility is preferable to an unconvincing possibility</p>
          <i>— Aristotle</i>
          <p className="lead my-3">The King died and then the Queen died is a story. The King died, and then the Queen died of grief, is a plot </p>
          <i>— E. M Forster</i>
        </div>
      </div>

      <div className="card flex-md-row mb-4 box-shadow h-md-250 p-0">
        <img className="card-img-top w-100" src={plotBanner} alt="Thumbnail" />
      </div>

      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">
              <h2 id="post-3-1" className="blog-post-title">3.1: Plotting in a Vacuum</h2>

              <div id="content">
                <p>You might have more stories than the Burj Khalifa. But stories aren’t enough; you’ve got to know what to do with them.</p>
                <p>At the front-end of story creation, writers tend to think: 'What do I already know, and how can I make a plot based on what I already know?'</p>
                <p>What you should be asking is, 'What is an ideal plot, and what do I need to know to write it?'</p>

                <h2 id="post-3-2" className="blog-post-title">3.2: Types of Plots</h2>
                <p>Robert McKee makes the distinction between three different kinds of plots: </p>
                <ol>
                  <li>Archplot (the ‘Hero’ story)</li>
                  <li>Miniplot (the ‘journey’ story)</li>
                  <li>Antiplot (the ‘not a logical story’ story)</li>
                  <li>Nonplot (the ‘not a story’ story)</li>
                </ol>

                <p>McKee strongly advises writers not to start writing plots (2) – (4) until they’ve mastered the Archplot. This is because the other plots are subversions of the Archplot; they take its elements and alter or challenge or remove them. You can’t do that effectively unless you’re highly familiar and confident with use of those elements in the first place. In other words, you must pass the foundation course (the Archplot) before you can move on to the advanced course (Miniplot, Antiplot and Nonplot).</p>

                <h5>3.2.1 	Archplot</h5>
                <p>Your standard kind of story.</p>
                <p>Typified by:</p>
                <ul>
                  <li>Plots structured by physical events;</li>
                  <li>Active protagonist</li>
                  <li>A closed ending (story threads wrap up and resolve);</li>
                  <li>An identifiable protagonist (may be an everyman or larger than life ‘hero,’ but in traits distinguished from the other characters);</li>
                  <li>External Conflict (caused by other people, social institutions, or natural forces);</li>
                  <li>No intellectual work required by the audience; </li>
                  <li>Linear timeframe;</li>
                </ul>

                <p>Example: Star Wars</p>

                <h5>3.2.2 	Miniplot</h5>
                <p>Typified by:</p>
                <ul>
                  <li>Minimalism;</li>
                  <li>Plots structured by emotional events;</li>
                  <li>An open ending (story threads unresolved, some remaining questions);</li>
                  <li>Internal Conflict (inner struggles and battles with one’s self);</li>
                  <li>Passive protagonist;</li>
                  <li>Multiple protagonists; </li>
                  <li>Intellectual work required by the audience</li>
                  <li>Nonlinear timeframe;</li>
                </ul>

                <p>Example: Lost in Translation</p>

                <h5>3.2.3 	Antiplot</h5>
                <p>Typified by:</p>
                <ul>
                  <li>Plot structured by coincidence over causation;</li>
                  <li>Ridicule, parody, irony and satire;</li>
                  <li>Intellectual work required by the audience;</li>
                </ul>

                <p>Example: Seinfeld</p>

                <h5>3.2.4 	Nonplot</h5>
                <p>The Nonplot is basically is where there isn’t a clear, satisfying conclusion to the events.</p>
                <p>Typified by:</p>
                <ul>
                  <li>Plotless;</li>
                  <li>Character-driven;</li>
                  <li>Intellectual work required by the audience;</li>
                </ul>

                <p>Example: The Big Lebowski</p>

                <p>The difference between the Antiplot and the Nonplot is that the former is generally made in jest or for satirical effect, done in a super-real style. Whereas, the latter is more realistic and may be sobering and insightful.</p>

                <h2 id="post-3-3" className="blog-post-title">3.3: The Inciting Incident</h2>
                <p>This is the event which kicks off the plot. It’s the first ‘unusual’ thing which occurs to your protagonist, jarring them out of their normal routine and necessitating their pursuit of the plot-worthy goal in order to return to normal. </p>
                <p>A story where the protagonist one day wakes up and changes their mind about the direction of their life, is weak, vague and lazy. We don’t assume people just do this spontaneously in real life, we assume something happened to cause their change of mind. In real life, we don’t take people’s word for it when they tell us they’ve suddenly decided to change their life; we tend to ask, ‘why? What caused you to decide this?’ or, meaningfully, ‘Did something happen?’</p>
                <p>The Inciting Incident also suggests your protagonist is not in control; control of their life has been wrestled away from them, and the story is about them reclaiming control. This is more interesting than a character who remains in the driver’s seat of their life the whole time, whatever sudden decisions they make.</p>
                <p>It goes without saying, the inciting incident should be zany, unusual, riveting. It should make the reader wonder what they would do if they found themselves in the same circumstances. It shouldn’t be some throwaway event excused by the fact that more interesting things happen later. If anything, there’s a good argument the inciting incident needs to be one of the most exciting parts of the entire story, because, like a stone hitting the surface of a pond, everything that happens from that point radiates out from the inciting incident.</p>

                <h2 id="post-3-4" className="blog-post-title">3.4: Three Act Structure</h2>
                <p>The Three Act Plot is a story formula involving three major changes or reversals of positions for the protagonist. For instance, things are good, then they’re bad, then they’re good again. The Acts are: Good, Bad, Good (if the climax is in the Third Act, you might find the third ‘Good’ only spans the last half/quarter of the Act).</p>
                <p>The first Act might be about 25% of the story. The Second Act will be longer, and then the Third Act will be the shortest, to create a sense of accelerating pace to the climax. Maybe max 25% of the story. The potential problem is that the Second Act drags. Rectifying that may involve adding a subplot/s or another Act (e.g. extending to Good, Bad, Worse, Good).</p>
                <p>McKee suggests a three Act plot needs four memorable scenes (the inciting incident, and each Act’s climax). I would argue for more. The Harry Potter books had scores of memorable scenes which didn’t fit into the above categories: the Quidditch games, the spell classes, sorting hat – there was no end to them. I would also argue that you risk transparency if your memorable scenes are the important ones – you give the reader that many more clues as to how you’ve structured your story ‘behind the curtain.’ The reader will think ‘oh, this scene’s fairly unmemorable, it mustn’t be integral to the plot.’ Memorable ‘in-between’ scenes throw the reader off your trail, because the reader is tempted to include them in a structured analysis of your plot, whereas you know those scenes are decoys for the integral stuff. Never let your reader become more of an expert on your story than you are. Besides, why stop at four? Why not try to make as many scenes memorable as possible?</p>
                <p>Blake Snyder<a href="#f1"><sup>1</sup></a> says the 3 acts in a story represent 3 different worlds: Thesis, Antithesis, and Synthesis. Thesis is the world as is. It’s the world and its rules set up for us. Antithesis is the reverse or ‘upside-down’ version or ‘funhouse mirror reflection’ of the world. Characters from ‘Thesis’ may reappear in ‘Antithesis’ in different forms. The Synthesis is a combination of the first two worlds. What the hero had in worlds 1 and 2, becomes the ‘Third way’ in world 3. By this time, the hero has ‘died’ and been ‘reborn’, so he can’t go back to world 1 as the same person. He returns having learned and retained things from world 2, therefore combining the two in world 3. The change doesn’t have happen instantaneously, it should happen bit by bit – every scene in the structure changes the hero a little.</p>
                <u>Save The Cat! Strikes Back: More Trouble For Screenwriters To Get Into...And Out Of, Blake Snyder.</u>

                <p>This may sound reminiscent of Joseph Campbell’s <Link to="/HeroJourney">Hero’s Journey.</Link></p>
                <p>There’s another dimension to this structure, two intertwining forces: the hero’s tangible goal (what he wants), and his spiritual goal (what he needs). For instance, the hero may be chased by a monster (tangible goal = to survive), realising that this means his mentor has failed to protect him from it (spiritual goal = security, trust). As the monster closes in, the hero’s awful realisation crystallizes. The hero must ditch the defective belief (that mentor will protect him) to attain the spiritual goal, effecting his transformation (from dependent to self-sufficient), allowing him to ditch the monster, and gain the tangible goal.</p>

                <h5>3.4.1 	Sub-Plots</h5>
                <p>Sub-plots are not only conceptually plots in miniature, they also resemble them in form. They have their own Act structure, Inciting Incidents, and climaxes. However, a sub plot may comprise of a single Act, or more. You can have multiple subplots, and they can overlap. You can also retire subplots for periods at a time, only to resolve them much later. Climaxes for sub-plots and the main plot can also happen in the same scene, e.g. the protagonist defeats the villain (climax of main plot) and by doing so, wins object of affection’s love (climax of subplot).</p>
                <p>McKee also says that main plots and subplots can have different protagonists (though I’m struggling to see how this would work). My caveat is, if you do this, ensure:</p>
                <ul>
                  <li>The subplot/s tie back into the main plot’s theme, i.e. the sub-plots are variations on a theme;</li>
                  <li>The subplot protagonist lives in the same world, or a connected world to the main protagonist. For example, Atreyu and Bastien in The Neverending Story lived in different worlds, but their worlds were interconnected enough for Bastien to be able to visit Atreyu’s world, and for both characters to affect each other. </li>
                  <li>The subplot protagonist’s character reflects the main protagonist’s character, whether alike, a foil, an invert, a branching off parallelism, etc. I.e. the protagonists aren’t completely unrelated people who could just be any random strangers in the street.</li>
                </ul>

                <h2 id="post-3-5" className="blog-post-title">3.5: Three Right-Angled Turns</h2>
                <p>Aristotle wrote of the “peripeteia,” or “reversal of the situation.”</p>
                <p>The ‘Three Right-Angled Turn’ is a basic concept you can use to make sense of the Three Act Structure. And by the examples below, suggests other writers have stumbled on it before me. In reiteration, this is a screenwriting structure, but can be implemented in any writing. You can also play with it in the planning stage, before you start writing, or mix it with other planning concepts, such as in conjunction with the ‘E Chain.’</p>
                <p>At the end of the first act, your protagonist makes a ‘turn’ which sets them off from where they were. Ideally this will be a ‘diametric’ turn (see 6.5 Diametrics). Normally they will end up in a worse position, but might not. Being set off in a different but equal position may be bad, as it requires time and energy for the protagonist to readjust. </p>
                <p>At the end of the second act, your protagonist makes another turn, which sets them off both from their previous position and the starting position. So you can’t just turn them back where they were in starting position (otherwise there is no point to the first act). Take care your narrative doesn’t just flip back and forth like this.</p>
                <p>The third turn is a special turn, because it designates the ending. Your protagonist can’t just make a right turn into anywhere; they have to end up somewhere that completes the narrative. For the purpose of your third turn, note that, if you make three right-angled turns, you end up heading in the same direction you began:</p>

                <div className='img-container'>
                  <img src={threeRt} alt="Three Right-Angled Turns" width="500" height="500"></img>
                </div>

                <p>To ensure the turn is diametric, each time your protagonist makes a turn, work out where your protagonist is (their current position) and where they appear to be heading (their direction, motivation, goals, objectives), and either flip it, or contrast it in some major way.</p>

                <h5>3.5.1 	Doubling: ‘Doppelgängers’ and ‘Flips’</h5>
                <p>For instance, a protagonist police officer may be framed for a crime, prosecuted by the police force, and get sentenced to prison, where he befriends some of the prison inmates. Previously he saw the police as good, and the prison inmates as bad, but after the right angle turn (he gets convicted for a crime) he begins to see the police as bad and prison inmates as good.</p>
                <p>A ‘doppleganger’ is where that character, setting, or story element remains the same, but is duplicated, and the double is contrastingly different, if not entirely the opposite (like the ‘good twin, evil twin’ cliché).</p>
                <p>For instance, a character finds a portal to a fantasy world, which contain vague doubles of their real world counterparts (the Wizard of Oz “…and you were there…and you were there…” idea). Often there is some kind of threshold dividing the doppelgängers, but there doesn’t have to be. The more obvious the double, the more of a border exists between them – virtual twins are almost guaranteed to never meet. The more subtle a double, the more ability they can interact with their double. The point of this rule is, characters should not be aware they are doubles.</p>
                <p>The double is a concept related specifically to right-angle turn plots (right angles bestow double status), compared to a ‘foil’ who is not necessarily a double, nor do they require a right-angle to exist). A double’s existence is predicated on their ‘twin’ – apart from which, they don’t really have a reason to exist. Whereas, a foil isn’t dependent on its partner, rather, its traits have been adjusted to maximize contrast with another character.</p>
                <p>In both cases, the effect is to give the protagonist a new perspective.</p>

                <h5>3.5.2 	Examples of Three Right Angle Turns</h5>
                <p>To illustrate the concept in its entirety I’ll use the examples of two very different stories: Beauty and the Beast (1991), and The Shawshank Redemption (Stephen King, 1982) (the first is a movie, but originated from written story).</p>

                <p><strong>#1 Beauty and the Beast: </strong></p>
                <div className="p-3 mb-3 rounded custom-light-box">
                  <p><u>Act 1: </u></p>
                  <ul>
                    <li>[Protagonist’s starting position] Country village </li>
                    <li>[Protagonist’s direction] dreams of fairytale romance in some distant location with prince.</li>
                    <ul>
                      <li><u>Act 1 right angle:</u> [New position] Scary castle with monster.</li>
                    </ul>
                  </ul>

                  <p><u>Act 2: </u></p>
                  <ul>
                    <li>[Position] Captive of monster in scary castle </li>
                    <ul>
                      <li><u>Act 2 right angle:</u> [New position] Falling in love with monster.</li>
                    </ul>
                  </ul>

                  <p><u>Act 3: </u></p>
                  <ul>
                    <li>[Position] Falling in love with monster. </li>
                    <ul>
                      <li><u>Act 3 right angle:</u> [New position] Monster is not a monster but prince.</li>
                    </ul>
                  </ul>
                </div>

                <p><u>Conclusion:</u> Protagonist ends up where they dreamed of in the first place.</p>

                <p><strong>#2 The Shawshank Redemption: </strong></p>
                <div className="p-3 mb-3 rounded custom-light-box">
                  <p><u>Act 1: </u></p>
                  <ul>
                    <li>[Protagonist’s starting position] Protagonist’s wife cheating on him </li>
                    <li>[Protagonist’s direction] possibly leave her, try to get her back, or get revenge</li>
                  </ul>

                  <p><u>Act 2: </u></p>
                  <ul>
                    <li>[Position] protagonist in prison, lowest standing on the prison’s social hierarchy, not coping </li>
                    <ul>
                      <li><u>Act 2 right angle:</u> [New position] protagonist makes friends and gets a better standing</li>
                    </ul>
                  </ul>

                  <p><u>Act 3: </u></p>
                  <ul>
                    <li>[Position] Protagonist coping in prison </li>
                    <ul>
                      <li><u>Act 3 right angle: </u> [New position] Protagonist escapes prison</li>
                    </ul>
                  </ul>
                </div>
                <p><u>Conclusion: </u>Protagonist ends up where they should have been in the first place.</p>

                <h5>3.5.3 	Sub- Three Right Angle Turns</h5>

                <p>Beauty and the Beast is the poster child for the right-angle turn structure, and provides yet more examples. One example is in song themes. The songs ‘Belle’, ‘Be Our Guest’ and ‘Kill the Beast’ are all about belonging and exclusion (the remaining song) : </p>

                <ul>
                  <li>Belle: the inhabitants of the setting (village) are telling an excluded/different character (Belle) she doesn’t belong; </li>
                  <li>Be Our Guest: the inhabitants of the setting (castle) are telling the excluded/different character she does belong;</li>
                  <li>Kill the Beast: the inhabitants of the setting (village again) are once again reinforcing that an excluded/different character does not belong (now, the Beast);</li>
                  <li>Bonus; ‘Beauty and the Beast’: the inhabitants (castle staff) reinforce the belonging of the two excluded/different characters (Belle, Beast) with each other. Symbolically, since they are the victors of the battle, their song is taken as the ‘victory song’; i.e. whatever they say is the ‘truth’ or the winning argument.</li>
                </ul>

                <p>Notice the structure of these songs as an argument: team 1 makes a claim; team 2 rejoinders; team 1 reinforces its claim; team 2 reinforces its rejoinder, and ultimately wins the argument. </p>
                <p>Also notice the strategic spacing of the songs: if the film was divided into four acts, each of these songs would roughly correspond to each of these acts: beginning, end of second act halfway point, climax, denouement. </p>
                <p>Beauty and the Beast is a love story; you might ask where does the theme of love fit into this structure? Importantly, each of these songs is separated by an inciting incident which acts as the ‘turn’: </p>
                <ul>
                  <li>Belle getting imprisoned in the castle (motivated by her love for her father) turns to ‘Be Our Guest’;</li>
                  <li>Belle staying at the castle after the wolf attack (motivated by her love for the Beast) turns to Kill the Beast;</li>
                  <li>Beast returning to human form (because of Belle’s love for him) turns to ‘Beauty and the Beast’;</li>
                </ul>

                <p>Each of the inciting acts symbolizes love, and results in a reply song symbolizing belonging. Love is the act, and belonging is the effect (or, countered by the antagonists; love is the threat and exclusion is the effect).</p>

                <h2 id="post-3-6" className="blog-post-title">3.6: Chiastic Structure</h2>

                <p>A chiastic structure exists where the narrative creates a symmetrical pattern, e.g. if scenes include A,B, and C, then a chiastic structure might go: A, B, C, C, B, A. If you’re musically inclined, this resembles counterpoint.</p>
                <p>‘Chiastic’ originates from the Greek word ‘Chiasmus’ meaning ‘crosswise arrangement,’ i.e. –</p>

                <div className='img-container'>
                  <img src={crossArrow} alt="Chiastic Structure" width="500" height="500"></img>
                </div>

                <p>Chiastic structure can effect a sense of ‘circularity,’ or going full circle, returning the reader back where they started. Elements are introduced, and then, as if a mirror reflection, are re-addressed and resolved in corresponding (backwards) order.</p>
                <p>Here is an example of the Chiastic structure of the Genesis Flood Narrative: </p>

                <div className="p-3 mb-3 rounded custom-light-box">
                  <div className="chiastic">
                    <div className="a">A: Noah and his sons (Gen 6:10)
                      <div className="b">B: All life on earth (6:13:a)
                        <div className="c">C: Curse on earth (6:13:b)
                          <div className="d">D: Flood announced (6:7)
                            <div className="e">E: Ark (6:14-16)
                              <div className="f">F: All living creatures (6:17–20 )
                                <div className="g">G: Food (6:21)
                                  <div className="h">H: Animals in man’s hands (7:2–3)
                                    <div className="i">I: Entering the Ark (7:13–16)
                                      <div className="j">J: Waters increase (7:17–20)
                                        <div className="x">X: God remembers Noah (8:1)</div>
                                      </div>
                                      <div className="j">J: Waters decrease (8:13–14)</div>
                                    </div>
                                    <div className="i">I': Exiting the Ark (8:15–19)</div>
                                  </div>
                                  <div className="h">H': Animals (9:2,3)</div>
                                </div>
                                <div className="g">G': Food (9:3,4)</div>
                              </div>
                              <div className="f">F': All living creatures (9:10a)</div>
                            </div>
                            <div className="e">E': Ark (9:10b)</div>
                          </div>
                          <div className="d">D’: No flood in future (9:11)</div>
                        </div>
                        <div className="c">C': Blessing on earth (9:12–17)</div>
                      </div>
                      <div className="b">B': All life on earth (9:16)</div>
                    </div>
                    <div className="a">A: Noah and his sons (9:18,19a)</div>
                  </div>
                </div>

                <h5>3.6.1 	Sub-Chiastic Structure</h5>
                <p>As plots may contain sub-plots, chiastic structures may contain sub-chiastic structures. To do this, take one of the items on your list of elements, e.g. from above: ‘G: Flood announced.’ Then insert a minor chiastic structure after, before progressing to the next item, e.g.</p>

                <div className="p-3 mb-3 rounded custom-light-box">
                  <div className="chiastic">
                    <div className="level-1">A: Noah and his sons</div>
                    <div className="level-1">B: All life on earth</div>
                    <div className="level-1">C: Curse on earth</div>
                    <div className="level-1">D: Flood announced</div>
                    <div className="level-2">G: Flood announced
                      <div className="level-3">G1: 7 days until flood
                        <div className="level-4">G2: Noah is skeptical
                          <div className="level-5">G3: Noah becomes convinced</div>
                        </div>
                        <div className="level-4">G2: The townspeople are skeptical</div>
                      </div>
                      <div className="level-3">G1: 7 days to build the ark</div>
                    </div>
                  </div>
                </div>

                <h2 id="post-3-7" className="blog-post-title">3.7: Plots with Problems</h2>
                <h5>3.7.1 	P.R.O.B.L.E.M</h5>
                <p>Bork<a href="#f2"><sup>2</sup></a> says at the heart of any story is a problem, which need to have seven characteristics, (a little too conveniently) creating the acronym PROBLEM:</p>
                <u>The Idea: The Seven Elements of a Viable Story for Screen, Stage or Fiction, Erik Bork.</u>

                <div className="p-3 mb-3 rounded custom-light-box">
                  <p className='purple-bold'>Punishing</p>
                  <p>It's long (lasts the whole story), every scene is spent trying to solve the problem. It may be complicated or get more complicated as the story goes on.</p>

                  <p className='purple-bold'>Relatable</p>
                  <p>Easy to identify with the problem on a human level. We care about the character's struggle, we stay invested.</p>

                  <p className='purple-bold'>Original</p>
                  <p>Something about the story is fresh and new, even if fits in conventional storytelling or genre. There is a spark of uniqueness to the idea or the way it's told.</p>

                  <p className='purple-bold'>Believable</p>
                  <p>It easy to accept or understand the problem, and feels real, seems driven by identifiable wants, needs and behaviour.</p>

                  <p className='purple-bold'>Life-Altering</p>
                  <p>The mission to resolve the problem is of huge importance to the charaters. If the problem isn't solved, life will be unthinkably worse for them. Something critical or primal is at stake. If the problem is solved, things will be much better.</p>

                  <p className='purple-bold'>Entertaining</p>
                  <p>The problem-solving process is fun to read and creates the desired emotional responses in the reader.</p>

                  <p className='purple-bold'>Meaningful</p>
                  <p>The reader comes away feeling that value has been added to their life, the story was worthwhile and resonates with them beyond the time spent reading it.</p>
                  <p>Knowing the story's central problem gives you a head-start to writing the logline, which, as Bork says, is a big part of the logline.</p>
                </div>

                <h5>3.7.2 	Bork’s Story Problems</h5>
                <p>Bork lists eight main types of story problems:</p>
                <div className="p-3 mb-3 rounded custom-light-box">
                  <ol>
                    <li>Someone or something is trying to kill me (or us). </li>
                    <li>Someone or something is trying to destroy my life as I know it. </li>
                    <li>I have a once-in-a-lifetime but incredibly difficult opportunity to rise up and be somebody, in a big way, that could forever change my sense of self. </li>
                    <li>I have to rescue someone from a potentially terrible fate. </li>
                    <li>I have to reach a distant and life-changing “prize,” which seems nearly impossible to do. </li>
                    <li>I have to defeat powerful “bad guys” who have hurt and/or are threatening innocents. </li>
                    <li>I have to escape a terrible situation, which prevents me from living freely and happily. </li>
                    <li>I have to win over and/or hang on to a desired life partner, with whom I have a chance at my best life. But something is hugely in the way of that.</li>
                  </ol>
                </div>

                <h5>3.7.3 	Snyder’s Story Problems</h5>
                <u>Save The Cat!, Blake Snyder.</u>
                <p>Blake Snyder says all stories centre around one of these 10 problems:</p><a href="#f3"><sup>3</sup></a>
                <div className="p-3 mb-3 rounded custom-light-box">
                  <ol>
                    <li><p className='purple-bold'>Monster in the House</p> Characters are trapped in a confined space with a ‘monster’ or dangerous entity out to get them.</li>
                    <li><p className='purple-bold'>Golden Fleece</p> The ‘quest’ myth: a hero goes on a journey in search of something, encountering interesting things or people along the way. Normally, by the end, the hero has undergone a personal transformation. </li>
                    <li><p className='purple-bold'>Out of the Bottle</p> A wish comes true for the protagonist or they get something akin to magic – for better or worse. Doesn’t have to be supernatural (e.g. someone accidentally comes into a fortune). The flipside is the wish ends up being a curse.</li>
                    <li><p className='purple-bold'>Dude with a Problem</p> An ordinary guy (or girl) finds himself in extraordinary circumstances. </li>
                    <li><p className='purple-bold'>Rites of Passage</p> Involve characters going through traditional milestone events (school, first relationship, wedding, mid-life crisis, etc)</li>
                    <li><p className='purple-bold'>Buddy Love</p> Two characters navigating plot problems together. Usually the buddies are opposites or in conflict, but learn to cooperate and appreciate each other.</li>
                    <li><p className='purple-bold'>Whydunnit</p> Normally detective stories, an exploration of human nature and the dark side of humanity.</li>
                    <li><p className='purple-bold'>The Fool Triumphant</p> Involve an underdog, a ‘little, silly, and overlooked man’ as protagonist, set against a ‘big establishment,’ who in the end is the one made the fool of.</li>
                    <li><p className='purple-bold'>Institutionalized</p> Involves a group as the protagonist (or the protagonist’s being indivisibly part of a larger group). The group may be a family, or have no relation other than all being in the same circumstances, e.g. colleagues, or soldiers, or mental patients. The group dynamic is often crazy and self-destructive, the themes relate to identity and the danger of herd mentality.</li>
                    <li><p className='purple-bold'>Superhero</p> The opposite of ‘Dude With A Problem’ – here, an extraordinary guy in an ordinary world. The person might be good or bad or just different. They don’t have to be supernatural.</li>
                  </ol>
                </div>

                <h5>3.7.4 	Problems with Plots</h5>

                <p>Howard Mittelmark and Sandra Newman list common problems with plots: </p><a href="#f4"><sup>4</sup></a>

                <div className="p-3 mb-3 rounded custom-light-box">
                  <p className='purple-bold'> I. The Lost Sock</p>
                  <p>The plot is too slight or trivial. </p>
                  <p>The plot of a story “should be important enough to change someone’s life forever.”<a href="#f5"><sup>5</sup></a> It should also have broad interest – just because you find something fascinating, doesn’t mean the broader public does.</p>
                  <u>Solutions: </u>
                  <ul>
                    <li>Ensure your plot revolves around a dilemma involving a ‘sex word’ (see 6.2 Sex Words);</li>
                    <li>Ensure your story is not a thinly veiled excuse for venting or proselytizing;</li>
                    <li>Make sure character or plot trivia is brief and in the background, not the foreground.</li>
                  </ul>

                  <p className='purple-bold'> II The Waiting Room</p>
                  <p>The substance of the plot is too long delayed. </p>
                  <p>Readers don’t want to ‘settle into’ a story; they want to start from the first sentence.</p>
                  <u>Solutions: </u>
                  <ul>
                    <li>Start the story as late as possible – i.e. as close as possible to the first important scene;</li>
                    <li>Smuggle description into active scenes;</li>
                    <li>Remove introspection; suggest thoughts and feelings through behaviour and dialogue;</li>
                  </ul>

                  <p className='purple-bold'> III. The Long Runway</p>
                  <p>A protagonist’s childhood is recounted for no purpose. </p>
                  <p>Readers don’t need to know everything about your protagonist; only as much necessary for the plot to make sense.</p>
                  <u>Solutions: </u>
                  <ul>
                    <li>Get rid of childhood memories if the plot makes sense without them;</li>
                    <li>Smuggle description into active scenes;</li>
                    <li>Explicate your protagonist’s character through present action and conflict</li>
                  </ul>

                  <p className='purple-bold'> IV. The Vacation Slide Show</p>
                  <p>Author substitutes location for story. </p>
                  <p>Author substitutes location for story.</p>
                  <u>Solutions: </u>
                  <ul>
                    <li>Settings should be described only to enrichen or add dimension to the plot;</li>
                    <li>Settings should be described in a way which says something about the characters who find themselves there (rather than your favourite bits, or the bits remembered best by you)</li>
                    <li>Alter or make up parts of settings which serve your plot better.</li>
                    <li>Ensure description of the setting is not being ‘contaminated’ by your personal opinion; e.g. words like ‘unbelievable’ and ‘amazing’ are suspect.</li>
                  </ul>

                  <p className='purple-bold'> V. The Smoking Gun</p>
                  <p>The reader is unintentionally mislead by details irrelevant to the plot. </p>
                  <p>Readers will assume that significant or interesting elements introduced throughout a story will have a payoff later, otherwise the reader may feel cheated.</p>
                  <u>Solutions: </u>
                  <ul>
                    <li>Ensure everything in your story furthers the plot.</li>
                  </ul>

                  <p className='purple-bold'> VI. Don't Mind Him</p>
                  <p>A character’s problems remain unexplored. </p>
                  <p>If characters have their own issues, these need to be resolved.</p>
                  <u>Solutions: </u>
                  <ul>
                    <li>Address problems with their own plot arcs </li>
                    <li>Make sure subplots don’t overshadow the main plot; otherwise minimize or remove them. </li>
                  </ul>

                  <p className='purple-bold'> VII. The Deafening Hug</p>
                  <p>The unintended love interest. </p>
                  <p>If a protagonist gives the slightest suggestion of flattering another character, the reader will run with it, inferring the protagonist is in love with the character (no matter how absurd or taboo).</p>
                  <u>Solutions: </u>
                  <ul>
                    <li>Tone down flattering descriptions of characters (particularly physical attributes);</li>
                    <li>Draw more focus to characters’ flaws (or give them flaws in the first place);</li>
                  </ul>
                </div>

                <h2 id="post-3-8" className="blog-post-title">3.8: Story Planning</h2>

                <h5>3.8.1 	Bottom-Up and Top-Down</h5>
                <p>Bottom-up (BU) writing means creating the tiny details first, and organising structure and story later. Top-down (TD) writing the opposite. </p>
                <p>Think of it like building a house: BU means laying the bricks first, working out how big each room will be later. TD means sketching your measurements first, so you know how many bricks you'll need, and exactly where they'll go, before you start laying them.</p>
                <p>A writer who says 'I make it up as I go along' is a BU writer.</p>
                <p>BU writing has its advantages. The problem is the writing community is almost exclusively reliant on it, and for the wrong reasons.</p>
                <p>Word count Olympics such as 'NaNoWriMo' and Stephen King's method of setting word count quotas fosters bottom up writing, causing top-down writing skill to atrophy. Pretty soon BU and writing are interchangeable and TD is entirely disregarded.</p>

                <div className="p-3 mb-3 rounded custom-light-box">
                  <p className='purple-bold'> Example of BU planning:</p>

                  <p className='indent-text-1'>There'll be a character called Dave Driver. He has a moustache. He wears a suit. He's a detective. He is cynical, but always first into office. A lawyer he used to hate became a barrister and then a judge. The judge slips implied insults in at the detective during court hearings. There are two prisons, one called ‘The Small Wolf,’ and one called ‘The Big Wolf,’ – ironically, the former is even worse than the latter. Someone smuggles a pet into the prison but it gets killed in a feud which kicks off a revenge sub-plot. Inmates write secret messages on playing cards and pass them to each other. An accused killer hates the sight of blood, but the prosecutor thinks this is faked. When he was a kid, the prosecutor saw someone drown, but didn’t alert anyone to help…etc.</p>
                </div>

                <div className="p-3 mb-3 rounded custom-light-box">
                  <p className='purple-bold'> Example of TD Planning:</p>
                  <p className='indent-text-1'>It'll be a supernatural crime story. In the first Act there'll be a really strange murder. In the second Act the perpetrator is suspected innocent by the unpopular detective, but the body goes missing. In the third Act the detective has to fight the system to prevent the innocent getting executed, and get him out of prison. At the conclusion the victim turns out to be a shapeshifter (or intelligent zombie). The detective fails to prevent execution of the innocent, but he was infected by the zombie anyway, so it's a bittersweet ending as the innocent accepts the execution, but the detective doesn’t. In the epilogue, it’s implied the execution failed, because the innocent is now a zombie/shapeshifter as well – maybe his body has gone missing from the morgue.</p>
                </div>
                <p>See how in BU planning it takes a long time – if at all – to get an entire plot? But in TD planning you end up with a plot outline really quickly. You might be wondering: how did you come up with that plot outline so quickly (less than ten minutes) – see the sections on E Chain and Right-Angled Plot. </p>

                <h5>3.8.2 	Word Generation is not Storytelling</h5>
                <p>Don’t get word generation confused with story writing. When you write, making it up as you go along (or start off with BU writing), you’re experimenting with idea generation, but you have no story. Remember, from ‘1.2.3 More than a Series of Events,’ a story is not merely a series of events or details. It has gestalt meaningfulness. The example of BU planning above, is not a story. It’s a series of events or details – any one of them can be added or removed without substantive loss or gain. The example of TD planning, above, is a story. You cannot remove any single element without changing the overall meaning.</p>

                <h5>3.8.3 	Plot Pressures</h5>
                <p>In a game of chess you can never play a completely free game where you can make any move you want. You're always under pressure to some extent by your opponent's moves (as your opponent is constrained by your moves).</p>
                <p>In a story, every character's actions are under narrative pressures, being setting, other characters' actions, general events, etc.</p>
                <p>You want the reader to be convinced your protagonist acted naturally the way they did. In a game of chess, if the opponent's queen is available to you, you take it, unless there is a good reason you don't want to win. This is the same in a story; if certain actions are open to the protagonist, and they don't take them -- and there is no previously established reason why -- your character will not be convincing. They will be seen as a puppet.</p>

                <p><strong>External pressures </strong>tend to be more persuasive than <strong>internal pressures</strong>. For instance, saying 'the protagonist didn't do X because he's dumb' is an internal pressure; it's easy but bad writing. Bad weather is an external pressure, but it's also easy and unpersuasive. Good pressures tend to be a mix of internal and external pressure foreshadowed in earlier scenes; i.e. protagonist is X type of person, therefore, in a type Y scenario, they're likely to fail. Finding a way to get this info across tacitly within the plot (as opposed to merely being expository) is part of good writing technique. Really good writers get this info across inobtrusively inside exciting plot-moving scenes, without you even realising it; it's only later when the 'Y scenario' eventuates, you flip back and realise it was always heading that way.</p>
                <p>A good story will early on introduce the protagonist as a X type of person (internal pressure) and that a Y type of scenario (external pressure) looms on the horizon. But, also show protagonist averting this – and failing. Then attempting to avert again – and failing. The situation grows more desperate as type Y scenario looms. Finally protagonist must confront type Y scenario.</p>

                <h2 id="post-3-9" className="blog-post-title">3.9: Romance: Three Kinds</h2>
                <p>This tip relates not only to romance genre stories but any plot with two love interests (LI) who get together by the end of the story. There are generally three kinds of romances: Pursuit; Revelation, and Conspiracy. </p>

                <p className='purple-bold'> (1) Pursuit</p>
                <p>The protagonist is in love and spends the story actively pursuing their LI. Usually, the LI either doesn’t know the protagonist exists, or doesn’t know the ‘true’ protagonist.</p>
                <p>Plot points should work to keep the LIs as apart as possible, motivating the protagonist to re-double his/her efforts to pursuit. This means putting up obstacles in protagonist’s way, and making him/her overcome them. </p>
                <p>The LIs need not be kept physically apart. The protagonist may already be very close to the LI, but have some secret true self they have not revealed to the LI (e.g. a superhero alter ego, or something more subtle). For instance, in tragicomic romance Cyrano de Bergerac, love interests Cyrano and Roxane are frequently together and interacting, but never in a relationship, because both characters hide their true desires from each other.</p>

                <p><u>Types of Pursuit</u></p>

                <p className='blue-bold'> (A) Direct Pursuit</p>
                <p>If the plot trajectory is a strict pursuit of the LI, the pursuit is ‘direct’. The ‘rescue’ is the most classic form: the LI (e.g. a princess) is kidnapped, and the protagonist (e.g. a knight) goes to save her. The obstacle may be the physical distance separating the LIs, or a dangerous situation or threat. Once the obstacle has been overcome, mutual union is virtually guaranteed.</p>

                <p className='blue-bold'> (B) Pursuit by Proxy</p>
                <p>The protagonist engages in a pursuit whose reward is not the LI themselves, but a resource which will help the protagonist win the LI. This means there are actually two pursuits: the plot obstacle, and winning the LI. Failing the first does not eliminate the second, but conversely, winning the first does not guarantee the second.</p>
                <p>You have latitude to go for a ‘Pixar’ ending here; regardless of the obstacle outcome (won or lost) it does not represent the story’s ultimate resolution. Instead, the protagonist successfully utilizes the lessons learned in the process to win the love interest in an oblique way. It may be creative, but should seem to be simpler or make more intuitive sense; avoid an oblique victory which completely invents a never before referenced method for winning the LI. The victory should not introduce new story material; it’s got to conclude everything that’s come before.</p>

                <p><u>Potential Pitfalls of Pursuit</u></p>
                <p className='blue-bold'> (A) The Love Interest is the obstacle</p>
                <p>The obstacle should not be the protagonist’s refusal to accept ‘no’. Thus, the obstacle should not be the LI his/herself (i.e. his/her dismissal of the protagonist). The LI should never say ‘no.’ If a protagonist pursues a LI who has dismissed them, they have become deluded. The obstacles should hinder protagonist’s attempts to so much as get close to the LI, or enable him to ask her out or charm her. This is probably why the cliché ‘rescue’ is so popular; it’s a useful obstacle to keep the LIs apart without any unfortunate intimation the ‘damsel’ is deliberately separating herself from the protagonist.</p>
                <p>LIs may have disagreements with the protagonist (it’s more interesting than a ‘yes man’ character), but it should be mutual rather than a ‘I’m right, you’re wrong’ scenario. In a good resolution, both characters learn, grow and change, and admit they were wrong before reconciling.</p>

                <p className='blue-bold'> (B) The Love Interest's will is overcome</p>
                <p>Avoid the unfortunate implication that the LI has been overcome by sheer brute force. This is particular problem with the rescue pursuit, where the protagonist has done something so massively favourable to the LI (such as saving their life), the LI is put in an uncomfortable situation where they practically must accept the protagonist as an eligible suitor, compatibility be damned! </p>
                <p>A story may be susceptible to this where the pursuit involves intense or lengthy effort. It militates away from the LI’s agency/latitude to select what they want, and characters who lack separate goals from the protagonist are generally weak and un-engaging characters.</p>
                <p>It is more meaningful if the LI has the latitude to choose, but ultimately does select the protagonist freely. You may even emphasize their free choice by putting the LI in a position where selecting the protagonist would entail risks or stakes, and the LI chooses them anyway. This may create a ‘reverse pursuit’ where the LI bears hardship to pursue the protagonist – much more satisfying than if it was one-sided.</p>

                <p className='purple-bold'> (2) Revelation</p>
                <p>The protagonist isn’t in love initially, but later in the story, comes to a revelation that they have fallen in love with someone who was there all along.</p>
                <p>In contrast to ‘pursuit’ the plot should work to keep the LIs as together as possible, even against their personal preferences. There may be some exterior device to justify this: the LIs are members of a team tasked with some objective, and fall in love incidentally, or even at the risk of the objective (to create conflict and suspense). Such a device is especially necessary if LIs despise or deride each other initially. </p>
                <p>An example of the Revelation is The Silver Linings Playbook. Interestingly, the romance type is different depending which LI is the protagonist. From the male's point of view, it's a revelation, but if the female was the protagonist, it would be a pursuit.</p>

                <p><u>Potential Pitfalls of Revelation</u></p>
                <p className='blue-bold'> (A) Unlikeable Love Interests</p>
                <p>Conflict in a revelation romance can be heightened the more LIs oppose each other. But oppositional LIs does not mean annoying, confrontational, disagreeing LIs. Sexual tension does not mean characters have to snap at each other over minor disagreements. </p>
                <p>Bad revelations read like stories where LIs sit around all day stewing on how annoying it would be to have sex with the other – incredibly uncompelling. The protagonist should want to have sex with the LI, but it’s not open to them in the circumstances – this is what creates the sexual tension; the characters want, but cannot have each other, yet must stick together anyway to complete some plot task. Do not try to hide this fact from the audience, they know better. </p>
                <p>Protagonists who hide behind a resentful fantasy that the LI is annoying and obnoxious shoot themselves in the foot. Either the LI is truly obnoxious, or the protagonist is the obnoxious one for falsely claiming the LI is. Either way, one or both of your characters is obnoxious and risks audience disengagement and sympathy.</p>
                <p>The same rule for obstacles under pursuit romances apply to the obstacles for revelation: characters should be blindsided by the developing romance due to external pressures, not internal pressures. Internal pressures occur inside the characters themselves, e.g. lack of insight that one has a crush, refusal to admit they could ever fall for that type of person, not wanting to be in a relationship, etc. External pressures are forced upon the character from outside: e.g. having to choose between LI and an important assignment/task, spending time with LI ingratiates protagonist into LIs ‘world’ which has bad points, spending time with LI is necessary but costly, etc.</p>

                <p className='purple-bold'> (3) Conspiracy</p>
                <p>It’s evident the LIs love each other deeply, but the externalized obstacle is broad and sweeping, possibly global, cultural – the story’s entire milieu is the antagonist. It’s usually some outside force (e.g. their small-minded community) set upon keeping them apart. There is an understanding the union breaks the accepted rules and customs or infringes some social code, or risks some great harm to society. Alternatively, it may bring about a bad event. Or, maybe nothing bad would happen, rather a good thing would be foreclosed. It doesn’t matter if the risk would not happen, only that the antagonist is convinced it would happen – often the conclusion involves realizing the antagonist’s dire projections were proven categorically wrong.</p>
                <p>Examples of the conspiracy romance include Romeo and Juliet, 1984, and Twilight. </p>
                <p>It may also be an internal obstacle: the LIs own consciences dissuading them from union. It may be mundane: one LI has a medical or mental condition which makes union more challenging. If a protagonist is gradually being destroyed by the relationship’s toll or even dies, it almost definitely is a Conspiracy. </p>

                <h5>3.9.1 Main Differences Between the Three Types</h5>
                <p>These romances may overlap, the main distinction where the LIs begin the story, in terms of how they feel towards each other. </p>
                <ul>
                  <li>In a <strong>Pursuit</strong>, the affection is initially unilateral, which is what drives the pursuit. The end goal is the pursuit becoming mutual (the LI reciprocating the affection);</li>
                  <li>In a <strong>Revelation</strong>, the affection is non-existent initially, although not necessarily mutually so – the LI may like the protagonist, but cannot be the converse. The main plot goal drives the story, and the inevitable emergence  of affection creates a kind of obstacle (more accurately, the plot goal is the obstacle of the affection);</li>
                  <li>In a <strong>Conspiracy</strong>, the affection is present initially. The goal is not for the relationship to begin or develop, but to endure. If anything, the relationship may slowly risk eroding or destructing as the story progresses. </li><a href="#f7"><sup>7</sup></a>
                </ul>

                <p>Know which type best suits which genre: pursuits work well for almost anything, particularly adventure and action, but not horror. Revelation works better in horror. Conspiracy works well for time-period altered stories (set in the future or past) or anything with background lore, but not so well for action or adventure. </p>

                <h5>3.9.2 Other Types</h5>
                <p>There might conceivably be other types of romances, such as romantic tragedies such as ‘unrequited romances’ or the traditional ‘comic’ romance where several characters are wrongly paired due to misunderstanding and switch to the correct partners at the conclusion. However, Chris Booker would probably argue these are merely ‘dark’ versions of the established types, e.g: <a href="#f8"><sup>8</sup></a></p>
                <p>The unrequited romance is merely a ‘dark’ pursuit; the protagonist never actually gets the LI. </p>

                <h5>3.9.3 Final Note: Mixing It Up: </h5>
                <p>Making these delineations is not to say a romance must follow them on rails. You might have a romance which fuses different elements of all three.</p>
                <p>For instance, a protagonist starts with a pursuit in the first act. By the end of the first act protagonist has successfully ‘won’ the LI, but now realizes he/she is different than first appeared (e.g. by deceit or misunderstanding). In the second act, the protagonist is stuck with the LI to the completion of a task, and in the meantime, gives them a second chance, getting to know them better (and accurately). In the third act, the protagonist has a revelation he/she has fallen in love with the accurate LI, but some larger force now conspires to keep them apart (bonus points if it was something the protagonist earlier set off after being insulted by the LIs deceit).</p>
                <p>Beauty and the Beast is an example: the first act is a pursuit (Belle seeks a handsome prince via adventure); the second act is a revelation (Belle falls in love with the Beast); the third is a conspiracy (the villagers attempt to keep Belle and the Beast apart).</p>

                {/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

                <ThoughtForm />
                <ThoughtList />

                {/* ------------------------------------------------- footnotes --------------------------------------------- */}

                <div className="footnotes">
                  <div className="p-3 mb-3 rounded pixar-box">
                    <h4>Footnotes</h4>
                    <ol>
                      <li id="f1">Blake Snyder, <i>Save The Cat! Strikes Back: More Trouble For Screenwriters To Get Into...And Out Of.</i></li>
                      <li id="f2">Erik Bork, <i>The Idea: The Seven Elements of a Viable Story for Screen, Stage or Fiction.</i></li>
                      <li id="f3">Blake Snyder, <i>Save The Cat! Strikes Back: More Trouble For Screenwriters To Get Into...And Out Of.</i></li>
                      <li id="f4">Howard Mittelmark and Sandra Newman., <i>How NOT to Write a Novel.</i></li>
                      <li id="f5">Howard Mittelmark and Sandra Newman., <i>How NOT to Write a Novel.</i></li>
                      <li id="f6">If the protagonist was the female, it would be a pursuit (she literally pursues him), whereas he takes longer to heal from past trauma and be ready for a new relationship. But because it’s from the protagonist’s POV, it’s revelation.</li>
                      <li id="f7">See Romeo and Juliet.</li>
                      <li id="f8">Chris Booker, <i>The Seven Basic Plots.</i></li>
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
              <p className="mb-0-1">A plot maps out the whole core structure of a story, through each scene, from beginning to end.</p>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Index</h4>
              <ol className="list-unstyled mb-0">
                <li><a href="#post-3-1">3.1: Plotting in a Vacuum</a></li>
                <li><a href="#post-3-2">3.2: Types of Plots</a></li>
                <li><a href="#post-3-3">3.3: The Inciting Incident</a></li>
                <li><a href="#post-3-4">3.4: Three Act Structure</a></li>
                <li><a href="#post-3-5">3.5: Three Right-Angled Turns</a></li>
                <li><a href="#post-3-6">3.6: Chiastic Structure</a></li>
                <li><a href="#post-3-7">3.7: Plots with Problems</a></li>
                <li><a href="#post-3-8">3.8: Story Planning</a></li>
                <li><a href="#post-3-9">3.9: Romance: Three Kinds</a></li>

              </ol>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Also See</h4>
              <ol className="list-unstyled">
                <li><a href="/Story">1. Story</a></li>
                <li><a href="/Premise">2. Premise</a></li>
                <li><a href="/Title">23. Title</a></li>
              </ol>
            </div>
          </aside>
        </div>
      </main>

    </div>
  );
}
