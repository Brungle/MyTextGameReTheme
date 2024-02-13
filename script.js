// Text Adventure Game
const start = `Hi. LObotomy venture . Click 'OK'.`;

const enter = "Please enter HELP or RUN for your answer";

const gameOver = "Nevermore";

const q1 = `As you roam the streets after fleeing the hospital that kept you wrongfully contained for oh so long. But the people seem weird, they have many eyes. Do you...
HELP. gouge as many of their eyes out as you can. They can see too much and suffer because of it.
OR
RUN. Flee, run into the endless fields of flowers and rose petals.
${enter}`;

const gameOver1 = `They took you. ${gameOver}`;

const q2 = `The fields stretch forever. Never ending...
HELP. Search. Find the host and free yourself
OR
RUN. Dive in.
${enter}`;

const gameOver2 = `Where. ${gameOver}`;

const q3 = `Water and crystals shimmer and glow as you make your way further into the cocoon. Avoiding the hands that grab at you attempting to cage you..
HELP. Let them take you home.
OR
RUN. Hide and wait to see where it goes.
${enter}`;

const gameOver3 = `Back in the room of flesh and horrors. Everything you did was all for naught. ${gameOver}`;

const q4 = `It went into the crevice, they are close now, if you dont follow it, they will surely find you
HELP. Shoot at them, the eyes will surely forgive you. Anything is better then letting them get you.
OR
RUN. Where am I?
${enter}`;

const gameOver4 = `The eyes judge you. You have made an unforgivable mistake. They put you in the smile room until it is time to grant you the ultimate freedom. ${gameOver}`;

const q5 = `You follow him with your friends into the clearing, how someone this delirious could run for so long you do not know, however he cannot run anymore.
1. Attempt to reason with the distressed, clearly derranged man?
OR
2. Leave him be, he is only a threat to himself
${enter}`;

const gameOver5 = `You attempt to turn around and leave. The man shoots you in the back, your friends fall soon after ${gameOver}`;

const q6 = `They seem friendly...
HELP. Let them take you?
OR
2. Attempt to kill.
${enter}`;

const gameOver6 = `They were ready for you. You now swim in the sea of nothing. Gazing into the eternal abyss ${gameOver}`;


const win = `They lead you to a room, where they tie you to a bed, you kick and scream for the eyes to stop but they do not, your safe now. where you can't hurt others and vice versa. But you do not know that. The doors close on the psych ward for the night as you weep into the darkness. It was never real. The end.`;

// Alerts the user to start the game
alert(start);

// Sets the value of userInput to the user's entry
let userInput = prompt(q1);

// NESTED CONDITIONAL STATEMENTS
// 1st Conditional Statement
// NOTE: Prompts return the value entered as a string. That is why double equals == is used instead of triple equals (AKA Strict Equality)
if (userInput == `RUN`){
  userInput = prompt(q2);

  // 2nd Conditional Statement
  if (userInput == `RUN`){
    userInput = prompt(q3);

    // 3rd Conditional Statement
    if (userInput == `RUN`){
      userInput = prompt(q4);

      // 4th Conditional Statement
      if (userInput == `RUN`){
        userInput = prompt(q5);
      // 5
        if (userInput == 1){
            userInput = prompt(q6);

        // 5th (AKA Final) Conditional Statement
        if (userInput == `HELP`){
          alert(win);
        } else {
          alert(gameOver6);
        }

        }else {
            alert(gameOver5)
        }

      } else {
        alert(gameOver4);
      }

    } else {
      alert(gameOver3);
    }
    
  } else {
    alert(gameOver2);
  }
  
} else {
  alert(gameOver1);
}