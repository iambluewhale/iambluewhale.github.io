

var story = {
    currentScene: "prologue",
    bonusText: "",

    prologue: {
        story:`Travis Gallon is cooler than you. Boys think he\'s weird, sure, but girls like him. So when Travis Gallon came over to you at lunch 
        today and asked if you wanted to come over after school, you said yes. Now you're waiting by the curb and wondering if it was only a joke.`,
        destination:"school"
    },
    school: {
        story:`\"Hey, you.\" <br>His voice comes from behind and his hand touches your shoulder in greeting as he passes by. It seems like he expects you to follow, so you do.<br>
        \"Hi.\"<br>\"My bike\'s over here.\" <br>He mounts the bike and rings the bell twice.      <i>Brring Brring</i>
        <br>"Get up on the handlebars.\"<br><br>
        You come to a stop in front of a small one-story house. You hop off and he dismounts, letting the bike fall to the ground.
        He walks to the front door without looking at you. It isn\'t locked but it\'s sticky, and he shoves into it with his shoulder to get it open.`,
        buttonTitle:"Follow",
        destination:"hisHouse" 
    },
    hisHouse: {
        story: `
        
The inside is full of crap. Boxes stacked waist high form the perimeter of the room, receipts, papers, and piles of mail cover every surface. Miscellaneous items help take up the space: a cheap plastic wall clock, a canvas bag full of wires, an unspooled hose covered in dust.
<br>The image of it all on fire comes and goes through your mind.<br><br> He leads you to the kitchen and fills up a cloudy glass from the tap, downing it in seconds. He does it again, and then looks at you, calmer now than before.<br>
\"You want some water or something?\"<br>
\"No thanks.\"<br>
Your palms are sweating as you work up the courage to speak. You\'ve been wanting to ask the question since lunch today. 
\"Why\'d you invite me over?\"<br>
\"Because I like you. And I wanted to show you something.\"<br>
\"Oh.\" You almost ask why again, but stop yourself. \"What?\"<br>
\"It\'s in my room.\"
        `,
        buttonTitle:"Go to Room",
        destination:"room1"
    },
    room1: {
        story:`
        You enter his room. It\'s humid and stuffy, despite the square fan running on high in the corner. It smells kind of sour, but not entirely bad. 
        <br>There\'s a desk with a TV, a cheap twin bed, a little bookshelf and a standing lamp. Just like the living room, every surface is littered with papers and trash. 
        The floor is strewn with clothes. He closes the door behind you.<br><br>
        \"You wanna know why I like you so much?\"<br>
        You nod.<br>
        \"Because no one else does. Not even the teachers.<br>
        \"It\'s because you\'re so ugly, you know.\"<br><br>
        \"Usually the ugly kids get bullied. But you don\'t even get it bad, because yeah, you\'re ugly, but you\'re also a pity. You\'re all quiet and can\'t speak, can\'t look anyone in the eye. 
        It\'s hard enough to look at you just be the way you are, bullying you is no good.<br>
        \"I think it\'s really interesting.\"<br>
        `,
        choices: [ 
            {
            choice:"Express emotion",
            newText:`\"That\'s r-really mean.\"<br><br> \"Well it\'s fucking true, what do you want from me? You want me to lie?\"`,
            destination:"room2"
            },
            {
            choice:"Play it cool",
            newText:"\"I don\'t care.\"<br><br> He leans down and peers into your face. Just when you start to wonder what he\'s going to do, he speaks.\"I don\'t believe you.\"",
            destination:"room2"
            },
            {
            choice:"Say nothing",
            newText:"",
            destination:"room2"
            } ]    
    },
    room2: {
        story:`\"Anyways,\" he moves over to his desk and starts rummaging through the mess, throwing papers and trash on the floor until he finds something. 
        \"This is why I brought you here.\" He wiggles a VHS tape in his hand. <br>\"My friend stole it from his brother and I stole it from him. 
        It made me think of you.\"<br><br> He pops in the tape. The small room is filled with the sounds of moans, the screen shows naked limbs, bodies moving together. 
        <br>\"The whole time I was watching it," he says with amusement, "I just couldn\'t stop thinking about you.<br>\"With your stupid
         stutter and the way you stare off into space like you\'re some fucking animal that\'s got nothing in its head.<br>
        \"Do you like it? Have you ever seen this sort of stuff before?\"<br>`,
        choices: [
            {
            choice:"Lie",
            newText:"\"No, not really. It\'s okay.\"",
            destination:"room3"
            },
            {
            choice:"Tell the truth",
            newText:" \"Yeah. My dad has stuff like this, magazines and stuff. It\'s weird.\"",
            destination:"room3"    
            },
            {
            choice:"Say nothing",
            newText:`\"See what I fucking mean about nothing in your head?\"<br><br>He stares at you, clearly waiting for some glint of recognition, but you remain as you are; a blank slate. He shakes his head with a click of the tongue and a smile. \"Be that way if you want, doesn\'t bother me. People talk too much, anyways.\" `,
            destination:"room3"    
            } ]
    },
    room3: {
        story:`He turns the volume down. You watch the bar get smaller and smaller until it\'s gone and for a moment a little horn marked with an
         X appears on the screen. <br><br>\"I hate the noises she makes. Makes me sick.\"<br> He gets up, and sits next to you on the bed.`,
         choices: [
            {
            choice:"Move over",
            newText:`You edge over to the very corner of the bed, the metal frame squealing beneath your movement.<br><br> 
            \"You\'re afraid of me?\"<br>He says this playfully, but there\'s another shade to his tone that you can\'t quite place.`,
            destination:"moveOver"
            },
            {
            choice:"Stand up",
            newText:`You stand up, tugging down at your shorts. \"I actually think I have to go, now...\"<br><br>
\           "Aw, don\'t be like that. You just got here. We don\'t have to watch it, I\'ll make you something to eat.\"`,
            destination:"kitchen"
            },
            {
            choice:"Stay still",
            newText:`You stay frozen in place. The cheap cot sinks below your combined weight with a squeal, pooling your bodies together. You can feel the warmth of his
             leg and the coarseness of the hair on it, now flush against your own. <br>Though your eyes are looking at the screen your focus is on his face in the periphery;
             you can tell he\'s staring. Your gaze drops to the floor, and then to your hands\- clasped at your lap. Your heart is pounding.<br>
            <br>\"You should look at me\" He says in a cadence that is strange on him, pithy, and gently guides your head by the chin.<br><br> You glance into his eyes and look away quickly,
             to the corner of the room, now the window frame, landing on the soft line drawn by the meeting of the wall against the ceiling.<br><br> 
            \"Don\'t look away, keep looking.\"`,
            destination:"eyeContact"
            } ],
        },
    moveOver: {
            story: "",
            destination: "outside",
        },
    kitchen: {
            story:"",
            destination: "kitchen2",
            buttonTitle: "Okay"
        },
        kitchen2: {
            story:`Leaning against the counter, you watch him smear peanut butter onto two slices of white bread. His movements are fluid, self assured. The knife he\'s using is one he pulled from the crowded sink and wiped clean on his shirt. He hands one of the slices to you.
            \"Did you notice- how the girl\'s nice looking and the guy is a total dump? It\'s always like that in those.\"<br>
            You tear the bread in half and take a bite at the center. \"I didn\'t notice. I didn\'t see what the guy looked like.\"<br>
            At that moment you hear the sound of tires on the gravel outside, and Travis shoots up straight. \"My dads home, we gotta go.\"<br>`,
            newText2: "He takes a hold of your shoulder and shepherds you out the back door, hurriedly. Only when you\'re out of sight of the house does he slow down.",
            destination: "outside",
            buttonTitle: "Get out"
        },
    eyeContact: {
            story:"",
            buttonTitle:"Look",
            destination:"eyeContact2"
        },
        eyeContact2: {
            story:`At first you see his whole face; nose, lips, eyebrows and hair are all part of the image. But soon the face falls away, and the eyes are all that\'s left.<br>
             His are green, up close you can see they are pitted with brown specks, like a field of grass someone\'s dug up with holes. <br><br>They are looking right at you, straight into you. You don\'t know how long you stare. Eventually they stop being eyes and seem like something else entirely, portals to a nonexistent place.
            <br><br>The crunching sound of tires in the gravel outside breaks the spell\- you both jolt backwards. Travis is up now and fiddling with the TV, stuffing the tape into some recess in the bookshelf. He slides open the window and stands in front of it. \"My dad\'s home, we gotta go.\"
            `,
            newText2:"He grabs your arm and shepherds you away from the house hurriedly. Once you can no longer see it behind you he lets go.",
            buttonTitle: "Go through window",
            destination:"outside"
        },
    outside: {
        story:"The two of you are walking along the side of the road at a leisurely pace.",
        choices: [
            {
            choice:"Ask a question",
            newText:` \"What\'s your dad like?\"<br> \"He\'s a piece of shit. My mom is worse though.<br> \"What\'s your dad like?\"<br>\"Scary.\" `,
            destination:"wannaSee"
            },
            {
            choice:"Try to leave",
            newText:` \"I need to go home now.\"<br> \"Wait, I wanna show you something first.\"<br>He notices the apprehension on your face and adds, \"It\'ll just take a second.\"<br><br>
            You walk down the road in silence for a while, and then he veers right towards the forest's edge. \"It's this way.\"`,
            destination:"turnOff"
            },
            {
            choice:"Say nothing",
            nextText:"You remain silent.",
            destination:"wannaSee"
            }, ]
        },
    wannaSee: {
        story:"\"Wanna see something funny?\"",
        choices: [
            {
            choice:"Yes",
            newText:` \"Okay.\"<br>\"Great.\"<br>You walk down the road in silence for a while, until he stops with his arm outstretched in front of you, pointing into the forest. \"This way.\"`,
            destination:"turnOff"
            },
            {
            choice:"No",
            newText:`\"No.\"<br>\"Oh.\"<br>His demeanor changes, he seems disappointed. \"Suit yourself, I guess.\"`,
            destination:"comeOn"
            },
            {
            choice:"Say nothing",
            newText:"You walk down the road in silence for a while, until he stops with his arm outstretched in front of you, pointing into the forest. \"This way.\"",
            destination:"turnOff"
            }, ]
        },
    comeOn: {
        story:" You walk down the road in silence for a while, until he stops in place. \"I\'m turning off here,\" he points to the edge of the forest.<br> With a crooked smile he tacks on, \"Last chance.\"<br>",
        choices: [
            {
            choice:"Go with him",
            newText:` \"Okay.\"<br>\"Great.\"`,
            destination:"turnOff"
            },
            {
            choice:"Go home",
            newText:`\"No.\"<br>\"Oh.\"<br>His demeanor changes, he seems disappointed. \"Suit yourself, I guess.\"`,
            destination:"badEnd"
            }, ]
    },
    badEnd: {
        story:`You shake your head no and keep walking. Travis slips into the woods.	BORING ENDING`,
    },
    turnOff: {
        story: `You follow his movements as he steps through brush, over rocks embedded in the dirt and fallen trees. It\'s a path he\'s clearly familiar with. 
        Before anything else, you are hit by the smell. \"Here it is.\" `,
        buttonTitle: "Look at it",
        destination: "deadDeer"
    },
    deadDeer: {
        story: `You can\'t tell what it is at first. You make out two masses, figures, and bits of strange, unnatural colors that flash brightly against the contrasting tones of the earth. The air is swarming with flies.
        <br><br>Two deer carcasses- one hardly recognizable- are lined up next to each other on the ground, which you notice has been cleared. <br>The rightmost one has a tie around its neck and a suit jacket draped over its torso. The front leg is sticking through one of the sleeves, stiff over its distended stomach. 
        <br><br>The other one takes longer to make sense of. Underneath a writhing gray film of maggots, windows of bright blush pink can be seen. Some sort of slip- satin, maybe- has been affixed to it. Up at the head, right above the holes that were once eyes, sits a pillbox hat, adorned with fake roses and tufts of lace. 
        <br><br>The last thing you notice is the pearl necklace. 
        `,
        buttonTitle: "I see",
        destination: "deadDeer2",
    },
    deadDeer2: {
        story:`\"I did this one first\- as you can probably tell, it\'s pretty fucking rank.<br>\"And then I bagged this one about a quarter mile away and dragged it here yesterday. Lucky. He\'s still pretty fresh.
        <br>\"The clothes I found in the attic, stuff from my grandma.\"<br><br>He laughs, and points at the carcass. \"You like the necklace? There\'s these too.\" He kicks at the leg and you can see about a dozen bracelets rung around it, swaying hypnotically with the movement, making a quiet clacking sound. <br>\"You want one?\"<br>`,
        choices: [
            {
            choice:"Tell the truth",
            destination:"gift"
            },
            {
            choice:"Lie",
            destination:"puke"
            },
            {
            choice:"Say nothing",
            newText:`You are silent.<br>\"Suit yourself.\"<br>He stands there for a moment with his hands on his hips, admiring his handiwork. 
            \"Well, I just wanted someone else to see,\" he shrugs.<br>\"Before it\'s gone.\"`,
            destination:"leaving"
            }, ] 
    },
    gift: {
        story: `\"Yeah.\"<br><br> He pulls his shirt up over his nose and kneels down to the corpse, unfastening one of the bracelets from the leg. 
        He drops it in your hand. \"Here.\" <br>\"Thanks.\"<br><br>It\'s the first time anyone\'s given you jewelry before. `,
        buttonTitle: "Let's go",
        destination: "leaving"
    },
    puke: {
        story: `\"No.\"<br><br>You want to look away, but you can\'t stop staring at the wriggling tapestry of maggots spread over the deer.<br> A wave of panic suddenly washes over you, you double over and vomit. 
        <br>\"Sorry...\"<br>
        \"That\'s okay. It\'s normal.\"<br>You both stand in the silence.<br>
        \"Betchya they\'re gonna eat that-\" he gestures loosely to the small puddle by your feet- \"once they finish up over there.\"<br> 
        <br>\"Travis, I really need to go home now...\"
        <br>\"Okay, okay.\"`,
        buttonTitle: "Leave",
        destination: "leaving"

    },
    leaving: {
        story: `The two of you leave the woods, back the way you came in. You walk home in silence. <br><br>Travis is right beside you but you hardly notice; your mind keeps bringing you back to the hollowed out face of the deer, maggots in big piles like living tumors. 
        <br>He\'s walking you home, you guess.  `,
        buttonTitle: "Walk",
        destination: "leaving2"
    },
    leaving2: {
        story: `You think about him with a rifle slung over his shoulder, dragging the body through the woods. His hands tying the knot on the tie, straightening it to the neck. 
        <br><br>You\'re at your mailbox now. Your house, a one story shitbox not unlike his own, is farther from the road, up a ways on a hill. 
        <br>\"Thanks for coming over.\"<br>`,
        choices: [
            {
            choice:"Be warm",
            newText: "\"Sure. Thanks for inviting me.\"",
            destination:"end"
            },
            {
            choice:"Be cold",
            newText: "\"Yeah. Bye.\"",
            destination:"end"
            },
            {
            choice:"Say nothing",
            destination:"end"
            }, ] 
    },
    end: {
        story: `You turn and walk briskly up towards your house. As you climb the hill and near the front door you see your dad through the window, the back of his head. 
        He\'s sitting in his chair watching TV.<br><br> You turn and look back at the road but Travis is already gone.`,
        buttonTitle: "the end"
    }
}


