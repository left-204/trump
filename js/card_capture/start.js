//ジョーカー入りのデッキurl
let apiUrl = "https://www.deckofcardsapi.com/api/deck/new/?jokers_enabled=true";
let shuffle_api = "";
let player_deck_api = "";
let apiUrl_draw = "";
let return_api ="";

let deck_id = "";
let response = "";
let deck = "";

let oppo_card = [4];
let oppo_checkbox = [4];
let player_card =[4];
let player_checkbox = [4];
let illust_exist = 0;
let player_deck ="";
let start_hand_symbol =["2S","3S","4S","2D","3D","4D","2C","3C","4C","2H","3H","4H","X1","X2"];


async function start(){
    //デッキ生成
    response = await fetch(apiUrl);
    //jsの型に変換
    deck = await response.json();
    
    deck_id = deck.deck_id;

    //山札を分ける
    await divide();
    //山札をシャッフルする
    await shuffle();
    
    await set();
    
    illust_card_check();
    console.log(illust_exist);
    checked_reset();
}

async function divide(){
    // //山を分けるために一回引く
    apiUrl_draw = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/draw/?count=54";
    response = await fetch(apiUrl_draw);
    //jsの型に変換
    deck = await response.json();
 
    //手札用の山札に分ける
    player_deck_api = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/pile/player_deck/add/?cards=2S,3S,4S,2D,3D,4D,2C,3C,4C,2H,3H,4H,X1,X2";
    response = await fetch(player_deck_api);
    //jsの型に変換
    player_deck = await response.json();
    player_card = player_deck.piles.player_deck;
    let card_code ="";
    for(let i = 0;i < 54;i++){
        if(start_hand_symbol.includes(deck.cards[i].code)){
            
        }else {
            if(i != 0){
                card_code = card_code + "," + deck.cards[i].code;
            }else {
                card_code = deck.cards[i].code;
            }
        }
    }
    let deck_api = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/pile/oppo_deck/add/?cards=" + card_code;
    response = await fetch(deck_api);
    //jsの型に変換
    deck = await response.json();

}


async function shuffle(){
    //シャッフルする
    shuffle_api = "https://www.deckofcardsapi.com/api/deck/" + deck_id + "/pile/oppo_deck/shuffle/";
    response = await fetch(shuffle_api);
    //jsの型に変換
    deck = await response.json();

    player_deck_api = "https://www.deckofcardsapi.com/api/deck/" + deck_id + "/pile/player_deck/shuffle/"
    response = await fetch(player_deck_api);
    //jsの型に変換
    deck = await response.json();
}

let card_id = "";
async function set(){
    illust_exist = 0;
    for(let i = 0;i < 4;i++){
        await oppo_draw();
        card_id = document.getElementById("oppo_card_"+i);
        card_id.src = oppo_draw_card.cards[0].image;
        oppo_card[i] = oppo_draw_card.cards[0];
        oppo_card[i].value = numchange(oppo_card[i].value);
    }
    console.log("敵手札")
    console.log(oppo_card);

    for(let i = 0;i < 4;i++){
        await player_draw();  
        card_id = document.getElementById("player_card_"+i);
        card_id.src = player_draw_card.cards[0].image;
        player_card[i] = player_draw_card.cards[0];
        player_card[i].value = numchange(player_card[i].value);
    }
    
    for(let i = 0;i < 4;i++){
        player_checkbox[i] = document.getElementById("player_card_"+ i +"_box");
        oppo_checkbox[i] = document.getElementById("oppo_card_"+ i +"_box");
    }
    
    card_id = document.getElementById("oppo_deck");
    card_id.src = "https://www.deckofcardsapi.com/static/img/back.png";
    
    card_id = document.getElementById("player_deck");
    card_id.src = "https://www.deckofcardsapi.com/static/img/back.png";
}

async function oppo_set() {
    for(let i = 0;i < 4;i++){
        await oppo_draw();
        card_id = document.getElementById("oppo_card_"+i);
        card_id.src = oppo_card[i].image;
    }
}
