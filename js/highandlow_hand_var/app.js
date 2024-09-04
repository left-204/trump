//シャッフルして山札生成
const apiUrl = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
//山札共有用
let deck_id ="";
//ドローの処理を簡単にするための共有変数
let apiUrl_draw = "";
//親と手札を管理
let trump2 ="";
let enemy_hand = "";
let player_hand ="";
let pointer = 0;


async function start(){
    let display = document.getElementById("display");
    let start = document.getElementById("start");
    display.removeChild(start)
    let response = await fetch(apiUrl);
    //jsの型に変換
    let deck = await response.json();
    console.log(deck.deck_id);

    //相手の手札を引く
    deck_id = deck.deck_id;
    apiUrl_draw = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/draw/?count=10";
    console.log(apiUrl_draw)
    let response_draw = await fetch(apiUrl_draw);
    //カードを2枚引いたやつをjs型に変更
    enemy_hand = await response_draw.json();
    console.log(enemy_hand.cards);
    //自分の手札生成
    response_draw = await fetch(apiUrl_draw);
    //カードを2枚引いたやつをjs型に変更
    player_hand = await response_draw.json();
    console.log(player_hand.cards);


    //imgタグを生成
    let card_img = document.createElement("img");
    card_img.id = "subject";
    let modelurl = document.createElement("img");
    modelurl.id ="next_card";
    //imgタグにセット
    card_img.src = enemy_hand.cards[0].image;
    modelurl.src="https://www.deckofcardsapi.com/static/img/back.png";
    let disp = document.getElementById("trump_table");
    //表示
    disp.appendChild(card_img);
    disp.appendChild(modelurl);

    rest_display()

    button_set()
}

async function next(){
    pointer += 1;
    if(pointer <= 9){
    let subject = document.getElementById("subject");
    subject.src = enemy_hand.cards[pointer].image;
    next_card.src = "https://www.deckofcardsapi.com/static/img/back.png";

    //画面遷移後の場合↓ 
    //let disp = document.getElementById("trump_table");
    
    rest_display();
    disp.appendChild(subject);
    disp.appendChild(next_card);
    }else {
        result.textContent="終わり";
    }
}

async function rest_display(){
    let rest_id = document.getElementById("rest");
    let rest = "";
    rest = "https://deckofcardsapi.com/api/deck/" + deck_id;
    let resthand = await fetch(rest);
    let resthands = await resthand.json();
    console.log(resthands.remaining);
    console.log(resthands);
    // let num = document.createElement("p");
    rest_id.textContent = resthands.remaining;
    //残り枚数
    
   
    // rest_id.appendChild(rest);

}

