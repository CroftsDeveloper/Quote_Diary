// Function for managing page load behavior
document.addEventListener('DOMContentLoaded', () => {
    // Set initial opacity to 0 to enable smooth transition
    document.body.style.opacity = 0;

    // Gradually transition to full opacity after page load
    window.onload = () => {
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease-in-out';
            document.body.style.opacity = 1;
        }, 100);
    };

    // Initialise dynamic greeting based on time of day
    updateDateAndGreeting();

    // Initialise features after DOM content is loaded
    initializeFeatures();
});

// Function to handle confirmation of quote deletion
function confirmDelete(quoteId) {
    // Confirm deletion with user
    if (confirm("Are you sure you want to delete this quote?")) {
        // Send request to delete quote
        fetch(`/delete_quote/${quoteId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'quoteId': quoteId })
        }).then(response => {
            // Reload page if deletion successful
            if (response.ok) {
                window.location.reload();
            } else {
                alert("An error occurred while trying to delete the quote.");
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    }
}

// Set up author search functionality
function setupAuthorSearch() {
    const authorSearchElement = document.getElementById('authorSearch');
    if (authorSearchElement) {
        authorSearchElement.addEventListener('input', filterQuotesByAuthor);
    }
}

// Function to filter quotes based on author name
function filterQuotesByAuthor() {
    const searchValue = document.getElementById('authorSearch').value.toLowerCase();
    const quotes = document.querySelectorAll('.card');
    quotes.forEach(quote => {
        const author = quote.querySelector('.blockquote-footer').innerText.toLowerCase();
        quote.style.display = author.includes(searchValue) ? '' : 'none';
    });
}

// Set up copy to clipboard functionality
function setupCopyToClipboard() {
    const copyButtons = document.querySelectorAll('.copy-to-clipboard');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            copyToClipboard(this);
        });
    });
}

// Function to copy quote text and author to clipboard
function copyToClipboard(buttonElement) {
    const quoteCard = buttonElement.closest('.card');
    const quoteText = quoteCard.querySelector('.card-body blockquote p').innerText;
    const authorText = quoteCard.querySelector('.blockquote-footer').innerText;
    const fullText = `"${quoteText}" — ${authorText}`;
    
    navigator.clipboard.writeText(fullText).then(() => {
        buttonElement.textContent = 'Copied!';
        setTimeout(() => buttonElement.textContent = 'Copy', 2000);
    }).catch(err => console.error('Failed to copy: ', err));
}

// Set up form submission event listeners
function setupFormSubmissions() {
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
}

// Set up character count functionality for input fields
function setupCharacterCount() {
    setupCharacterCountField('quoteContent', 'contentCharCount');
    setupCharacterCountField('authorInput', 'authorCharCount');
}

// Function to initialise various features
function initializeFeatures() {
    setupAuthorSearch();
    setupCharacterCount();
    setupCopyToClipboard();
    setupFormSubmissions();
}

// Function to update character count display for input fields
function updateCharacterCount(inputField, charCountDisplay) {
    const maxLength = inputField.getAttribute('maxlength'); // Get the max length of the input field
    const currentLength = inputField.value.length;
    const charactersLeft = maxLength - currentLength; // Calculate remaining characters

    if (charCountDisplay) {
        // Update the text content to show current count and characters left
        charCountDisplay.textContent = `Character Count: ${currentLength}/${maxLength} (Left: ${charactersLeft})`;
    }
}

// Helper function to setup character count for specific fields
function setupCharacterCountField(inputFieldId, charCountDisplayId) {
    const inputField = document.getElementById(inputFieldId);
    const charCountDisplay = document.getElementById(charCountDisplayId);

    // Call updateCharacterCount initially to show the count on page load
    updateCharacterCount(inputField, charCountDisplay);

    // Add input event listener to the field to update character count dynamically
    inputField.addEventListener('input', () => updateCharacterCount(inputField, charCountDisplay));
}

// Update dynamic date and greeting message
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

// Function to validate login form inputs
function validateLoginForm() {
    const username = document.getElementById('usernameInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();
    let valid = true;

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

    if (!valid) {
        displayError('loginError', 'Incorrect username or password. Please try again.');
    }

    return valid;
}

// Function to validate signup form inputs
function validateSignupForm() {
    const username = document.getElementById('usernameInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();
    const confirmPassword = document.getElementById('confirmPasswordInput').value.trim();
    let valid = true;

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

// Function to display error messages
function displayError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

// Function to clear error messages
function clearError(errorId) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = '';
    }
}
