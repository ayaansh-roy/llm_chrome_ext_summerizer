document.addEventListener('mouseup', function(event) {
    const selectedText = window.getSelection().toString().trim(); // Get selected text and trim whitespace
    if (selectedText !== '' && selectedText.length > 50) {
        // Action to perform when text is selected and its length is more than 10 characters
        console.log("Selected text:", selectedText);
        
        // Send selected text to the server, for example
        fetch('http://localhost:5000/summary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: selectedText })
        })
        .then(response => response.json())
        .then(data => {
            alert(`summary: ${data.summary}`);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});
