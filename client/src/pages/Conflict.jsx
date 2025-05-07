import '../App.css'
import conflictBanner from '../assets/conflictbanner.jpg'
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';

export default function Conflict() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <h1 className="display-4">Conflict</h1>

        <div id="wrapper" className="text-left">
          <p className="lead my-3">Happiness is an allegory, unhappiness a story </p>
          <i>— Leo Tolstoy</i>
        </div>
      </div>

      <div className="card flex-md-row mb-4 box-shadow h-md-250 p-0">
        <img className="card-img-top w-100" src={conflictBanner} alt="Thumbnail" />
      </div>

      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">
            <h2 id="post-5-1" className="blog-post-title">5.1. What is Conflict?</h2>
            
              <div id="content">

                <p>Conflict is struggle between your protagonist and their goals. Conflict is hardship but it is not ‘Fate,’ ‘Adversity,’ ‘Bad Luck,’ ‘Misfortune,’ or ‘Coincidence.’  These things happen by blind accident or by random chance. They are caused by forces which are indifferent to your protagonist, have no explanation, no resolution, and no purpose. They make the existence of your protagonist unnecessary because they would have happened anyway, to someone else, or no one at all. </p>
                <p>That’s not to say you can’t write a flash flood or lottery win into your story; but it’s not the conflict. The conflict is the struggle this causes to your protagonist. Also, accidents can happen in your story, but they must communicate important information. For instance, if accidents repeatedly happen it’s not the accidents themselves that are important, it’s that your character is accident-prone, or reckless, or impulsive and this is important for later. In fact, an unexpected accident, or misfortune is a great way of showing an unexpected side to your character; how they react in a stressful situation, etc.</p>
                <p>By contrast with fate and chance, conflict happens in measures, proportionate to your protag’s goal progress. You can’t decide what happens in your story based on the flip of a coin.</p>
                <p>Conflict also gives your character an opportunity to respond; they have some power to try to change the course of events (even if they fail). Blind misfortune, on the other hand, doesn’t care who your protagonist is, and gives him no opportunity, and no recourse.</p>

                <div className="p-3 mb-3 bg-light rounded">
                  <p className="mb-0">Your character can&apos;t sit home passively and accidentally get a telephone call from friend Max, who then volunteers a crucial clue in the murder mystery. Your character has to think things over and then decide that he will call people seeking information. After calling several other people, he comes to Max on his list. He calls Max. Max doesn&apos;t want to tell him, but you make your character persist. Finally your character convinces Max to talk, and Max gives him the next clue.</p>
                  <p></p><i>— Jack Bickham.</i><a href="#f1"><sup>1</sup></a>
                </div>

                <p>Notice how the conflict, by making the information harder to get, makes it seem more valuable and after the effort, will make the reader more interested to know what it is. This reinforces an economy of information (see 11.3 Information Economy).</p>

                <h2 id="post-5-2" className="blog-post-title">5.2. Why Is It Important?</h2>
                <p>Conflict is the most crucial element of a story. It’s a thread which should run through every aspect of your story. However, conflict is difficult to write because it often means making things harder for your characters – and yourself, as the writer. </p>
                <p>If there is a lack of conflict in your work, it might be due to use of ‘blocking’ or providing ‘counteroffers’ which fall short of the initial ‘promise’.  </p>
                <p>Any scene with conflict must be ‘shown’ as if it’s happening, not ‘told,’ (summarized). </p>

                <h2 id="post-5-3" className="blog-post-title">5.3. Types of Conflict</h2>
                <p>Robert McKee outlines 3 types of conflict. You can distinguish these by whether it involves individuals or entities:</p>

                <h5>5.3.1 	Inner Conflicts</h5>
                <p>These involve the minds and selves of characters; struggles not articulated to or involving other characters. There is one individual involved: the character themselves, but there is no conflict between separate individuals.</p>

                <h5>5.3.2 	Personal Conflicts</h5>
                <p>These are conflicts involving a second person, struggles involving friends, immediate family, lover, colleagues, etc. Involves at least two individuals: the character and another character. May involve more, but note every major participant must be a separate individual (i.e. stand for themselves and their own beliefs). </p>

                <h5>5.3.3 	Extra-Personal Conflicts</h5>
                <p>These are conflicts involving the character and a larger body, including families, organisations, societal groups, systems, governments, nations, races and species. There may be many people involved, however, they are not individuals but ‘agents’ for an ‘entity – they stand for/represent a larger belief or group.</p>

                <h2 id="post-5-4" className="blog-post-title">5.4. Conflict ≠ Fight</h2>
                <p>Many people hear ‘conflict’ and immediately think of a fight: verbal or physical. The problem with this notion is that you put an overt ‘fight’ in your story every time you want to add conflict, it will emotionally exhaust your reader, and make your characters implausibly argumentative, and by extension unlikeable. A better way of conceiving of conflict is in the context of a ‘conflict of interest’; like the scenario you may face where your professional duty is in opposition with your personal interest. </p>
                <p>Another misconception is that you need a ‘big’ scene to convey ‘big’ conflict. Often it’s more effective to convey big conflict through small scenes. Look at this example from Harper Lee’s ‘To Kill a Mockingbird,’ — </p>

                <p className='indent-text-1'>&quot;Atticus,&quot; I said one evening, &quot;what exactly is a nigger-lover?&quot; Atticus&apos;s face was grave. &quot;Has somebody been calling you that?&quot;</p>
                <p className='indent-text-1'>&quot;No sir, Mrs. Dubose calls you that. She warms up every afternoon calling you that. Francis called me that last Christmas, that&apos;s where I first heard it.&quot;</p>
                <p className='indent-text-1'>&quot;Is that the reason you jumped on him?&quot; asked Atticus.</p>
                <p className='indent-text-1'>&quot;Yes sir...&quot;</p>
                <p className='indent-text-1'>&quot;Then why are you asking me what it means?&quot;</p>
                <p className='indent-text-1'>I tried to explain to Atticus that it wasn&apos;t so much what Francis said that had infuriated me as the way he had said it.</p>
                <p className='indent-text-1'>&quot;It was like he&apos;d said snot-nose or somethin&apos;.&quot;</p>
                <p className='indent-text-1'>&quot;Scout,&quot; said Atticus, &quot;nigger-lover is just one of those terms that don&apos;t mean anything—like snot-nose. It&apos;s hard to explain—ignorant, trashy people use it when they think somebody&apos;s favoring Negroes over and above themselves. It&apos;s slipped into usage with some people like ourselves, when they want a common, ugly term to label somebody.&quot;</p>
                <p className='indent-text-1'>&quot;You aren&apos;t really a nigger-lover, then, are you?&quot;</p>
                <p className='indent-text-1'>&quot;I certainly am. I do my best to love everybody...&quot;</p>

                <p>Ostensibly this scene is merely about a father telling his daughter what a term means. But it’s got that everyone-at-the-table-goes-dead-silent quality because it goes to the critical conflict of the story; the exposure of the innocent children to the racial hatred of the town.</p>

                <h5>5.4.1 	Conflict of Interest</h5>

                <p>You tend to see conflict defined generally as where the protagonist faces an obstacle in pursuance of the plot goal. The classical manifestation of conflict is where the protagonist is opposed by the antagonist, which is resolved by a fight. But alternatively, a character may find themselves in conflict by a scenario where two opportunities are open to them; one consistent with their personal desires (e.g. sticking by the love interest), and the other consistent with their moral values (e.g. sticking by the best friend). There is no antagonist in this situation (though there will be antagonistic forces influencing the protagonist’s choice), although the love interest or friend may subsequently become the antagonist, if they are spurned by the protagonist.  </p>
                <p>In this sense we should conceive of conflict more broadly, not as an obstacle or force of antagonism, or ‘fight’, but as a zero sum game situation where the protagonist has multiple interests but must make a decision which will foreclose at least one of them. Applied in the classic sense, the protagonist may (1) oppose the villain; or (b) do nothing. The conflict is not necessarily the obstacle posed by the antagonist (or anything to do with the antagonist); it’s that the protagonist must give something up. All conflict comes down to being in a situation where, by making a decision, you stand to lose something, and that makes the decision difficult.</p>

                <h5>5.4.2 	Promise a Difficult Decision</h5>
                <p>You don’t need to write in a ‘fight’ scene to make conflict. You may merely pose a zero-sum-game choice to the protagonist. The problem with doing that is you require the protagonist to choose; and once the choice is made, the conflict dissipates. The conflict is stronger before the protagonist makes the choice. So consider inserting conflict through subtext and promise, which may then eventually culminate and get resolved by a confrontation. And the purpose of this subtext and promise is to remind your reader that there will be a confrontation.</p>
                <p>The decision may play out in different ways. One, the protagonist may anguish over the inevitable decision long before it happens. An example of this is in The Jungle Book, where, throughout the story, Mowgli’s conflict is that he is torn between living amongst the animals rather than living amongst humans. He gradually shows more interest in returning to humankind, and, when the animals become alienated from him, ultimately returns to the human village. Two, the decision may come prematurely, and the protagonist makes an impulsive choice, and the conflict occurs for long after, whereon the protagonist realizes the full consequences of their choice. An example of this is in A Separate Peace, where Gene’s conflict is his feeling guilty throughout the story for perceivedly causing Phinny’s accident and injury at the beginning of the story (and ultimately death). </p>

                <h2 id="post-5-5" className="blog-post-title">5.5. How to Create Conflict</h2>