document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('#start-button')
    var content = document.querySelector('#content')
    button.addEventListener('click', renderScene) 
}   )
    

function renderScene() {
    var text = "Next"
    
        if (story[story.currentScene].buttonTitle) {            // if button has a special name
            text = story[story.currentScene].buttonTitle        // we give it here
        }  
        
        content.innerHTML = `
        <p>
        ${story.bonusText}<br><br>
        ${story[story.currentScene].story}</p>  
        ${getInputs()}
        <button id = "submit-button">${text}</button>
        `

       var button = document.querySelector('#submit-button');
       button.addEventListener('click', function() {
        getInputValue()
       })

       story.bonusText = ""
        if (story[story.currentScene].newText2) {                    // collect bonus text if no button
            story.bonusText ="<br></br>"+story[story.currentScene].newText2
        }
}

function getInputValue() {
   var inputs = document.querySelectorAll('input[type="radio"]')
   for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
     
        if ((story[story.currentScene].choices[i].newText)) {
        story.bonusText = "<br><br>"+(story[story.currentScene].choices[i].newText)
        }
        story.currentScene = inputs[i].getAttribute('data-destination')
        
      renderScene();
      return;
       }
   }
   story.currentScene = story[story.currentScene].destination // for if there are no options
  renderScene()
}

function getInputs() { // creates radio buttons
    var input = ""
    if (!story[story.currentScene].choices) {
      return ""
    }
    for(var i = 0; i < story[story.currentScene].choices.length; i++) {
      input += `
      <div>
        <input data-destination = ${story[story.currentScene].choices[i].destination} id = "radio${i}" type = "radio" name = "choices" />
        <label for "radio${i}">${story[story.currentScene].choices[i].choice}</label>
      </div>`
    }
    return input;
  }
