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
