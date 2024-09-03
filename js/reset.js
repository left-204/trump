//デッキを再構成
document.getElementById("reset").addEventListener("click", function ()  {
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
});
async function start(){
    let display = document.getElementById("display");
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
    let trump2 = await response2.json();
    console.log(trump2.cards[0]);
    //imgタグを生成
    let card_img = document.createElement("img");
    //imgタグにセット
    card_img.src = trump2.cards[0].image;
    let disp = document.getElementById("trump_table");
    //表示
    disp.appendChild(card_img);
    backpngurl ="https://www.deckofcardsapi.com/static/img/back.png"
}