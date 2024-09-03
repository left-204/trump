//デッキを再構成
function reset(){
    const trump_tableDiv = document.getElementById("trump_table");
    trump_tableDiv.innerHTML = "";
    let display = document.getElementById("display");
    //ボタンを作る
    let start = document.createElement("button");
    //ボタンに名前
    start.innerHTML = "スタート";
    //ボタンの動作
    start.setAttribute('onclick', 'start()');
    //idの付与
    start.id = 'start'
    display.appendChild(start);
    let High = document.getElementById("High");
    display.removeChild(High)
    let Low = document.getElementById("Low");
    display.removeChild(Low)
    let reset = document.getElementById("reset");
    display.removeChild(reset)
};
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
    let card_img2 = document.createElement("img");
    let modelurl = document.createElement("img");
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

    //成功した場合
    apiUrls = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/draw/?count=1";
    console.log(apiUrls)
    let responses = await fetch(apiUrls);
        //カードを1枚引いたやつをjs型に変更
    let trumps = await responses.json();
    let new_card = document.createElement("img");
    new_card.src = "https://www.deckofcardsapi.com/static/img/back.png";

    //画面遷移後の場合↓ 
    //let disp = document.getElementById("trump_table");
    
    disp.appendChild(new_card);
}