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
});

// Function to confirm quote deletion
function confirmDelete(quoteId) {
    // Confirm dialog
    if(confirm("Are you sure you want to delete this quote?")) {
        // Send a POST request to the server to delete the quote
        fetch(`/delete_quote/${quoteId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'quoteId': quoteId })
        }).then(response => {
            // Check if the deletion was successful
            if(response.ok) {
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
    if (charCountDisplay) {
        charCountDisplay.textContent = 'Character Count: ' + inputField.value.length;
    }
}

// Initialise the author search and character count features when the document fully loaded
document.addEventListener('DOMContentLoaded', () => {
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
});

