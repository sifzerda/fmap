import '../App.css'
import antagBanner from '../assets/antagbanner.jpg'
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

export default function Antagonists() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <h1 className="display-4">Antagonists</h1>

        <div id="wrapper" className="text-left">
          <p className="lead my-3">Nobody is a villain in their own story. We are all heroes in our own stories </p>
          <i>— George R. R. Martin</i>
        </div>
      </div>

      <div className="card flex-md-row mb-4 box-shadow h-md-250 p-0">
        <img className="card-img-top w-100" src={antagBanner} alt="Thumbnail" />
      </div>

      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">
              <h2 id="post-16-1" className="blog-post-title">16.1: What is an Antagonist?</h2>
              <div id="content">

                <p>DEFINE ANTAGONISM/ANTAGONIST</p>

                <h2 id="post-16-2" className="blog-post-title">16.2: The Importance of an Antagonist</h2>
                <p>A story and its protagonist is only as interesting as its villain or force of opposition – it’s ‘antagonist.’</p>
                <p>Elsewhere I mentioned the law of conservatism; the economic and narrative principle that people do the bare minimum unless incentivized to do more. Consider this law also applies to your antagonist. The disregard of this law is usually the culprit behind poor antagonists; this is where you see flagrant and decadent villains, more surface than substance, written by authors who believe the mindless slaughter of 100 good men makes a compelling villainous act. But apply the law of conservatism and ask: </p>

                <ul>
                  <li>Why would someone go to the trouble of slaughtering 100 people for no reason? </li>
                  <li>Why would someone adopt an intimidating dress and appearance and draw negative attention to themselves? </li>
                  <li>Why would someone alienate themselves through speech and mannerism?</li>
                  <li>Why would someone recklessly make enemies with anyone and everyone?</li>
                  <li>Why would someone waste energy and effort only to cause pain, and nothing else?</li>
                </ul>

                <p>Yes, people act like this in real life. But remember, fiction is not real life, nor should it strive to be. Authors who try to slide around this by suggesting the villain is inherently ‘evil’ only betray their lack of insight into the nuance and neutrality of human decision-making and selection pressures. By claiming your character is evil by design, you expose your own lack of faith in your ability to create an authentic antagonist, instead requiring one ‘pre-made.’ </p>
                <p>Applying the law of conservatism, a compelling villain faces a dilemma (like the protagonist does), putting them in a position requiring them to choose between two or more undesirable options. Like anyone, they want to choose the option that is least desirable for themselves. Unfortunately, this choice has a negative consequence for the protagonist.</p>
                <p>Alternatively, the villain faces a positive dilemma: a choice between good things. They want the best option, however, this choice has negative consequences for the protagonist. </p>

                <h2 id="post-16-3" className="blog-post-title">16.3: Antagonistic Forces</h2>
                <p>Another point: antagonists don’t have to be living entities, they can be forces. These are the stories which don’t have ‘bad guys,’ just people making decisions, for better or worse. Whatever form the antagonist takes, it’s job is to oppose the protagonist’s will, desire and progress.</p>

                <h2 id="post-16-4" className="blog-post-title">16.4: Degrees of Antagonism</h2>
                <p>Your antagonist doesn’t have to be the exact opposite of your protagonist. An antagonist who is in some ways similar or even identical to the protagonist (or someone close to the protagonist, e.g. lover, family, friend) may be more compelling. </p>
                <p>Distinguish ‘Contradiction’ and ‘Contrariness’:</p>
                <p>Where an antagonist is ‘contrary,’ there exists a non-zero sum game. An antagonist who is contrary can exist in the protagonist’s world without a ‘cancelling out’ effect. They might undermine, but not undo the protagonist’s efforts. They won’t necessarily be against what the protagonist is for, but their goals are not compatible and their actions makes the protagonist’s job harder.</p>
                <p>Compare with a ‘contradictory’ antagonist. Their values and goals are interlinked in direct opposition, which creates a zero sum game where only one can triumph. Together the protag and antag create a potential ‘cancelling out.’ The ‘town’ is not big enough for both the protagonist and antagonist to co-exist. The closer they get, the more imperative it becomes that one defeats or subverts the other.</p>
                <p>You may have both antagonistic forces in your story: the protagonist progresses past contrary sub-antagonists until finally facing off against the contradictory head antagonist.</p>
                <p>Alternatively, your head antagonist starts off contrary, but transforms into a contradictory antagonist by the end.</p>
                <p>If you find your protagonist too ‘good’ and your antagonist too ‘evil’, Sol Stein<a href="#f1"><sup>1</sup></a>  suggests thinking of “the protagonist and the antagonist as two antagonists [against each other, and] each of whom should be given his due[...] it makes for more credible conflict.” And don&apos;t forget, “the better the villain, the greater the contest and the hero&apos;s victory.”</p>
                <u>How To Grow A Novel, Sol Stein.</u>

                <h2 id="post-16-5" className="blog-post-title">16.5: The Negation of a Negation</h2>
                <p>This is a concept introduced by Robert McKee. </p><u>ROBERT MCKEE BOOK</u>
                <p>Think of the antagonist as basically the negation of the protagonist. The protagonist stands for certain values. Whatever they are, the antagonist stands for the opposite value/s. Some examples are: truth/deception; justice/injustice; idealism/materialism; love/power; money/integrity…etc.</p>
                <p>A more effective, even sublime, antagonist is ‘the negation of a negation.’ This is where the antagonistic forces go even further than negation, making even the original antagonist look good by comparison. A ‘neg x neg’ turns the original pos/neg dichotomy on its head.</p>
                <h5>16.4.1 Values Are Neutral</h5>
                <p>Remember, all values are neutral – money could be positive, and love negative; for instance a young teen novel about a poor high school graduate who learns to delay young, idealistic romance until they’re older, in order to focus on getting a job and making themselves financially secure. </p>
                <p>Example:</p>
                <p>Let’s say the value dichotomy is intelligence/ignorance.<a href="#f2"><sup>2</sup></a> This is a neutral dichotomy and could go either way. For instance, while George Orwell’s 1984 made intelligence the positive value, Daniel Keyes, Flowers for Algernon, made intelligence the negative value. There are two potential ‘neg x negs’: if ignorance is the negative value, the neg x neg is ignorance confused for intelligence. If intelligence is the negative value, the neg x neg is intelligence confused for ignorance.</p>
                <p>These are even worse situations than the negatives, because not only is the negative the state of affairs, but it’s not being responded to as the true state of affairs. If something is not recognized for what it is, it cannot be challenged and subverted. So it’s like there are two levels of antagonism: the value’s existence and its lack of acknowledgement/resistance.</p>
                <p>More examples of neg x negs:</p>

                <ul>
                  <li><span className='green-text-span'>Positive value:</span> Loyalty; <span className='red-text-span'>Negative value:</span> Betrayal; <span className='blue-text-span'>Neg x Neg:</span> Self-betrayal.</li>
                  <li><span className='green-text-span'>Positive value:</span> Integration; <span className='red-text-span'>Negative value:</span> Alienation; <span className='blue-text-span'>Neg x Neg:</span> Insanity (alienation from self) </li>
                  <li><span className='green-text-span'>Positive value:</span> consciousness;  <span className='red-text-span'>Negative value:</span> Death; <span className='blue-text-span'>Neg x Neg:</span> damnation</li>
                  <li><span className='green-text-span'>Positive value:</span> truth;  <span className='red-text-span'>Negative value:</span> lies; <span className='blue-text-span'>Neg x neg:</span> self-deception</li>
                  <li><span className='green-text-span'>Positive value:</span> love;  <span className='red-text-span'>Negative value:</span> hate; <span className='blue-text-span'>Neg x neg:</span> self-hate</li>
                </ul>

                <p>Generally, stories will start on the positive and progress from contrary antagonism, to contradictory, to negation of negation, and then resolution.</p>
                <p>However, you could begin with the negation of a negation, and work back, using the rest of the story to explain how the protagonist got to ‘the bottom,’ or showing the protagonist slowly pull themselves up to the positive value at the end. </p>

                <h5>16.4.2 Values Are Not Necessarily Polarized</h5>
                <p>You don’t have to make the positive and negative values strictly opposites.</p>
                <p>Take the example of Romeo and Juliet. Some interpret Romeo and Juliet as mocking the destruction and melodrama of teen love, which would make love a negative value in that play. In addition, the teens’ parents grudging war is also a negative value. Both result in the destruction of the protagonists. ‘Hate’ on one side, ‘love’ on the other, and both negative. The only value left to be positive, is a middle position; a more realistic, restrained, mature form of love and tolerance; a love that recognises the other side isn’t perfect and has flaws.</p>

                <h2 id="post-16-6" className="blog-post-title">16.6: Protagonist = Antagonist</h2>

                <p>You don’t necessarily need to displace the forces of antagonism into a separate entity. It’s possible to make your protagonist his/her own antagonist. This doesn’t mean the main character is the ‘bad guy,’ like McTeague’s greed screwing everyone over, or Patrick Bateman killing people. It also doesn’t mean your protagonist is trying to be a good guy but going about it in a questionable way, like Edmond Dantes getting extreme, vindictive revenge on wrongdoers. It means your protagonist is the ‘good guy’ but his/her personal flaws and failings threaten to prevent them from achieving the ultimate plot goal. An example are the parents in the short story, ‘The Monkey’s Paw,’ not villainous characters, however their (understandable) horror and desperation causes them to make an unwise decision/s.</p>

                <h2 id="post-16-7" className="blog-post-title">16.7: How to Create an Antagonist</h2>
                <p>If you have a protagonist and a plot (goals) you’re already on the way to creating an antagonist. You just need to:</p>

                <ol>
                  <li>Consider what your protagonist’s goal is; ask yourself, if your protagonist could wave a magic wand, what one thing would they wish for? </li>
                  <li>What is the opposite of what your protagonist wants? This will be the antagonist’s goal;</li>
                  <li>Consider why your antagonist wants their goal – it may even be for the same reason the protagonist wants their goal;</li>
                </ol>

                <p>Example #1:</p>
                <ul>
                  <li>Protagonist’s goal = friends</li>
                  <li>Antagonist’s goal = solitude</li>
                  <li>Antagonist’s motivation = antagonist wants to convince protagonist’s friends to split, so they will leave him (and protagonist) alone</li>
                </ul>

                <p>Example #2:</p>
                <ul>
                  <li>Protagonist’s goal = friends</li>
                  <li>Antagonist’s goal = friends</li>
                  <li>Antagonist’s motivation = antagonist wants to steal protagonist’s friends (leaving protagonist with none)</li>
                </ul>

                <p>Then, referring back to 14.4 The Negation of a Negation, the negxneg in both above cases would be for protagonist to be friendless, but duped into thinking he has friends. The antagonist may cause this to prevent protagonist from challenging his influence.</p>

