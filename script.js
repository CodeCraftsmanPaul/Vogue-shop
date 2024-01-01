const textElement = document.getElementById("text");
const staticText = "OUR PRODUCT"; // Set the static text to "OUR PRODUCT"
let letterIndex = 0;
let isErasing = false;

function type() {
  if (!isErasing) {
    if (letterIndex <= staticText.length) {
      textElement.innerHTML =
        staticText.slice(0, letterIndex) + "<span class='cursor'></span>";
      letterIndex++;
      setTimeout(type, 100); // Typing speed (slower)
    } else {
      isErasing = true;
      setTimeout(() => {
        letterIndex--; // Start erasing from the last character of the static text
        type(); // Start erasing immediately
      }, 1000); // Delay before starting the erasing animation (1 second)
    }
  } else if (isErasing) {
    if (letterIndex >= 0) {
      textElement.innerHTML =
        staticText.slice(0, letterIndex) + "<span class='cursor'></span>";
      letterIndex--;
      setTimeout(type, 50); // Erasing speed
    } else {
      isErasing = false;
      setTimeout(() => {
        letterIndex = 0; // Reset letter index to 0
        type(); // Restart typing animation
      }, 1000); // Delay before starting the typing animation again (1 second)
    }
  }
}

type();
