/ Get elements
const storyForm = document.getElementById('storyForm');
const thankYouMessage = document.getElementById('thankYouMessage');

// Add event listener to form
storyForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Show the Thank You message
    thankYouMessage.style.display = 'block';

    // Clear the textarea (optional)
    document.getElementById('storyInput').value = '';
});