let para = document.querySelector(".para");
let writer = document.querySelector(".writer");
let btn = document.querySelector("#button");
btn.addEventListener("click", async () => {
    let fac = await getquote();
    para.innerText = `"${fac[0]}"`;
    writer.innerText = `~ ${fac[1]}`;
});

async function getquote() {
    try {
        let response = await axios.get("https://quote-garden.onrender.com/api/v3/quotes");
        let random_num = Math.floor(Math.random()*9);
        let quote = await response.data.data[random_num].quoteText;
        let auth = await response.data.data[random_num].quoteAuthor;
        let data = [quote,auth];
        return data;
    } catch (error) {
        para.innerText = `"Sorry, there is an issue in the API right now :("`;  
    }
}

