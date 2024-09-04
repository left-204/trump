let apiUrl = "https://www.deckofcardsapi.com/api/deck/new/?jokers_enabled=true";
let shuffle_api = "";
let hand_api = "";
let deck_id = "";
let apiUrl_draw = "";
async function start(){
    let response = await fetch(apiUrl);
    //jsの型に変換
    let deck = await response.json();
    // console.log(deck.deck_id);
    // console.log(deck);

    //deck_idを取得して一枚引く
    deck_id = deck.deck_id;

    await shuffle();
}


async function shuffle(){
    apiUrl_draw = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/draw/?count=54";
    let response = await fetch(apiUrl_draw);
    //jsの型に変換
    let deck = await response.json();
    console.log(deck.cards[0].code);

    shuffle_api = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/shuffle/";
    response = await fetch(shuffle_api);
    //jsの型に変換
    deck = await response.json();
    console.log(deck)

    await fetch(apiUrl_draw);


    await hand();
}

async function hand(){
    hand_api = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/pile/hand/add/?cards=2S,3S,4S,2D,3D,4D,2C,3C,4C,2H,3H,4H,X1,X2";
    let response = await fetch(hand_api);
    //jsの型に変換
    let a_deck = await response.json();
    console.log("a_deck");
    console.log(a_deck.piles.hand);

    console.log(a_deck);

    hand_api = "https://www.deckofcardsapi.com/api/deck/" + deck_id + "/return/"
    response = await fetch(hand_api);
    //jsの型に変換
    a_deck = await response.json();
    apiUrl_draw = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/draw/?count=40";
    response = await fetch(apiUrl_draw);
    //jsの型に変換
    a_deck = await response.json();
    console.log(a_deck);
    // let list_api = "https://www.deckofcardsapi.com/api/deck/" + deck_id + "/pile/hand/list/";
    // response = await fetch(list_api);
    // let list = await response.json();
    // console.log("list");
    // console.log(list);


}