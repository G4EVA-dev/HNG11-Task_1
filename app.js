const currentTimeUTC = document.getElementById("currentTime");
const changing_text = document.getElementById("changingText");
const myImage = document.getElementById("myImage");
console.log(myImage.naturalHeight);

//! To Change The Greeting Text
const textContainer = document.getElementById("text-container");
const textBox = [
  "Football⚽️",
  "Music🎹",
  "Movies🎥",
  "Anime🥷🏼",
  "Coding🧑🏽‍💻",
  "Reading📚",
];
let currentTextIndex = 0;
let characterIndex = 0;

function typeWriter() {
  if (characterIndex < textBox[currentTextIndex].length) {
    textContainer.textContent +=
      textBox[currentTextIndex].charAt(characterIndex);
    characterIndex++;
    setTimeout(typeWriter, 150); // Adjust delay for typing speed (lower for faster)
  } else {
    // Move to the next word without clearing the container
    setTimeout(() => {
      characterIndex = 0;
      currentTextIndex = (currentTextIndex + 1) % textBox.length;
      textContainer.textContent = ""; // Clear the text container
      typeWriter(); // Call directly to start typing the next word
    }, 1000);
  }
}

typeWriter();

//! Working with Date object
const now = new Date();
//Time
const time = now.getTime();
const utcString = now.toString();
currentTimeUTC.textContent = utcString;

//Day
const currentDay = document.getElementById("show_day");
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDayIndex = now.getDay(); // 0 (Sunday) to 6 (Saturday)
currentDay.textContent = daysOfWeek[currentDayIndex];
console.log(`Today is ${currentDayIndex}`);