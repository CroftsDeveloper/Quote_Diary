// Function for page load changes
document.addEventListener('DOMContentLoaded', () => {
    // Set initial opacity to 0
    document.body.style.opacity = 0;

    // After loading, gradually transition to full opacity
    window.onload = () => {
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease-in-out';
            document.body.style.opacity = 1;
        }, 100);
    };

    // Initialize the dynamic greeting based on time of day
    updateDateAndGreeting();

    // Initialize other features after DOM content is loaded
    setupAuthorSearch();
    setupCharacterCount('quoteContent', 'contentCharCount');
    setupCharacterCount('authorInput', 'authorCharCount');
    
    // Set up event listeners for copy to clipboard buttons
    const copyButtons = document.querySelectorAll('.copy-to-clipboard');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            copyToClipboard(this);
        });
    });

    // Set up event listener for form submissions
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            if (!validateLoginForm()) {
                event.preventDefault();
            }
        });
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            if (!validateSignupForm()) {
                event.preventDefault();
            }
        });
    }
});

// Function to confirm quote deletion
function confirmDelete(quoteId) {
    // Confirm dialog
    if (confirm("Are you sure you want to delete this quote?")) {
        // Send a POST request to the server to delete the quote
        fetch(`/delete_quote/${quoteId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'quoteId': quoteId })
        }).then(response => {
            // Check if the deletion was successful
            if (response.ok) {
                // Remove the quote from the display or reload the page
                window.location.reload();
            } else {
                alert("An error occurred while trying to delete the quote.");
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    }
}

// Set up the event listener for author search input
function setupAuthorSearch() {
    const authorSearchElement = document.getElementById('authorSearch');
    if (authorSearchElement) {
        // Event listener triggers when user types in the search field
        authorSearchElement.addEventListener('input', filterQuotesByAuthor);
    }
}

// Filters quotes based on the author name
function filterQuotesByAuthor() {
    // Retrieve current search value and convert to lowercase for case-insensitive comparison
    const searchValue = document.getElementById('authorSearch').value.toLowerCase();
    // Select all quote cards
    const quotes = document.querySelectorAll('.card');
    quotes.forEach(quote => {
        // Get the author's name and check if it includes the search value
        const author = quote.querySelector('.blockquote-footer').innerText.toLowerCase();
        // Display or hide the quote based on the search match
        quote.style.display = author.includes(searchValue) ? '' : 'none';
    });
}

// Function to copy quote text and author to the clipboard
function copyToClipboard(buttonElement) {
    // Find the closest quote card element
    const quoteCard = buttonElement.closest('.card');
    
    // Extract the quote text and author
    const quoteText = quoteCard.querySelector('.card-body blockquote p').innerText;
    const authorText = quoteCard.querySelector('.blockquote-footer').innerText;
    
    // Combine the quote and author text
    const fullText = `"${quoteText}" — ${authorText}`;
    
    // Use the navigator clipboard API to copy text
    navigator.clipboard.writeText(fullText).then(() => {
        // Change the button text temporarily to indicate the copy action
        buttonElement.textContent = 'Copied!';
        setTimeout(() => buttonElement.textContent = 'Copy', 2000);
    }).catch(err => console.error('Failed to copy: ', err));
}

// Set up character count functionality for given input field
function setupCharacterCount(inputFieldId, charCountDisplayId) {
    const inputFieldElement = document.getElementById(inputFieldId);
    const charCountDisplay = document.getElementById(charCountDisplayId);

    if (inputFieldElement && charCountDisplay) {
        // Update character count immediately in case of pre-filled values
        updateCharacterCount(inputFieldElement, charCountDisplay);

        // Attach event listener to input field
        inputFieldElement.addEventListener('input', () => {
            updateCharacterCount(inputFieldElement, charCountDisplay);
        });
    }
}

// Update character count for a specific input field
function updateCharacterCount(inputField, charCountDisplay) {
    const maxLength = inputField.getAttribute('maxlength'); // Get the maximum length attribute of the input field
    if (charCountDisplay) {
        // Display current length and maximum length
        charCountDisplay.textContent = inputField.value.length + '/' + maxLength;
    }
}

// Update character count for a specific input field
function updateCharacterCount(inputField, charCountDisplay) {
    if (charCountDisplay) {
        charCountDisplay.textContent = 'Character Count: ' + inputField.value.length;
    }
}

function updateDateAndGreeting() {
    const dateElement = document.getElementById('dynamicDate');
    if (dateElement) {
        const now = new Date();
        const hours = now.getHours();
        let greeting = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';
        const dateString = now.toLocaleDateString("en-GB", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

        let username = document.body.getAttribute('data-username');
        dateElement.innerHTML = `${greeting}, ${username}.<br>Today is ${dateString}.`;
    }
}

// Function to validate login form
function validateLoginForm() {
    const username = document.getElementById('usernameInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();
    let valid = true;

    // Validation logic for username and password
    if (username === '') {
        valid = false;
        displayError('usernameError', 'Username is required.');
    } else {
        clearError('usernameError');
    }

    if (password === '') {
        valid = false;
        displayError('passwordError', 'Password is required.');
    } else {
        clearError('passwordError');
    }

    // Display login error message if needed
    if (!valid) {
        displayError('loginError', 'Incorrect username or password. Please try again.');
    }

    return valid;
}

// Function to validate signup form
function validateSignupForm() {
    const username = document.getElementById('usernameInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();
    const confirmPassword = document.getElementById('confirmPasswordInput').value.trim();
    let valid = true;

    // Validation logic for username, password, and password confirmation
    if (username === '') {
        valid = false;
        displayError('usernameError', 'Username is required.');
    } else {
        clearError('usernameError');
    }

    if (password === '') {
        valid = false;
        displayError('passwordError', 'Password is required.');
    } else {
        clearError('passwordError');
    }

    if (confirmPassword === '') {
        valid = false;
        displayError('confirmPasswordError', 'Confirm Password is required.');
    } else if (confirmPassword !== password) {
        valid = false;
        displayError('confirmPasswordError', 'Passwords do not match.');
    } else {
        clearError('confirmPasswordError');
    }

    return valid;
}

// Function to display an error message
function displayError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

// Function to clear an error message
function clearError(errorId) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = '';
    }
}