<p>Robert Meredith and John Fitzgerald  provide a step by step method of creating conflict:</p><a href="#f2"><sup>2</sup></a>
<u>Structuring your novel: From basic idea to finished manuscript.</u>

<h5>5.5.1 	Conflict with Environment</h5>
<p>Step One: Place the protagonist in conflict with his own environment or the environment of others. There are different ways to do this:</p>

<h6><i>I. Changing the View</i></h6>
<p>A change within the environment that affects the protagonist can put the protagonist in conflict with the environment. This may be a physical (i.e. geographical) change, or it may be a psychological change (a character inherits the family home after his/her parents die). The environmental shift may be mundane or predictable, and something everyone goes through but the conflict comes from the new/different environment requiring a different set of behaviour or responsibilities or coping mechanisms from the character. For instance, a character who was dependent may need to learnt to be independent.</p>

<h6><i>II. Uprooting</i></h6>
<p>Uprooting a protagonist from one environment and placing him in a strange environment can put him into conflict with the environment. A character finds themselves in a new environment inadvertently, unpredictably, or by accident, and with little to no preparation, and the new environment may be abnormal, for instance, shipwrecking on a deserted island. The conflict comes not only from the requirement for the character to drastically change their behaviour, as above, but also from the environment itself, which may pose novel and unusual obstacles, such as on a deserted island, the scarcity of drinking water, or shelter. </p>

