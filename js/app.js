const apiUrl = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
let deck_id ="";
let apiUrl2 = "";
document.getElementById("get").addEventListener("click", async () => {
    let response = await fetch(apiUrl);
    let trump = await response.json();
    console.log(trump.deck_id);
    deck_id = trump.deck_id;
    apiUrl2 = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/draw/?count=11";
    console.log(apiUrl2)
    let response2 = await fetch(apiUrl2);
    let trump2 = await response2.json();
    console.log(trump2.cards[0]);
    let card_img = document.createElement("img");
    card_img.src = trump2.cards[0].image;
    let disp = document.getElementById("display");
    disp.appendChild(card_img);
});


