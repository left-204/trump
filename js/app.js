//シャッフルして山札生成
const apiUrl = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
let deck_id ="";
let apiUrl2 = "";
let trump2 ="";
document.getElementById("get").addEventListener("click", async () => {
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
    let get = document.getElementById("get");
    display.removeChild(get)
    let response = await fetch(apiUrl);
    //jsの型に変換
    let trump = await response.json();
    console.log(trump.deck_id);

    //deck_idを取得して一枚引く
    deck_id = trump.deck_id;
    apiUrl2 = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/draw/?count=2";
    console.log(apiUrl2)
    let response2 = await fetch(apiUrl2);
        //カードを2枚引いたやつをjs型に変更
    trump2 = await response2.json();
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

    button_set();

});

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

    //残り枚数
    let rest = "";
    rest = "https://deckofcardsapi.com/api/deck/" + deck_id;
    let resthand = await fetch(rest);
    let resthands = await resthand.json();
    console.log(resthands.remaining);
    console.log(resthands);

    let num = document.createElement("p");
    num.innerText = resthands.remaining;
    disp.appendChild(num);
}


