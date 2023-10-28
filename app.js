// let btn = document.querySelector("#button")
// btn.addEventListener("click", () => {
//     let fac = getquote();
//     console.log(fac);
// });


// async function getquote() {
//     let quote =  await axios.get("https://quote-garden.onrender.com/api/v3/quotes");
//     return  quote.data.quoteText;
     
// }


// let btn = document.querySelector("#button");
// btn.addEventListener("click", () => {
//     getQuote(); // Call the getQuote function when the button is clicked
// });

// async function getQuote() {
//     try {
//         const response = await axios.get("https://api.example.com/quotes"); // Replace with a valid API endpoint
//         const quoteData = response.data;
//         console.log(quoteData);
//     } catch (error) {
//         console.error("Error getting the quote:", error);
//     }
// }

let btn = document.querySelector("#button");
btn.addEventListener("click", () => {
    let fac = getquote();
    console.log(fac);
});

async function getquote() {
    try {
        let response = await axios.get("https://quote-garden.onrender.com/api/v3/quotes");
        let random_num = Math.floor(Math.random()*5)+1;
        let quote = await response.data.data[random_num].quoteText;
        return quote;
    } catch (error) {
        return "Sorry, there is an issue in the API right now :(";
    }
}

