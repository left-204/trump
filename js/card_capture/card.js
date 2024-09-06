let oppo_card ="";
let player_card ="";
async function oppo_draw(){
    apiUrl_draw = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/draw/?count=1";
    response = await fetch(apiUrl_draw);
    //jsの型に変換
    oppo_card = await response.json();
    // console.log("山札から引きます");
}
// async function player_draw(){
//     apiUrl_draw = "https://www.deckofcardsapi.com/api/deck/" + deck_id + "/pile/hand/draw/?count=1";
//     response = await fetch(apiUrl_draw);
//     //jsの型に変換
//     oppo_card = await response.json();
//     console.log("手札を引きます");
// }