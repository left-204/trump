//ジョーカー入りのデッキurl
let apiUrl = "https://www.deckofcardsapi.com/api/deck/new/?jokers_enabled=true";
let shuffle_api = "";
let hand_api = "";
let apiUrl_draw = "";
let return_api ="";

let deck_id = "";
let response = "";
let deck = "";

async function start(){
    //デッキ生成
    response = await fetch(apiUrl);
    //jsの型に変換
    deck = await response.json();
    
    deck_id = deck.deck_id;
    //山札をシャッフルする
    await shuffle();
    //山札を分ける
    await divide();
    //handの確認
    await hand();

    await set();
}


async function shuffle(){
    //シャッフルする
    shuffle_api = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/shuffle/";
    response = await fetch(shuffle_api);
    //jsの型に変換
    deck = await response.json();
    console.log("シャッフルしました");
    console.log(deck);
}

async function divide(){
    //山を分けるために一回引く
    apiUrl_draw = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/draw/?count=54";
    response = await fetch(apiUrl_draw);
    //jsの型に変換
    deck = await response.json();
    console.log("一旦引きます");
    console.log(deck.cards);

    //手札用の山札に分ける
    hand_api = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/pile/hand/add/?cards=2S,3S,4S,2D,3D,4D,2C,3C,4C,2H,3H,4H,X1,X2";
    response = await fetch(hand_api);
    //jsの型に変換
    deck = await response.json();
    console.log("山札を分けました");
    console.log(deck.piles.hand);
    
    hand_api = "https://www.deckofcardsapi.com/api/deck/" + deck_id + "/pile/hand/shuffle/"
    response = await fetch(hand_api);
    //jsの型に変換
    deck = await response.json();
    console.log("handをシャッフルします");
    console.log(deck.piles.hand);

    //手札以外のカードを山札に戻す
    return_api = "https://www.deckofcardsapi.com/api/deck/" + deck_id + "/return/"
    response = await fetch(return_api);
    //jsの型に変換
    deck = await response.json();
    console.log("山札を戻しました");
    console.log(deck);
}

async function hand(){

    apiUrl_draw = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/draw/?count=40";
    response = await fetch(apiUrl_draw);
    //jsの型に変換
    deck = await response.json();
    console.log("山札から引きます");
    console.log(deck.cards);

    let list_api = "https://www.deckofcardsapi.com/api/deck/" + deck_id + "/pile/hand/list/";
    response = await fetch(list_api);
    let list = await response.json();
    console.log("パイルのリストを引きます");
    console.log(list.piles.hand.cards);

}

async function set(){
    let card_id = "";
    for(let i = 0;i < 4;i++){ 
        card_id = document.getElementById("oppo_card_"+i);
        card_id.src = "https://www.deckofcardsapi.com/static/img/back.png";
    }
    for(let i = 0;i < 4;i++){ 
        card_id = document.getElementById("player_card_"+i);
        card_id.src = "https://www.deckofcardsapi.com/static/img/back.png";
    }
    card_id = document.getElementById("oppo_deck");
    card_id.src = "https://www.deckofcardsapi.com/static/img/back.png";
    card_id = document.getElementById("player_deck");
    card_id.src = "https://www.deckofcardsapi.com/static/img/back.png";

    card_id = document.getElementById("oppo_capture");
    card_id.src = "https://www.deckofcardsapi.com/static/img/back.png";
    card_id = document.getElementById("player_capture");
    card_id.src = "https://www.deckofcardsapi.com/static/img/back.png";

}