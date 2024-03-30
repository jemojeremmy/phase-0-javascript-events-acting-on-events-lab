// helpers.js

function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const leftPosition = parseInt(dodger.style.left.replace('px', '')); // Get current left position
    const newPosition = Math.max(0, leftPosition - 1); // Move left by 1 pixel, ensuring it doesn't go beyond the left edge
    dodger.style.left = newPosition + 'px'; // Update left position
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const leftPosition = parseInt(dodger.style.left.replace('px', '')); // Get current left position
    const newPosition = Math.min(360, leftPosition + 1); // Move right by 1 pixel, ensuring it doesn't go beyond the right edge
    dodger.style.left = newPosition + 'px'; // Update left position
  }
  
  module.exports = { moveDodgerLeft, moveDodgerRight };
  