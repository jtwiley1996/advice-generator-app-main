# Random Advice Generator

This project is a simple random advice generator that provides users with a piece of random advice upon button click. The generator is built using HTML, CSS, and JavaScript, with the addition of the jQuery library. The advice is fetched from the Advice Slip API.

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery
- Advice Slip API

## What I Learned

One of the key learnings from this project was how to create a unique timestamp to enhance data fetching. By appending a timestamp parameter to the API request URL, I ensured that each request was unique, preventing potential caching issues. This approach was crucial in ensuring that the advice generated correctly and that users received fresh and random advice with each click.

Additionally, this project provided hands-on experience in working with an external API. Understanding how to structure API requests, handle responses, and integrate the data into a web application was a valuable aspect of the learning process.

## How to Use

1. Visit the [Random Advice Generator](https://jtwiley1996.github.io/advice-generator-app-main/) hosted on GitHub Pages.
2. Click the "Get Advice" button to receive a piece of random advice.


## Code I'm Proud of 

`const uniqueParam = new Date().getTime();`

This is the code I used in my function to create enhance my data fetching. Before this, My app would generate a piece of random advice, but then that advice would remain the same and not change. 
