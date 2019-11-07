# Blink1 Reaction Game

A simple reaction game for use with ThingM's Blink1 device.

The script will take a single argument, the maximum time before the light will come on in seconds, and use this argument to pick a random time (again in milliseconds) between 0 and MAX to turn on the light and start listening for keyboard input. When the spacebar is pressed the reaction time in ms will be displayed in the console and the light/keyboard listener will be turned off, giving the player the option of another game with the same parameters.

## Installation
1. Clone this repo.
2. run `npm install`
  
## Running

Run `node index.js X` where X is the maximum time before the light will come on in seconds.