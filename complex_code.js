/*
 * filename: complex_code.js
 * content: A complex JavaScript code that simulates a virtual pet game.
 * It includes various classes, methods, and interactions with the user.
 */

// Pet Class
class Pet {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.energy = 100;
    this.mood = 'happy';
  }

  feed() {
    if (this.hunger > 0) {
      this.hunger -= 10;
      console.log(`${this.name} has been fed.`);
    } else {
      console.log(`${this.name} is not hungry.`);
    }
  }

  sleep() {
    if (this.energy < 100) {
      this.energy += 20;
      console.log(`${this.name} fell asleep.`);
    } else {
      console.log(`${this.name} is not sleepy.`);
    }
  }

  play() {
    if (this.energy > 20) {
      this.energy -= 20;
      this.mood = 'happy';
      console.log(`${this.name} enjoyed the playtime.`);
    } else {
      console.log(`${this.name} is too tired to play.`);
    }
  }

  birthday() {
    this.age++;
    console.log(`Happy Birthday, ${this.name}! You are now ${this.age} years old.`);
  }
}

// Cat Class (inherits from Pet)
class Cat extends Pet {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  meow() {
    console.log("Meow!");
  }
}

// Dog Class (inherits from Pet)
class Dog extends Pet {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  bark() {
    console.log("Woof woof!");
  }
}

// Virtual Pet Game
const main = () => {
  console.log("Welcome to Virtual Pet Game!");

  let petType = prompt("Choose a pet type: [1] Cat / [2] Dog");
  let petName = prompt("Enter pet's name:");
  let petBreed = prompt("Enter pet's breed:");

  let pet;
  if (petType === "1") {
    pet = new Cat(petName, petBreed);
  } else if (petType === "2") {
    pet = new Dog(petName, petBreed);
  } else {
    console.log("Invalid choice. Exiting game...");
    return;
  }
  
  console.log(`You adopted a ${pet.breed} named ${pet.name}!`);
  console.log(`Your new pet's age is ${pet.age}.`);

  while (true) {
    let action = prompt("Choose an action: [f] Feed / [s] Sleep / [p] Play / [b] Birthday / [q] Quit");

    if (action === 'f') {
      pet.feed();
    } else if (action === 's') {
      pet.sleep();
    } else if (action === 'p') {
      pet.play();
    } else if (action === 'b') {
      pet.birthday();
    } else if (action === 'q') {
      break;
    } else {
      console.log("Invalid action. Try again.");
    }

    console.log(`${pet.name}'s status: Age: ${pet.age} | Hunger: ${pet.hunger} | Energy: ${pet.energy} | Mood: ${pet.mood}`);
  }

  console.log("Thank you for playing Virtual Pet Game!");
};

// Start the game
main();