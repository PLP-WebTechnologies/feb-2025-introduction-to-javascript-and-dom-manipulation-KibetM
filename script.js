// Change Text Content Dynamically
document.getElementById('change-text-button').addEventListener('click', function() {
  const introText = document.getElementById('intro-text');
  introText.textContent = 'You changed the text dynamically!';
});

// Modify CSS Styles via JavaScript
document.getElementById('change-style-button').addEventListener('click', function() {
  document.body.style.backgroundColor = '#f0f8ff'; // Changes the background color
  document.body.style.color = '#333'; // Changes the text color
});

// Add or Remove an Element When a Button is Clicked
document.getElementById('add-element-button').addEventListener('click', function() {
  const newElementContainer = document.getElementById('new-element-container');
  const newElement = document.createElement('p');
  newElement.textContent = 'This is a new element added dynamically!';
  newElement.style.color = 'green'; // Optional styling for the new element
  newElementContainer.appendChild(newElement);
});

document.getElementById('remove-element-button').addEventListener('click', function() {
  const newElementContainer = document.getElementById('new-element-container');
  const lastElement = newElementContainer.lastElementChild;
  if (lastElement) {
    newElementContainer.removeChild(lastElement);
  }
});