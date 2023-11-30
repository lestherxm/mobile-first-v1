let container = document.querySelector('.plans-card-slider');
let elements = container.children; // Gets all child elements of the container
let centralElement = elements[Math.floor(elements.length / 2)]; // Gets the central element

// Calculates the position of the central element
let centralPosition = centralElement.offsetLeft - (container.offsetWidth / 2) + (centralElement.offsetWidth / 2);

// Scrolls to the central element
container.scrollLeft = centralPosition;