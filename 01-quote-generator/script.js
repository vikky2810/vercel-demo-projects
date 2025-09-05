document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate-btn');
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const loading = document.getElementById('loading');

    generateBtn.addEventListener('click', generateQuote);

    async function generateQuote() {
        try {
            // Show loading state
            generateBtn.disabled = true;
            loading.classList.remove('hidden');
            quoteText.classList.remove('fade-in');

            // Fetch quote from API
            const response = await fetch('https://api.quotable.io/random');
            
            if (!response.ok) {
                throw new Error('Failed to fetch quote');
            }

            const data = await response.json();
            
            // Update the quote display
            quoteText.textContent = `"${data.content}"`;
            quoteAuthor.textContent = `— ${data.author}`;
            
            // Add fade-in animation
            quoteText.classList.add('fade-in');
            
        } catch (error) {
            console.error('Error fetching quote:', error);
            quoteText.textContent = 'Sorry, we couldn\'t fetch a quote right now. Please try again!';
            quoteAuthor.textContent = '';
        } finally {
            // Hide loading state
            generateBtn.disabled = false;
            loading.classList.add('hidden');
        }
    }
});
