// TODO
//  - Customize colour
//  - Customize light effect (pulse, flash, etc.)
//  - Some sort of effect on completion.

const Blink1 = require('node-blink1');
const ioHook = require('iohook');
const readline = require('readline');

const blink = new Blink1();
const SPACE_BAR = 32;
const MAX_TIME_MS = process.argv[2] * 1000;

let startTime;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

ioHook.on("keypress", event => {
  if (event.keychar === SPACE_BAR) {
    blink.off();
    ioHook.stop();
    const duration = new Date().valueOf() - startTime.valueOf();
    console.log(`Reaction time: ${duration}`);

    rl.question('Play again? Y/y, anything else for No\n', (answer) => {
      const trimmed = answer.trim();
      if (trimmed === 'Y' || trimmed === 'y') {        
        newGame();
        rl.close();
      } else {
        process.exit();
      }
    });
  }
});

function newGame() {
  console.log(`Starting new game, max timeout = ${MAX_TIME_MS}\n`);
  const timeout = Math.floor(Math.random() * MAX_TIME_MS);

  setTimeout(() => {
    startTime = new Date();
    blink.setRGB(0, 255, 0);
    ioHook.start();
  }, timeout);
};

// Just in case.
blink.off();

newGame();
