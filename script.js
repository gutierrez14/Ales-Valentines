// Array of Tenor post IDs for the GIFs
const gifs = [
    "13074631538303012999",  // First Tenor GIF
    "another-gif-post-id",     // Replace with other GIF post IDs
    "yet-another-gif-post-id"  // Replace with another one
];

// Get elements from the HTML
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const gifContainer = document.getElementById('gifContainer');

// Initialize a counter for the GIF index
let gifIndex = 0;

// Function to handle 'Yes' button click
yesButton.addEventListener('click', () => {
    // Change the Tenor GIF to the next one in the array
    gifIndex = (gifIndex + 1) % gifs.length;  // Loop back to the first GIF when reaching the end
    gifContainer.setAttribute('data-postid', gifs[gifIndex]);  // Update the data-postid attribute

    // Make the 'Yes' button bigger
    yesButton.classList.add('grow');
});

// Function to handle 'No' button click
noButton.addEventListener('click', () => {
    // Change the Tenor GIF to the next one in the array
    gifIndex = (gifIndex + 1) % gifs.length;  // Loop back to the first GIF when reaching the end
    gifContainer.setAttribute('data-postid', gifs[gifIndex]);  // Update the data-postid attribute

    // Remove the 'Yes' button's grow class to make it smaller
    yesButton.classList.remove('grow');
});
