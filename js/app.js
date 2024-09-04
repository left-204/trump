//シャッフルして山札生成
const apiUrl = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
//山札共有用
let deck_id ="";
//ドローの処理を簡単にするための共有変数
let apiUrl_draw = "";
//親と手札を管理
let trump2 ="";

async function start(){
    let display = document.getElementById("display");
    //ボタンを作る
    let reset = document.createElement("button");
    //ボタンに名前
    reset.innerHTML = "やめる";
    //ボタンの動作
    reset.setAttribute('onclick', 'reset()');
    //idの付与
    reset.id = 'reset'
    display.appendChild(reset);
    let start = document.getElementById("start");
    display.removeChild(start)
    let response = await fetch(apiUrl);
    //jsの型に変換
    let deck = await response.json();
    console.log(deck.deck_id);

    //deck_idを取得して一枚引く
    deck_id = deck.deck_id;
    apiUrl_draw = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/draw/?count=2";
    console.log(apiUrl_draw)
    let response_draw = await fetch(apiUrl_draw);
    //カードを2枚引いたやつをjs型に変更
    trump2 = await response_draw.json();
    console.log(trump2.cards);
    //imgタグを生成
    let card_img = document.createElement("img");
    card_img.id = "subject";
    let card_img2 = document.createElement("img");
    let modelurl = document.createElement("img");
    modelurl.id ="next_card";
    //imgタグにセット
    card_img.src = trump2.cards[0].image;
    card_img2.src = trump2.cards[1].image;
    modelurl.src = trump2.cards[1].image;
    modelurl.src="https://www.deckofcardsapi.com/static/img/back.png";
    let disp = document.getElementById("trump_table");
    //表示
    disp.appendChild(card_img);
    disp.appendChild(modelurl);

    rest_display()

    button_set()
}

async function next(){
   //成功した場合
    apiUrls = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/draw/?count=1";
    console.log(apiUrls)
    let responses = await fetch(apiUrls);
        //カードを1枚引いたやつをjs型に変更
    let draw_card = await responses.json();
    trump2.cards[1] = draw_card.cards[0];
    console.log(trump2.cards)
    next_card.src = "https://www.deckofcardsapi.com/static/img/back.png";

    //画面遷移後の場合↓ 
    //let disp = document.getElementById("trump_table");
    
    disp.appendChild(next_card);
}

async function rest_display(){
    let rest_id = document.getElementById("rest");
    let rest = "";
    rest = "https://deckofcardsapi.com/api/deck/" + deck_id;
    let resthand = await fetch(rest);
    let resthands = await resthand.json();
    console.log(resthands.remaining);
    console.log(resthands);
    let num = document.createElement("p");
    num.innerText = resthands.remaining;
    num.id = "rest";
    rest_id = document.getElementById("rest");
    num.innerHTML = "";
    num.innerText = resthands.remaining;
    //残り枚数
    
   
    rest_id.appendChild(num);
}

