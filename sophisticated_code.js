/* 
  Filename: sophisticated_code.js
  Description: This code is a simulation of a virtual art gallery with various interactive features.
*/

// Create Gallery object
class Gallery {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.artworks = [];
  }

  // Method to add artworks to the gallery
  addArtwork(artwork) {
    this.artworks.push(artwork);
  }

  // Method to display all artworks in the gallery
  displayArtworks() {
    console.log(`Artworks in ${this.name} gallery:`);
    this.artworks.forEach((artwork, index) => {
      console.log(`${index + 1}. ${artwork.title} by ${artwork.artist}`);
    });
  }
}

// Create Artwork object
class Artwork {
  constructor(title, artist, medium, year) {
    this.title = title;
    this.artist = artist;
    this.medium = medium;
    this.year = year;
  }

  // Method to calculate the age of the artwork
  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

// Create Gallery and Artwork instances
const artGallery = new Gallery("Modern Art Gallery", "New York");

const artwork1 = new Artwork("The Starry Night", "Vincent van Gogh", "Oil on canvas", 1889);
const artwork2 = new Artwork("Mona Lisa", "Leonardo da Vinci", "Oil on poplar", 1503);
const artwork3 = new Artwork("The Persistence of Memory", "Salvador Dalí", "Oil on canvas", 1931);

// Add artworks to the gallery
artGallery.addArtwork(artwork1);
artGallery.addArtwork(artwork2);
artGallery.addArtwork(artwork3);

// Display all artworks in the gallery
artGallery.displayArtworks();

// Output the age of each artwork
console.log("\nAge of each artwork:");
artGallery.artworks.forEach((artwork, index) => {
  console.log(`${index + 1}. ${artwork.title} - ${artwork.getAge()} years old`);
});

// Simulate user interaction
console.log("\nUser Interaction:");
artGallery.artworks.forEach((artwork, index) => {
  console.log(`User views artwork: ${artwork.title}`);

  // Simulating user rating
  const randomRating = Math.floor(Math.random() * 5) + 1;
  console.log(`User rates the artwork: ${randomRating}`);

  // Simulating user comments
  const randomCommentIndex = Math.floor(Math.random() * comments.length);
  const randomComment = comments[randomCommentIndex];
  console.log(`User comments on the artwork: ${randomComment}`);

  // Simulating user favorite
  const favoriteArtworkIndex = Math.floor(Math.random() * artGallery.artworks.length);
  console.log(`User marks the artwork as favorite: ${artGallery.artworks[favoriteArtworkIndex].title}`);
});

// List of sample comments
const comments = [
  "Great work!",
  "Love the colors!",
  "Truly inspiring!",
  "Masterpiece!",
  "Captivating!",
  "Incredible detail!",
  "Impressive composition!"
];

// ... More code ...

// ... More code ...

// ... More code ...

// ... More code ...

// ... More code ...

// ... More code ...

// ... More code ...

// ... More code ...

// ... More code ... (Over 200 lines)