document.addEventListener('DOMContentLoaded', function () {
        // Get the body element
        var body = document.body;

        // Check if the body has no children
        if (body.childElementCount === 0) {
            // Create a new paragraph element
            var paragraph = document.createElement('p');

            // Set the text content of the paragraph
            paragraph.textContent = 'DOM load success';

            // Append the paragraph to the body
            body.appendChild(paragraph);
        }
    });