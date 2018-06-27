// Set quotes
const data = {
    "quotes": {
        1: "my name's simon and I know HTML",
        2: "use clumsyCSS reset",
        3: "there's a jquery plugin for that",
        4: "javascript will take over the world",
        5: "the more needlessly complex your CSS is, the more professional you are",
        6: "I spend a lot of time thinking about mixins vs extends",
        7: "Is it !important?"
    }
}

// Loopy looper
let dataMap = data.quotes;
let quote = document.getElementById('quote');

let values = Object.keys(dataMap).reduce(
    (valueArr, key) => [...valueArr, dataMap[key]], 
    []
);

// Get a random quote
function randomQuote() {
    return values[Math.floor(Math.random() * values.length)];
}

// Update quote box
function updateQuote() {
    quote.innerHTML = randomQuote();
}

// Run on load
document.addEventListener('DOMContentLoaded', () => {
    updateQuote();
});

// Run on spacebar
document.addEventListener('keyup', (event) => {
    if (event.keyCode == 32) {
        updateQuote();
    }
});