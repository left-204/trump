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
let select_card_button = [3];
let card_img = [4];
let illust_exist = 0;
let player_deck ="";
let start_hand_symbol =["2S","3S","4S","2D","3D","4D","2C","3C","4C","2H","3H","4H","X1","X2"];
let message_box = "";
//スタートボタンが押されたらスタート
async function start(){
    //スタートボタンを消す
    let start_button = document.getElementById("start");
    start_button.classList.add("start_button");
    start_button.style.display = "none";
    //ジョーカーが入ったデッキ生成
    response = await fetch(apiUrl);
    //jsの型に変換
    deck = await response.json();
    //デッキのidだけ取得
    deck_id = deck.deck_id;
    //山札を分ける
    await divide();
    //敵山札のシャッフル
    await oppo_shuffle();
    //自分山札のシャッフル
    await player_shuffle();
    //カードの初期表示
    await set();
    
    illust_card_check();
    
    checked_reset();
    console.log(illust_exist);
    message_box = document.getElementById("message_box");
    text_message = document.getElementById("text_message");
    let Phase_button = document.getElementsByClassName("Phase_button");
    Phase_button[0].style.display = "block";
    if(illust_exist == 1){
        re_draw_message();
    }else {
        dis_button_disp();
    }

}

async function divide(){
    // //山を分けるために一回引く
    apiUrl_draw = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/draw/?count=54";
    response = await fetch(apiUrl_draw);
    //jsの型に変換
    deck = await response.json();
    //手札用の山札に分ける2~4+joker
    player_deck_api = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/pile/player_deck/add/?cards=2S,3S,4S,2D,3D,4D,2C,3C,4C,2H,3H,4H,X1,X2";
    response = await fetch(player_deck_api);
    //jsの型に変換
    player_deck = await response.json();
/******************************************************************/
    //要検証
    //player_card = player_deck.piles.player_deck;
/******************************************************************/
    let card_code ="";
    //2~4+jokerじゃない場合card_codeに入れる
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
    //apiに送信する
    let deck_api = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/pile/oppo_deck/add/?cards=" + card_code;
    response = await fetch(deck_api);
    //jsの型に変換
    deck = await response.json();

}

async function oppo_shuffle(){
    //シャッフルする
    shuffle_api = "https://www.deckofcardsapi.com/api/deck/" + deck_id + "/pile/oppo_deck/shuffle/";
    response = await fetch(shuffle_api);
    //jsの型に変換
    deck = await response.json();
}

async function player_shuffle() {
    player_deck_api = "https://www.deckofcardsapi.com/api/deck/" + deck_id + "/pile/player_deck/shuffle/"
    response = await fetch(player_deck_api);
    //jsの型に変換
    deck = await response.json();
}

let card_id = "";
async function set(){
    //絵札があるかあった場合1
    illust_exist = 0;
    //敵手札を埋める
    for(let i = 0;i < 4;i++){
        //一枚引く
        await oppo_draw();
        //相手手札のimgタグidを取得
        card_id = document.getElementById("oppo_card_"+i);
        //タグに対して手札のカードの画像を差し込み
        card_id.src = oppo_draw_card.cards[0].image;
        //相手手札保持用の配列に入れる
        oppo_card[i] = oppo_draw_card.cards[0];
        //絵柄カードだった場合数字になって帰ってくる
        oppo_card[i].value = numchange(oppo_card[i].value);
    }
    console.log("敵手札")
    console.log(oppo_card);
    //自分のカードを埋める
    for(let i = 0;i < 4;i++){
        //一枚引く
        await player_draw();
        //自分手札のimgタグidを取得 
        card_id = document.getElementById("player_card_"+i);
        //タグに対して手札カードの画像を差し込み
        card_id.src = player_draw_card.cards[0].image;
        //自分手札保持用の配列に入れる
        player_card[i] = player_draw_card.cards[0];
        //絵柄カードだった場合数字になって帰ってくる
        player_card[i].value = numchange(player_card[i].value);
    }
    console.log("自分手札")
    console.log(player_card);

    for(let i = 0;i < 4;i++){
        card_img[i] = document.getElementById("player_card_"+i);
        player_checkbox[i] = document.getElementById("player_card_"+ i +"_box");
        oppo_checkbox[i] = document.getElementById("oppo_card_"+ i +"_box");
    }
    for(let i = 0;i < 3;i++){
        select_card_button[i] = document.getElementById("select_button_" + i);
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
    console.log(oppo_card)
}
function re_draw_message(){
    //console.log(message_box)
    let text_message = document.createElement("p");
    text_message.innerHTML = "初期相手手札に絵柄カードが含まれるため山札へ送り再度ドローします";
    let next_button = document.createElement("button");
    next_button.setAttribute('onclick', 're_draw()');
    next_button.innerHTML ="次へ";
    message_box.appendChild(text_message);
    message_box.appendChild(next_button);
    message_box.style.visibility = "visible";
}

function message_box_reset(){
    message_box.innerHTML = "";
    message_box.style.visibility = "hidden";
}
