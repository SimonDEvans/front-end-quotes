// Set quotes
const data = {
    "quotes": {
        1: "My name's Simon and I know HTML",
        2: "Use clumsyCSS reset",
        3: "There's a jQuery plugin for that",
        4: "Javascript will take over the world",
        5: "The more needlessly complex your CSS is, the more professional you are",
        6: "I spend a lot of time thinking about mixins vs extends",
        7: "Is it !important?",
        8: "Imagine a frontend made solely from variables and mixins"
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
