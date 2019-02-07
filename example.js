// "use strict"; // Put at the top of every .js file you use if coding for es5, es6 always runs in strict mode

// js has no “main” method, you can just start writing code

// To use the VS code debugger, first click on the "pages" icon in the top left
// Then click "open folder" and open the folder that this file is in

// Now we need to install some extensions: ESLint, Chrome Debugger, and Code Runner

// Now, we can run the .js file from within VS code. Click the "play" button on the top right of the screen and the code below will run

let intro = "hello world";

console.log(intro);

// To use the debugger, go to the terminal on VS code on the bottom and type in "live-server" like we have in the normal terminal

// Now that the live server is running, we can use the debugger: Place a breakpoint here by clicking to the left of the line numbers on the left

// Click the icon on the left that looks like a bug and press the play button on the top to start

// You can see whatever variables have been declared and other useful information in the debug column
// Use the play on the top of this window to continue on in the program

console.log("hello world again");

// When checking for equality, use === and !=== for preciseness
console.log("42" == 42);
console.log("42" === 42);

console.log("10" != 10);
console.log("10" !== 10);

// some types can be coerced into another, this code will not cause errors like it would in python
let stringCoercion = "10" + 5;

let numberCoercion = "10" - 5;

console.log(stringCoercion);
console.log(numberCoercion);

// parseInt is a function that tries to parse an integer from a string
let fixedNumber = parseInt(stringCoercion);

console.log(typeof fixedNumber);

// javascript objects are similar to dictionaries in python
let charmander = {
  name: "Charmander",
  type: "fire",
  level: 14,
  info: {
    description: "fire lizard",
    evolution: "charmeleon"
  }
};

let chikorita = {
  name: "Chikorita",
  type: "grass",
  level: 12,
  info: {
    description: "friendly pear",
    evolution: "bayleef"
  }
};

console.log(charmander.type);
console.log(chikorita.info.evolution);

// arrays are a special type of object in js, but works similarly to python besides syntax differences

let myPokemon = [chikorita, charmander];

console.log(myPokemon);

console.log("my best pokemon: " + myPokemon[0]);

console.log("my best pokemon: " + myPokemon[0].name);

console.log("I have" + myPokemon.length + " pokemon");

// functions and control structures, likely very familiar
function battle(firstPokemon, secondPokemon) {
  if (firstPokemon.level > secondPokemon.level) {
    console.log(firstPokemon.name + " wins!");
  } else {
    console.log(secondPokemon.name + " wins!");
  }
}

battle(chikorita, charmander);

// myPokemon.forEach(function(pokemon) {
//   pokemon.level = 100;
// });
