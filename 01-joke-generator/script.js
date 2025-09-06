document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate-btn');
    const jokeSetup = document.getElementById('joke-setup');
    const jokePunchline = document.getElementById('joke-punchline');
    const loading = document.getElementById('loading');

    generateBtn.addEventListener('click', generateJoke);

    async function generateJoke() {
        try {
            // Show loading state
            generateBtn.disabled = true;
            loading.classList.remove('hidden');
            jokeSetup.classList.remove('fade-in');
            jokePunchline.classList.add('hidden');
            jokePunchline.classList.remove('punchline-reveal');

            // Fetch programming joke from API
            let response = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
            
            // If programming jokes fail, fallback to general jokes
            if (!response.ok) {
                console.log('Programming jokes endpoint failed, trying general jokes...');
                response = await fetch('https://official-joke-api.appspot.com/random_joke');
            }
            
            if (!response.ok) {
                throw new Error('Failed to fetch joke');
            }

            const data = await response.json();
            
            // Log the response to debug
            console.log('API Response:', data);
            
            // Check if we have valid data (API might return array or object)
            let jokeSetupText, jokePunchlineText;
            
            if (Array.isArray(data) && data.length > 0) {
                // If response is an array, take the first item
                jokeSetupText = data[0].setup;
                jokePunchlineText = data[0].punchline;
            } else if (data.setup && data.punchline) {
                // If response is an object
                jokeSetupText = data.setup;
                jokePunchlineText = data.punchline;
            } else {
                throw new Error('Invalid response format');
            }
            
            // Update the joke display
            jokeSetup.textContent = jokeSetupText;
            jokeSetup.classList.add('fade-in');
            
            // Show punchline after a short delay
            setTimeout(() => {
                jokePunchline.textContent = jokePunchlineText;
                jokePunchline.classList.remove('hidden');
                jokePunchline.classList.add('punchline-reveal');
            }, 1000);
            
        } catch (error) {
            console.error('Error fetching joke:', error);
            jokeSetup.textContent = 'Sorry, we couldn\'t fetch a joke right now. Please try again!';
            jokePunchline.classList.add('hidden');
        } finally {
            // Hide loading state
            generateBtn.disabled = false;
            loading.classList.add('hidden');
        }
    }
});