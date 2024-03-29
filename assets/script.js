document.getElementById('button').addEventListener('click', function() {
    // Clear existing advice and ID
    document.getElementById('adviceResult').innerHTML = '';
    document.getElementById('adviceID').innerHTML = '';

    // Generate a random parameter
    const uniqueParam = new Date().getTime(); // Using timestamp as an example

    // Make a new API request for advice with the unique parameter
    fetch(`https://api.adviceslip.com/advice?${uniqueParam}`)
        .then(response => response.json())
        .then(data => {
            const adviceResult = document.getElementById('adviceResult');
            const adviceId = document.getElementById('adviceID');
            const adviceLine = document.querySelector('.advice-line'); 

            adviceResult.innerHTML = `"${data.slip.advice}"`;
            adviceId.innerHTML = `A D V I C E # ${data.slip.id}`;

            adviceLine.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching advice:', error);
        });
});
