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

let para = document.querySelector(".para");
let writer = document.querySelector(".writer");
let btn = document.querySelector("#button");
btn.addEventListener("click", async () => {
    let fac = await getquote();
    para.innerText = fac[0];
    writer.innerText = fac[1];
});

async function getquote() {
    try {
        let response = await axios.get("https://quote-garden.onrender.com/api/v3/quotes");
        let random_num = Math.floor(Math.random()*5)+1;
        let quote = await response.data.data[random_num].quoteText;
        let auth = await response.data.data[random_num].quoteAuthor;
        let data = [quote,auth];
        return data;
    } catch (error) {
        return "Sorry, there is an issue in the API right now :(";
    }
}

