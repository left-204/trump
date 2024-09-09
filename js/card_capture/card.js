let oppo_draw_card ="";
let player_draw_card ="";
let oppo_deck_history = [];
async function oppo_draw(){
    apiUrl_draw = "https://www.deckofcardsapi.com/api/deck/" + deck_id + "/pile/oppo_deck/draw/?count=1";
    response = await fetch(apiUrl_draw);
    //jsの型に変換
    oppo_draw_card = await response.json();
    // console.log("山札から引きます");
}
async function player_draw(){
    apiUrl_draw = "https://www.deckofcardsapi.com/api/deck/" + deck_id + "/pile/player_deck/draw/?count=1";
    response = await fetch(apiUrl_draw);
    //jsの型に変換
    player_draw_card = await response.json();
    console.log("手札を引きます");
}

function illust_card_check() {
    for(let i = 0;i < 4;i++){
        if(oppo_card[i].value >= 11){
            illust_exist = 1;
        }
    }
}

let re_draw_api = "";
let re_draw_code = "";
async function re_draw(){
    let null_count = 0;
    //絵柄を消す処理
    for(let i = 0;i < 4;i++){
        if(oppo_card[i].value >= 11){
            console.log(oppo_card[i].code);
            // let re_draw_code = oppo_card[i].code;
            //山札に絵柄カードを返す
            // re_draw_api ="https://www.deckofcardsapi.com/api/deck/" + deck_id + "/pile/oppo_deck/add/?cards=" + re_draw_code;
            // response = await fetch(re_draw_api);
            // //jsの型に変換
            // oppo_draw_card = await response.json();
            oppo_deck_history.push(oppo_card[i]);
            console.log(oppo_draw_card);
            oppo_card[i] = null;
            null_count += 1;
        }
    }

    console.log(oppo_card);
    console.log(null_count);
    right_just(oppo_card,null_count);
    await fill_in();
    oppo_set();
}

function numchange(value){
    // console.log(value);
        switch(value){
            case "KING":
                value = 13;
                break;
            case "QUEEN":
                value = 12;
                break;
            case "JACK":
                value = 11;
                break;
            case "ACE":
                value = 14;
                break;
            default:
                break;
        }
        value = Number(value);
        return value;
}

function right_just(oppo_card,null_count){
    let number_card = 4 - null_count;
    let number_count = 0;
    let fill = 0;
    let count = 0;
    do{
        count = 0;
        number_count = 0;
        for(let i = 1;i < 4;i++){
            if(oppo_card[i-1] == null||oppo_card[i-1] == undefined){
                oppo_card[i-1] = oppo_card[i];
                oppo_card[i] = null;
            }
        }
        for(let i = 0;i < number_card - 1;i++){
            if(oppo_card[i] != null){
                number_count += 1;
            }
        }
        if(number_count == number_card){
            fill = 1;
        }
        console.log(oppo_card);
    }while(fill == 0)
    console.log("右詰め");
    console.log(oppo_card);
    
}

async function fill_in(){
    for(let i = 0;i < 4;i++){
        if(oppo_card[i] == null||oppo_card[i] == undefined){
            await oppo_draw();
            oppo_card[i] = oppo_draw_card.cards[0];
        }
    }
    console.log(oppo_card);
}

function check() {
    let player_card_0 = document.getElementById("player_card_0_box");
    let player_card_1 = document.getElementById("player_card_1_box");
    let player_card_2 = document.getElementById("player_card_2_box");
    let player_card_3 = document.getElementById("player_card_3_box");
    if(player_card_0.checked){
        console.log(player_card[0]);
    }else{
        console.log("bbbb");
    }
    console.log(player_card_1)
    console.log(player_card_2)
    console.log(player_card_3)
  }