<h6><i>III.	Environment vs Environment </i></h6>
<p>Placing a protagonist in an environment that is in conflict with another environment puts the protagonist in conflict with the environment of others. An obvious example is a story set during wartime, but can apply anywhere groups of people are in organised conflict with each other. If the protagonist takes a side (even accidentally) it will default the other side to his antagonists.</p>

<h6><i>IV.	Things could be better</i></h6>
<p>Placing a protagonist in an environment he wants to change can put the protagonist in conflict with the environment. This is where the character doesn&apos;t like things about the environment he finds himself in -- it doesn&apos;t necessarily require an environment change. An example might be where a peasant protagonist lives in a poverty-stricken land, or a character lives under a despotic totalitarian regime. </p>

<h6><i>V.	Greener Grass </i></h6>
<p>Giving a protagonist an environment to conquer puts the protagonist in conflict with the environment. This is where a protagonist envies something about a different environment, and tries to obtain it for himself. For instance, a poor protagonist who moves to a wealthier place in an attempt to make life better for himself. This is distinct from &apos;Things could be better&apos; as the &apos;battle&apos; is not focused on protagonist&apos;s former home, but on the envied environment.</p>

<h6><i>VI.	I want more </i></h6>
<p>Placing a protagonist in an environment from which he wants to escape puts the protagonist in conflict with the environment. This is like &apos;Greener Grass&apos; except the protagonist hasn&apos;t left home. There might not be anything wrong with an environment except incompatibility with the protagonist&apos;s character; it&apos;s boring, predictable, uninspiring, unenlightened, uncaring, etc. </p>

<h6><i>VII.	The outsider</i></h6>
<p>Placing a protagonist in an environment in which he is not wanted puts the protagonist in conflict with the environment. The conflict here is not necessarily that the protagonit doesn&apos;t like his home, rather it&apos;s that he likes and wants to be liked and accepted as a part of it. The non-acceptance of the character may be due to his lack of having proved himself, or because of prejudices against him.</p>

<h6><i>VIII.	Fish out of water</i></h6>
<p>Placing a protagonist in an environment for which he is unsuited by character puts the protagonist in conflict with the environment. The conflict comes from the environment being the kind of place where a certain type of person thrives or habituates, and the protagonist&apos;s contrast to that kind of person.</p>

<h6><i>IX.	Hired or Fired</i></h6>
<p>A change in the status quo of the protagonist within the environment can put the protagonist in conflict with the environment. The character might gain or lose status or esteem, bringing that character into conflict with those around him.</p>


<h6><i>X.	Change of Office</i></h6>
<p>A change in the status quo of an environment can put the protagonist in conflict with the environment. This is like &apos;Hired or Fired&apos; but it&apos;s a group/s that changes status, not an individual. It may be that the government or ruling power changes hands, and it may be a group the protagonist himself is a member of, or not (as long as the group has an effect on the protagonist&apos;s life).  </p>

