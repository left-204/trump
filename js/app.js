//シャッフルして山札生成
const apiUrl = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
let deck_id ="";
let apiUrl2 = "";
document.getElementById("get").addEventListener("click", async () => {
    let display = document.getElementById("display");
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
    
});