{/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

<ThoughtForm />

<ThoughtList />

{/* ------------------------------------------------- footnotes --------------------------------------------- */}

                <div className="footnotes">
                  <h4>Footnotes</h4>
                  <ol>
                    <li id="f1">Sol Stein, <i>How To Grow A Novel.</i></li>
                    <li id="f2">For instance, while George Orwell’s <i> 1984 </i>made intelligence the positive value, Daniel Keyes  <i> Flowers for Algernon </i>made intelligence the negative value. </li>
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
                <li><a href="#post-16-1">16.1: What is an Antagonist?</a></li>
                <li><a href="#post-16-2">16.2: The Importance of Antagonism</a></li>
                <li><a href="#post-16-3">16.3: Antagonistic Forces</a></li>
                <li><a href="#post-16-4">16.4: Degrees of Antagonism</a></li>
                <li><a href="#post-16-5">16.5: The Negation of a Negation</a></li>
                <li><a href="#post-16-6">16.6: Protagonist = Antagonist</a></li>
                <li><a href="#post-16-7">16.7: How to Create an Antagonist</a></li>
              </ol>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Also See</h4>
              <ol className="list-unstyled">
                <li><a href="/Conflict">5. Conflict</a></li>
                <li><a href="/MainCharacters">7. Main Characters</a></li>
                <li><a href="/Suspense">13. Suspense</a></li>
              </ol>
            </div>
          </aside>
        </div>
      </main>

    </div>
  );
}