<h5>5.5.2 	Applying the Conflict to the Protagonist</h5>
<p>Step Two: You must flesh out why it’s the protagonist who acts in the face of the conflict and not another. To do this, give the protagonist a chief motivating force with a tangible objective. </p>

<h6><i>I.	Chief Motivating Force</i></h6>
<p>When the conflict arises, the protagonist’s reaction results in a determination to do something about it. Their planned action/s is the ‘chief motivating force.’ </p>

<h6><i>II.	Tangible Objective</i></h6>
<p>The objective is what the protagonist ultimately wants to get out of the chief motivating force. What is the force going to give them personally, selfishly? Here, ‘tangible’ means a condition or circumstance which can be realised in the mind. In other words, can the objective be converted into a mental picture, an actual concrete set of circumstances? If not, it is too abstract and needs to be specified.</p>

<h6><i>III.	Examples</i></h6>
<ul>
  <li>Chief Motivating Force: Escape prison; Tangible Objective: Get revenge on corrupt head of police force.</li>
  <li>Chief Motivating Force: Determine identity of murderer; Tangible Objective: Salvage expiring detective reputation.</li>
  <li>Chief Motivating Force: Disprove existence of ghosts in a haunted house; Tangible Objective: Get over death of close relative. </li>
</ul>

<h5>5.5.3 	Exaggerating the Protagonist’s Reaction</h5>
<p>Step Three: The conflict cannot be developed or sustained unless you exaggerate the protagonist’s reaction to the stimulus of the environment.</p>
<p>In real life, people can fail to respond to conflicts. Your protagonist cannot, because this would be boring. It’s better to make the conflict particularly urgent or critical, rather than make the protagonist someone particularly susceptible to overreaction (readers may find the latter unconvincing or annoying). </p>
<p>It’s possible to do both; see Jack Torrence in ‘The Shining’ or Eleanor Vance in ‘The Haunting of Hill House.’ However, it is harder, as you should justify why the character is the way they are, to make them more relatable. People don’t want to identify with a nervous wreck or someone on the brink of collapse, but they will identify with circumstances that would cause them to hypothetically behave in such a way (the difference between a character who is abusive, and a character who is abusive because their father was even more abusive).</p>

<h5>5.5.4 	Exaggerating the Conflict</h5>

<p>Step Four: Like you exaggerate the protagonist’s reaction, you sustain the conflict by exaggerating it, as well. </p>
<p>You can do this by making the conflict bigger in vertical or horizontal scope. Making it bigger in vertical scope means increasing the impact of a single conflict. In saying this, the protagonist should stand to gain or lose something of value upon the resolution of the conflict (whichever way it goes). </p>
<p>Increasing horizontal scope means creating additional complications to face the protagonist on the road to addressing the conflict. The complications should not be random; they should arise from the protagonist’s actions in addressing the conflict. i.e. one thing leads to another, or there is an antagonistic ‘pushback’ or reaction to the protagonist’s ‘push.’</p>
              
<h2 id="post-5-6" className="blog-post-title">5.6 Plans Must Be Complicated</h2>
<p>If your protagonist comes up with a plan, then come ‘D day’ it must be complicated somehow. Otherwise, as Mittelmark and Newman suggest, the reader will get déjà vu, first reading the description of the plan, and then reading the description of the plan in action. Not to mention you’re spoiling your own plot.</p>

{/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

<ThoughtForm />

<ThoughtList />

{/* ------------------------------------------------- footnotes --------------------------------------------- */}

                <div className="footnotes">
                  <h4>Footnotes</h4>
                  <ol>
                    <li id="f1">Jack Bickham, <i>The 38 Most Common Fiction Writing Mistakes (And How To Avoid Them).</i></li>
                    <li id="f2">Robert Meredith and John Fitzgerald, <i>Structuring Your Novel: From Basic Idea to Finished Manuscript (Everyday Handbook).</i></li>
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
                <li><a href="#post-5-1">5.1. What is Conflict?</a></li>
                <li><a href="#post-5-2">5.2. Why Is It Important?</a></li>
                <li><a href="#post-5-3">5.3. Types of Conflict</a></li>
                <li><a href="#post-5-4">5.4. Conflict ≠ Fight</a></li>
                <li><a href="#post-5-5">5.5. How to Create Conflict</a></li>
                <li><a href="#post-5-6">5.6 Plans Must Be Complicated</a></li>
              </ol>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Also See</h4>
              <ol className="list-unstyled">
                <li><a href="/Dialogue">12. Dialogue</a></li>
                <li><a href="/Suspense">13. Suspense</a></li>
                <li><a href="/Antagonists">16. Antagonists</a></li>
              </ol>
            </div>
          </aside>
        </div>
      </main>

    </div>
  );
}
