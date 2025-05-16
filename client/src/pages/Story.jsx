import '../App.css';
import { Link } from 'react-router-dom';
import storyBanner from '../assets/storybanner.png';
import ThoughtForm from '../components/ThoughtForm';
import ThoughtList from '../components/ThoughtList';
import FootnoteRef from '../components/FootnoteRef';

export default function Story() {
  return (
    <div>

      <div className="jumbotron p-3 p-md-3 text-white text-center rounded bg-dark">
        <h1 className="display-4">Story</h1>

        <div id="wrapper" className="text-left">
          <p className="lead my-3">Whatever good or bad fortune may come our way we can always give it meaning and transform it into something of value. </p>
          <i>— Herman Hesse</i>
          <p className="lead my-3">When the storytelling goes bad in society, the result is decadence.</p>
          <i>— Aristotle</i>
        </div>
      </div>

      <div className="card flex-md-row mb-4 box-shadow h-md-250 p-0">
        <img className="card-img-top w-100" src={storyBanner} alt="Thumbnail" />
      </div>

      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">
              <h2 id="post-1-1" className="blog-post-title">1.1 Storytelling</h2>

              <div id="content">

                <p>The most important skill you need to write fiction is storytelling. Robert McKee defines storytelling as: <i>“the creative conversion of life itself to a more powerful, clearer, more meaningful experience.”</i><FootnoteRef text="Robert McKee, Story, Substance, Structure, Style and the Principles of Screenwriting.." /></p>
                <p>He has a novel concept to convey the essence of storytelling – the ability to evoke a story with a single, silent image. Pared right down, that is the basis of what you are trying to do. </p>

                <h2 id="post-1-2" className="blog-post-title">1.2 What is a Story?</h2>

                <h5>1.2.2 The Opposite of Expectation</h5>
                <p>A story is an event where the opposite of expectation happens, and the more dramatic the contrast, the more interesting the story. This rule applies, not only to stories as a whole, but parts of stories: Acts, chapters, paragraphs, even single sentences. A single unexpected sentence can kick off a story. </p>

                <h5>1.2.3 	More than a Series of Events</h5>
                <p>A story is not simply a random series of events. A series of events becomes a ‘story’ when there is some extra element —an overarching unifying factor— which transforms the events into a new thing in itself, with a whole greater than the sum of its parts, such that if you took away any piece, it would revert back to being a random series of events.</p>
                <p>This unifying factor is what the story is ‘really’ about, and should itself be simple; expressible in little more than a single sentence.</p>

                <div className="p-3 mb-3 rounded custom-light-box">
                  <li className='remove-bullets'><u>A SERIES OF EVENTS</u></li>
                  <p className='indent-text-1'> He got up early and went to the gym. Then he went into town and got a haircut. Then he bought a bottle of wine at the liquor store. Later, he washed his car, and picked up his clothes from the dry cleaners. That night he drove to the restaurant and went in. He greeted all the people, said happy birthday to the girl and gave her the wine. Everyone ate and drank, and talked. But he did not talk to the girl at all. Then people began to leave. The girl refused to open his wine, but took it home with her instead.</p>

                  <li className='remove-bullets'><u>A STORY</u></li>
                  <p className='indent-text-1'> He got up early and went to the gym. Then he went into town and got a haircut. Then he bought a bottle of wine at the liquor store. Later, he washed his car, and picked up his clothes from the dry cleaners. That night he drove to the restaurant and went in. He greeted all the people, said happy birthday to the girl and gave her the wine. Everyone ate and drank, and talked. But he did not talk to the girl at all. Then people began to leave. The girl refused to open his wine. They had it at her place, instead. But they didn’t talk much there, either.</p>
                </div>

                <p>In the first example, the series of events is vague and unconnected. But in the story, all the events build up and make sense at the conclusion – every detail had a reason to be there; nothing was random or trivial. The series of events has an overall meaning.</p>
                <p>To put it another way, if someone asked you what (1) was about, you could say, a guy goes to a party. But if someone asks you what it meant, you don’t know. If someone asks you what (2) was about, you can say, a guy goes to a party. If someone asks you what it meant, you can say, the guy likes the girl, and we find out she likes him back. All of the details are used to communicate this. More than pure chronological content, self-contained meaningfulness is the indicator of a story.</p>

                <h5>1.2.4 	An Explosion</h5>

                <p>Burnett and Burnett<FootnoteRef text="Hallie & Whit Burnett, Fiction Writer's Handbook." /> say that all stories have an explosion, “...in which all parts of the whole are expelled...” piece by piece, “...from an existing pattern—the lives of the characters are jolted from their rhythm, and chaos is produced in their universe.” In some stories the explosion is fast and shattering, in others, muted and delayed. It may occur at the beginning, middle or end, or the fuse may be lit early and the explosion happen later, but by the end there must be some kind of resolution or meaning created, a sense of something new created from the previous, subverted status quo.</p>

                <h5>1.2.5 	Difference Between ‘Story’ and ‘Idea’</h5>

                <p>Bob Mayer<FootnoteRef text="Bob Mayer, Fiction Writer's Toolkit." /> makes a good point that “[an] idea is not [a] story.”  How you tell the idea is the story. Different writers can come up with the same idea, but tell different stories. Some good ideas cannot be made into good stories. Conversely, some bad ideas can be made into good stories (you may have heard a critic/reviewer say something like, ‘in the hands of another writer, this idea would not have worked…’)</p>

                1.2.6 	Difference between ‘Story’ and ‘Plot’
                <p>You start with an idea, figure out a story, and then work on the plot.</p>
                <p>The terms ‘story’ and ‘plot’ are often used interchangeably, but don’t mean the same things. The same stories tend to get told and retold, but they always have different plots.</p>
                <p>A ‘story’ refers to the sequence of events, arranged chronologically, which generate particular meaningfulness. The emphasis is on the events and the order they are arranged in, which creates meaning. If visiting an old, decrepit house at night is a main event, we know this refers to the category ‘ghost story.’</p>
                <p>Conversely, “[a] plot is what you do with that story,”<FootnoteRef text="Hallie & Whit Burnett, Fiction Writer's Handbook." />  – how you selectively arrange the events chronologically or artistically to create particular meaning, emotions or emphasis. Ten stories may all be ghost stories with the same events (haunted house, dead former tenants, cemetery, ghost, etc), but they will have different plots. One may happen within a single day, or a single hour (like in Stephen King’s 1408), and by direct first-person events, another may be spaced over hundreds of years and be uncovered through after-the-fact research done by the protagonist.</p>

                <p>If asked, “what is your story?” you might say, “A ghost story.” If asked, “What’s the plot?” you might then detail the sequence of events which distinguishes your ghost story from other ghost stories. Thus, ‘story’ emphasises the commonalities of your work with the broader category of similar ‘stories’. ‘Plot’ distinguishes your work from the broader category of similar ‘plots’. </p>
                <p>If your story is like other good stories, that’s good. If your plot is like other good plots, that’s bad. </p>

                <h2 id="post-1-3" className="blog-post-title">1.3 The Main Elements of a Story</h2>

                <p>These are the main elements of story structure, in order of priority:<FootnoteRef text="Mark Twain." /></p>
                <ol>
                  <li>PLOT;</li>
                  <li>CHARACTERS;</li>
                  <li>SETTING;</li>
                  <li>THEME.</li>
                </ol>

                <p>Generally, this means if a character’s development gets in the way of a plot event, the character needs to change in order to express the plot event. If a setting inhibits the expression of a character, the setting needs to change, etc.</p>

                <h2 id="post-1-4" className="blog-post-title">1.4 Gain or Loss – Inspiring or Cautionary? </h2>

                <p>There are roughly two types of stories: (1) stories about people who ‘rise’ and end up better off at the end; (2) stories about people who ‘fall’ and end up worse off at the end (even if a person ends up where they started, they still may be in a worse position; having lost time or opportunities, or not learned anything from their experiences). </p>
                <p>Throughout your entire planning process you need to bear in mind whether your story is about gain or loss. The tone and structure of your whole story will follow. Regardless which applies, there generally needs to be change and conflict.</p>
                <p>You may have heard of the 'hero's journey' or the typical story structure where the protagonist faces a challenge, and must overcome it. Don't feel restricted by these formulas. A group of scientists at the University of California researched thousands of books and movie scripts and found that the vast majority of stories actually fall into 6 different categories:<FootnoteRef text="Seth Stephens-Davidowitz, Everybody Lies." /></p>

                <ol>
                  <li>Rags to Riches (rise);</li>
                  <li>Riches to Rags (fall);</li>
                  <li>Man in a Hole (fall, then rise);</li>
                  <li>Icarus (rise, then fall);</li>
                  <li>Cinderella (rise, then fall, then rise);</li>
                  <li>Oedipus (fall, then rise, then fall).</li>
                </ol>

                <p>Incidentally they found Harry Potter and the Deathly Hallows (among others) was an exception: in which the hero falls, rises, falls, rises, falls, rises, falls, rises, falls, rises, falls, rises, falls, rises, falls, and then finally rises.</p>

                <p>Roy Clark<FootnoteRef text="Roy Peter Clark, Writing Tools: 50 Essential Strategies for Every Writer." /> lists a number of traditional story structures, many of them ancient archetypes:</p>

                <ul>
                  <li>Winning the Prize;</li>
                  <li>Winning or losing a loved one;</li>
                  <li>Loss and restoration;</li>
                  <li>The blessing becomes the curse;</li>
                  <li>Overcoming obstacles;</li>
                  <li>The wasteland restored;</li>
                  <li>Rising from the ashes;</li>
                  <li>The ugly duckling;</li>
                  <li>The emperor has no clothes;</li>
                  <li>Descent into the underworld (The Orphic Myth);</li>
                </ul>

                <h5>1.4.1 Rise or Fall?</h5>
                <p>This raises the question; should your story (more importantly, your protagonist) rise or fall? </p>
                <p>First, a tangential notion; appreciate your story is not the place for a jeremiad. Fiction is a forum for the exploration of viewpoints, not one-sided debate of controversial convictions. Your aim is not to preach to your readers and ‘convert’ them.</p>
                <p>You can only support and develop arguments for non-controversial viewpoints which your reader likely held anyway; truisms or even trite-isms are acceptable, such as ‘love saves,’ ‘misdeeds don’t pay in the long term,’ ‘revenge is wrong,’ ‘loyalty and honesty is rewarded in the long term,’ ‘defying wrongful authority is a virtue,’ ‘integrity is better than duplicity,’ and ‘stand up for your beliefs,’ etc. Your goal is not to present a novel, original, controversial argument, but to portray a timeless argument in an original, novel way.</p>
                <p>More relevantly, if your protagonist stands for timeless values, your story is justified in being a ‘rise’ story, because the protagonist’s ultimate triumph validates those undisputed values. Conversely, if your protagonist stands for controversial or just plain wrong values, it justifies a ‘fall’ story.  </p>
                <p>This creates an exception to my earlier point against jeremiads; your protagonist can be a ‘preacher’ if they don’t ultimately triumph; in this way, you don’t side with your protagonist, rather, you are proving the contrary by deduction (‘if the protagonist had not done that, he would have succeeded…’). Also, don’t define ‘triumph’ as black/white; think of it as a spectrum – the protagonist who ultimately obtains a large sum of money paid with the life of their (innocent) love interest would not count as a ‘triumph.’ Don’t confuse the characters’ feelings with the readers’. </p>
                <p>Also, make the protagonist’s rise/loss proportionate to the radicalism of their beliefs; a protagonist who is spectacularly polarised should fail spectacularly; a protagonist whose beliefs are more nuanced or equivocal may fail partly and win partly.</p>

                <h2 id="post-1-5" className="blog-post-title">1.5 Joseph Campbell’s Myths </h2>

                <p>No discussion of storytelling would be complete without mentioning Joseph Campbell's universal 'myths,'  his most known being ‘The Adventure of the Hero,’ more commonly known as <i>‘The Hero’s Journey.’</i><FootnoteRef text="Joseph Campbell, The Hero With A Thousand Faces." /></p>
                <p>Campbell argues that virtually every story (including folk tales, mythologies and fairy tales) is a variation on his formula. It’s worth knowing the formula even if you disagree. </p>
                <p>The way the myths manifest in stories is manifold: the myths may occur in stories literally or symbolically, overtly or impliedly, and be present in physical or intangible forms. The roles may be occupied by characters – alternatively male or female – multiple characters performing collective roles, singular characters performing multiple roles, animals, objects, settings, or other. This gives the journey enormous scope for application.</p>
                <p>For a detailed summary of the Hero's Journey, see <Link to="/HeroJourney">this page</Link></p>

                <h2 id="post-1-6" className="blog-post-title">1.6 Myths and Misconceptions </h2>

                <h5>1.6.1 Write What You Know</h5>
                <p>Writers are commonly instructed to ‘Write what [they] know.’ But, as Alice LaPlante says, this can be limiting.<FootnoteRef text="Alice LaPlante, The Making of a Story: A Norton Guide to Creative Writing." /> <i>"Write about what you don't know about what you know,"</i> Eudora Welty suggests. Take what you know and create a mystery from it; you might see your accountant neighbour leave at one in the morning every Saturday, but where is he/she going?</p>

                <p>You can write anything you want. Stephen Crane wrote about the American Civil War in The Red Badge of Courage, even though he’d never been to war. Your writing will be better if you research your chosen topic/s first, or while writing. Don’t let anyone discourage you from writing about something you have not personally experienced, otherwise you risk writing nothing more ambitious than what Robert McKee<FootnoteRef text="Robert McKee, Story: Substance, Structure, Style and the Principles of Screenwriting." /> calls ‘the personal story,’ – basically a fictionalized diary entry.</p>
                <h5>1.6.2 	Don’t Take Ideas from Other Writers</h5>
                <p>Anyone who gives a blanket proscription against ‘stealing’ ideas (it’s not really ‘borrowing’ if you never give them back) is out of touch with writing practice. 99% of fiction writers are readers of other fiction writers, or ‘fans’, and hence get their ideas from someone else. However, some forms of ‘copying’ (or more politically correct: ‘drawing inspiration’) are more permissible than others:</p>

                <ul><li className='remove-bullets'><h6>(1) Steal More</h6></li></ul>
                <p>If your ‘stealing’ is easily found out, ironically you’re probably not stealing enough. There’s a saying: <i>“If you steal from one person it’s plagiarism, steal from many, it’s research.”</i> Just by reading many different authors on the same idea, or better, across many different kinds of ideas or themes, is going to enrichen your ‘idea base’, and when it comes to writing your own, the ‘cross-fertilisation’ of ideas will mask your tracks, burying the echoes of one author under the echoes of all the others, and making it less clear where one ‘stolen’ idea begins and another ends;</p>
                <p>Note: Avoid slavishly copy-pasting ideas, even in mass volume. A ton of shit is no less shit than an ounce of shit. Borrow ideas lots of ideas, yes, but borrow selectively. If you think purely having read thousands of stories makes you a better writer, note what Robert McKee<FootnoteRef text="Robert McKee, Story: Substance, Structure, Style and the Principles of Screenwriting." /> says about writing ‘instinct’:</p>

                <div className="p-3 mb-3 rounded custom-light-box">
                  <i><p className='indent-text-1'>“…[W]hat the novice mistakes for craft is simply his unconscious absorption of story elements from every novel, film, or play he's ever encountered. As he writes, he matches his work by trial and error against a model built up from accumulated reading and watching. The unschooled writer calls this "instinct," but it's merely habit and it's rigidly limiting…But the haphazard groping toward or revolt against the sum of unconsciously ingrained repetitions is not, in any sense, technique, and leads to screenplays clogged with clichés of either the commercial or the art house variety.”</p></i>
                </div>

                <ul><li className='remove-bullets'><h6>(2) Steal Further Back</h6></li></ul>
                <p>There’s a variation on the above: <i>"If we steal thoughts from the moderns, it will be cried down as plagiarism; if from the ancients, it will cried up as erudition"</i><FootnoteRef text="Reverend Charles Caleb Colton." />  So if you want to take from ‘Dracula’, don’t stop with Dracula itself, but read the origin myths and real life historical background which gave rise to the story.</p>
                <p>So if you want to take from ‘Dracula’, don’t stop with Dracula itself, but read the origin myths and real life historical background which gave rise to the story.</p>

                <ul><li className='remove-bullets'><h6>(3) Aim Lower</h6></li></ul>
                <p>Writers are most tempted to steal from the most widely-known, or idolized, ‘untouchable’ works. For instance, in fantasy, Lord of the Rings. Hypocritically, the writer believes the work cannot be improved. If you cannot improve the original work, then why are you trying to get published? What will the public get from your work that LOTR did not already give them? </p>
                <p>In contrast, do you remember a time you’ve read a book and thought ‘How did that turn out so bad? That could’ve been really good.’ Those are the books you want to steal from. You want to rewrite the book the way you think it should’ve gone. Even if the story is well known, this form of copying is more permissible because you are making active changes to the story.  </p>

                <h5>1.6.2 Slavishly adhere to good spelling and grammar</h5>
                <p>I refer to this misconception later on, but for now I’ll just say this is untrue. You should adhere to conventional grammar and spelling unless your story starts to not make sense if you don’t. ‘Flowers for Algernon’ by Daniel Keyes is a clear example, so much that the story would have been nonsensical if perfect grammar had been used from the start.</p>

                <h5>1.6.3 Show don’t Tell</h5>
                <p>As a basic rule, description which ‘shows’ should be prioritized before description which ‘tells’. But there are exceptions, such as:</p>
                <ul>
                  <li>To designate a passage of time separating critical ‘showing’ scenes;</li>
                  <li>To provide a break from the intensity of a scene;</li>
                  <li>To provide a transition between scenes;</li>
                  <li>To describe the character acting on autopilot (e.g. driving for a long period of time without much cognizance of surroundings);</li>
                </ul>

                <h5>1.6.5 	Characters are collections of assorted personality traits</h5>
                <p>I’ve previously come across writing advice instructing that characters are basically a bunch of personality traits, as close to real people you know as possible. This is incorrect, or, at least, not a helpful way of thinking about character construction. </p>
                <p>Characters are not meant to be ‘real people on paper’;  nor are they meant to be a collection of personality traits you think up one rainy day. Characters are motivation. You create characters out of necessity – because you need a character to do some particular thing in the story. They are not there, like so much human wallpaper at a high flying party, to stand around looking attractive and telling jokes and blending into the environment. Characters are instruments.</p>

                <h5>1.6.6 	Verisimilitude, not Truth</h5>
                <p>It’s no defence to a charge that your story is unbelievable or boring or poorly structured or nonsensical to say ‘but it was like that in real life.’ Lots of things, all kinds of things, happen in real life, and most of them aren’t story-worthy. Stories aren’t real life like characters aren’t real people.  </p>

                <h2 id="post-1-7" className="blog-post-title">1.7 The Philosophy of Storytelling </h2>
                <p>Misery, Conflict and Struggle are the lifeblood of captivating story. If you don’t want to write about those things, or you can’t, your story won’t be worth telling.</p>
                <p>Robert McKee<FootnoteRef text="Robert McKee, Story: Substance, Structure, Style and the Principles of Screenwriting." /> puts it better:</p>

                <div className="p-3 mb-3 rounded custom-light-box">
                  <i><p className='indent-text-1'>“As Jean-Paul Sartre expressed it, the essence of reality is scarcity, a universal and eternal lacking. There isn't enough of anything in this world to go around. Not enough food, not enough love, not enough justice, and never enough time […] Writers who cannot grasp the truth of our transitory existence, who have been mislead by the counterfeit comforts of the modern world, who believe that life is easy once you know how to play the game, give conflict a false inflection. Their scripts fail for one of two reasons: either a glut of meaningless and absurdly violent conflict, or a vacancy of meaningful and honestly expressed conflict. </p></i>
                  <i><p className='indent-text-1'>The former are exercises in turbo special effects, written by those who follow textbook imperatives to create conflict, but, because they're disinterested in or insensitive to the honest struggles of life, devise phony, overwrought excuses for mayhem.  </p></i>
                  <i><p className='indent-text-1'>The latter are tedious portraits written in reaction against conflict itself. These writers take the Pollyanna view that life would really be nice ... if it weren't for conflict. Therefore, their films avoid it in favor of low-key depictions to suggest that if we learned to communicate a little better, be a little more charitable, respect the environment, humanity could return to paradise. But if history has taught us anything, it's that when toxic nightmare is finally cleaned up, the homeless provided shelter, and the world converted to solar energy, each of us will still be up to our eyebrows in mulch.” </p></i>
                </div>

                <p>Yikes.</p>

                <h2 id="post-1-8" className="blog-post-title">1.8 Medium </h2>
                <p>It’s worth considering whether your story makes the most of your chosen medium (writing/literature). Your story might make a great film, or video game, but a poor novel. Right now, audiences love superhero comics, superhero films and superhero video games, but no one reads superhero novels. The superhero genre seems to need images to work.</p>
                <p>Compare with horror. Most horror is uniquely suited to written media because it’s largely ‘visual-avoidant’ by undermining visual and direct information in favour of other forms (inference, sound, anecdote, etc). For instance, in horror, the last thing you want to do is give away the 'visual' or the 'sighting' prematurely (if at all). Not to say visual horror is ineffective – it has the intensity of fireworks, but unfortunately, also has the lifespan of fireworks. The visual horror creator has to keep contriving to put the source of horror out of sight ‘until later.’</p>
                <p>The novel 'Bird Box'<FootnoteRef text="Bird Box, Josh Malerman." /> is a perfect example of visual-avoidant horror’s efficacy: the plot involves monsters invading earth which, if you look at, you go crazy. A film requires a lot of narrative and camera gymnastics to get around this glaringly visual-avoidant plot point. Whereas, the same concept has no problem in literature: if it's not seen, it's not described. End of story.</p>
                <p>Same with crime fiction; it’s purpose is to keep certain visual information (the criminal, the crime itself) hidden from you for as long as possible. This makes it literature-friendly.</p>
                <p>Romance also has distinct literary appeal over visual media. You could argue it's a downside that you don't see the romantic interests, but on the positive side, you get to fill in their appearances with your own preferences – or yourself. Visual media cannot ‘self-insert’; and (as Hollywood’s star system testifies) the actor’s likeability is a huge barrier to engagement.</p>
                <p>On the other hand, notice how the Verne-style 'adventure' novel has all but died in literature, but survives in film and video game? The ‘Western’ has gone one step further, dying in literature and film, but surviving in video game.</p>
                <p>Genres that work in writing:</p>

                <ul>
                  <li>Horror;</li>
                  <li>Romance/Erotica;</li>
                  <li>Art/Indie;</li>
                  <li>Crime;</li>
                  <li>Weird Fiction;</li>
                  <li>Thriller;</li>
                  <li>Political;</li>
                  <li>Post/Modern/Subversive;</li>
                  <li>Hard Sci-Fi;</li>
                  <li>Complex or High Fantasy;</li>
                  <li>Historical;</li>
                  <li>Philosophical;</li>
                  <li>Experimental;</li>
                  <li>Psychological;</li>
                  <li>Postmodern;</li>
                  <li>Metafiction;</li>
                </ul>

                <p>Genres that work in visual media (filmm video games):</p>
                <ul>
                  <li>Adventure;</li>
                  <li>Horror</li>
                  <li>Romance;</li>
                  <li>Western;</li>
                  <li>Action;</li>
                  <li>Space Opera;</li>
                  <li>High Fantasy;</li>
                  <li>Simple Historical;</li>
                  <li>Superhero;</li>
                </ul>

                <p>Some genres are equally effective across both mediums, but operate distinctly different. An example being comedy: in written medium, humour is reliant on how you tell the joke, i.e. the language itself. Poor language can ruin a funny situation. In film, humour is derived from situation, acting and reaction. </p>

                <p>There are no firm rules about these distinctions, but if you want to work out whether your story is better suited for literature or film (or other media), consider:</p>
                <ol>
                  <li>Is the plot complicated or straightforward? </li>
                  <ol>
                    <li>Intricately complex plots suit literature because books give people pause to think and rationalise;</li>
                  </ol>
                  <li>
                    Is the story visual-reliant, or visual-avoidant?
                  </li>
                  <ol>
                    <li>Visual-avoidant only work as literature, whereas reliant work better as a film;</li>
                  </ol>
                  <ol>
                    <li>Is critical information metered out gradually until a big reveal at the end?</li>
                    <ol>
                      <li>This can work well as literature;</li>
                    </ol>
                    <ol>
                      <li>Did critical events happen in the past?</li>
                    </ol>
                    <ol>
                      <li>This suits literature which is less focused on showing the ‘here and now’ than film</li>
                    </ol>
                    <ol>
                      <li>5.	Is there a long history spanning hundreds of years, a large cast of near hundred/s, or other risk of ‘information overload,’</li>
                    </ol>
                    <ol><li>a.	This suits literature, which has more time and endurance to deal with detail density, which would fatigue a film (and blow its budget)</li></ol>
                  </ol>
                </ol>

                <h2 id="post-1-9" className="blog-post-title">1.9 Pixar Storytelling </h2>
                <p>Animation company Pixar has a list of tips which it has used in its films:</p>
         
                  <div className="p-3 mb-3 rounded pixar-box">
                  <ol>
                    <li>You admire a character for trying more than for their successes.</li>
                    <li>You gotta keep in mind what’s interesting to you as an audience, not what’s fun to do as a writer. They can be v. different.</li>
                    <li>Trying for theme is important, but you won’t see what the story is actually about til you’re at the end of it. Now rewrite.</li>
                    <li>Once upon a time there was ___. Every day, ___. One day ___. Because of that, ___. Because of that, ___. Until finally ___.</li>
                    <li>Simplify. Focus. Combine characters. Hop over detours. You’ll feel like you’re losing valuable stuff but it sets you free.</li>
                    <li>What is your character good at, comfortable with? Throw the polar opposite at them. Challenge them. How do they deal?</li>
                    <li>Come up with your ending before you figure out your middle. Seriously. Endings are hard, get yours working up front.</li>
                    <li>Finish your story, let go even if it’s not perfect. In an ideal world you have both, but move on. Do better next time.</li>
                    <li>When you’re stuck, make a list of what WOULDN’T happen next. Lots of times the material to get you unstuck will show up.</li>
                    <li>Pull apart the stories you like. What you like in them is a part of you; you’ve got to recognize it before you can use it.</li>
                    <li>Putting it on paper lets you start fixing it. If it stays in your head, a perfect idea, you’ll never share it with anyone.</li>
                    <li>Discount the 1st thing that comes to mind. And the 2nd, 3rd, 4th, 5th – get the obvious out of the way. Surprise yourself.</li>
                    <li>Give your characters opinions. Passive/malleable might seem likable to you as you write, but it’s poison to the audience.</li>
                    <li>Why must you tell THIS story? What’s the belief burning within you that your story feeds off of? That’s the heart of it.</li>
                    <li>If you were your character, in this situation, how would you feel? Honesty lends credibility to unbelievable situations.</li>
                    <li>What are the stakes? Give us reason to root for the character. What happens if they don’t succeed? Stack the odds against.</li>
                    <li>No work is ever wasted. If it’s not working, let go and move on - it’ll come back around to be useful later.</li>
                    <li>You have to know yourself: the difference between doing your best & fussing. Story is testing, not refining.</li>
                    <li>Coincidences to get characters into trouble are great; coincidences to get them out of it are cheating.</li>
                    <li>Exercise: take the building blocks of a movie you dislike. How d’you rearrange them into what you DO like?</li>
                    <li>You gotta identify with your situation/characters, can’t just write ‘cool’. What would make YOU act that way?</li>
                    <li>What’s the essence of your story? Most economical telling of it? If you know that, you can build out from there.</li>
                  </ol>
                </div>

                <hr />

                {/* ------------------------------------------------- Thoughts Form footnotes --------------------------------------------- */}

                <ThoughtForm />
                <ThoughtList />

                {/* ------------------------------------------------- footnotes --------------------------------------------- */}

                <div className="footnotes">
                  <div className="p-3 mb-3 rounded pixar-box">
                  <h4>Footnotes</h4>
                  <ol>
                    <li id="f1">Hallie & Whit Burnett, <i>Fiction Writer's Handbook.</i></li>
                    <li id="f2">Bob Mayer, <i>Fiction Writer's Toolkit.</i></li>
                    <li id="f3">Hallie & Whit Burnett, <i>Fiction Writer's Handbook.</i></li>
                    <li id="f4">Mark Twain.</li>
                    <li id="f5">Seth Stephens-Davidowitz, <i>Everybody Lies.</i></li>
                    <li id="f6">Roy Peter Clark, <i>Writing Tools: 50 Essential Strategies for Every Writer.</i></li>
                    <li id="f7">Joseph Campbell, <i>The Hero with a Thousand Faces.</i></li>
                    <li id="f8">Alice LaPlante, <i>The Making of a Story: A Norton Guide to Creative Writing.</i></li>
                    <li id="f9">Robert McKee, <i>TStory, Substance, Structure, Style and the Principles of Screenwriting.</i></li>
                    <li id="f6">Reverend Charles Caleb Colton.</li>
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
              <p className="mb-0-1">A story is a collection of events which altogether create a meaningful whole that is greater than the sum of its parts.</p>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Index</h4>
              <ol className="list-unstyled mb-0">
                <li><a href="#post-1-1">1.1 Storytelling</a></li>
                <li><a href="#post-1-2">1.2 What is a Story?</a></li>
                <li><a href="#post-1-3">1.3 The Main Elements of a Story</a></li>
                <li><a href="#post-1-4">1.4 Gain or Loss – Inspiring or Cautionary?</a></li>
                <li><a href="#post-1-5">1.5 Joseph Campbell’s Myths</a></li>
                <li><a href="#post-1-6">1.6 Myths and Misconceptions</a></li>
                <li><a href="#post-1-7">1.8 The Philosophy of Storytelling</a></li>
                <li><a href="#post-1-8">1.9 Medium</a></li>
                <li><a href="#post-1-9">1.10 Pixar Storytelling</a></li>
              </ol>
            </div>

            <div className="p-3 mb-3 blue rounded">
              <h4 className="font">Also See</h4>
              <ol className="list-unstyled">
                <li><a href="/Premise">2. Premise</a></li>
                <li><a href="/Plot">3. Plot</a></li>
                <li><a href="/HeroJourney">The Hero's Journey</a></li>
              </ol>
            </div>
          </aside>
        </div>
      </main>

    </div>
  );
}
