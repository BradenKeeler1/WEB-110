/* 
Random Quote Generator
Author: Braden Keeler
Date: 12/09/2025
Purpose: Display random quotes using JavaScript DOM manipulation and event listeners.
*/

// Array of quote objects
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
];


const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote");


function generateQuote() {
   
    const index = Math.floor(Math.random() * quotes.length);

    if (quotes[index]) {
        quoteText.textContent = `"${quotes[index].text}"`;
        quoteAuthor.textContent = `- ${quotes[index].author}`;
    } else {
        quoteText.textContent = "Oops! No quote found.";
        quoteAuthor.textContent = "";
    }
}


newQuoteBtn.addEventListener("click", generateQuote);


