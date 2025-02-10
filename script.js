// Array of GIF sources
const gifs = [
    "your-gif-1.gif",  // Replace with your first GIF
    "your-gif-2.gif",  // Replace with your second GIF
    "your-gif-3.gif"   // Replace with your third GIF
];

// Get elements from the HTML
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const gifImage = document.getElementById('gifImage');

// Initialize a counter for the GIF index
let gifIndex = 0;

// Function to handle 'Yes' button click
yesButton.addEventListener('click', () => {
    // Change the GIF to the next one in the array
    gifIndex = (gifIndex + 1) % gifs.length;  // Loop back to the first GIF when reaching the end
    gifImage.src = gifs[gifIndex];  // Update the src attribute of the image

    // Make the 'Yes' button bigger
    yesButton.classList.add('grow');
});

// Function to handle 'No' button click
noButton.addEventListener('click', () => {
    // Change the GIF to the next one in the array
    gifIndex = (gifIndex + 1) % gifs.length;  // Loop back to the first GIF when reaching the end
    gifImage.src = gifs[gifIndex];  // Update the src attribute of the image

    // Remove the 'Yes' button's grow class to make it smaller
    yesButton.classList.remove('grow');
});
