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
            oppo_deck_history.push(oppo_card[i]);
            console.log(oppo_draw_card);
            oppo_card[i] = null;
            null_count += 1;
        }
    }
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
    let fill = 0;
    let count = 0;
    do{
        count = 0;
        for(let i = 1;i < 4;i++){
            if(oppo_card[i-1] == null||oppo_card[i-1] == undefined){
                oppo_card[i-1] = oppo_card[i];
                oppo_card[i] = null;
            }
        }
        for(let i = 0;i < number_card;i++){
            if(oppo_card[i] != null){
                count += 1;
            }
        }
        if(number_card == count){
            fill = 1;
        }
    }while(fill == 0)
    
}

async function fill_in(){
    for(let i = 0;i < 4;i++){
        if(oppo_card[i] == null||oppo_card[i] == undefined){
            await oppo_draw();
            oppo_card[i] = oppo_draw_card.cards[0];
        }
    }
}
//捨てたい札を選択
let player_hands = [4];
let player_capture = [];
async function discard() {
    for(let i = 0;i < 4;i++){
        if(player_checkbox[i].checked){
            player_hands[i] = true;
            console.log(player_card[i]);
            console.log("チェックされた！！");
        }else{
            player_hands[i] = false;
            console.log("チェックされてない！！");
        }
    }
    console.log(player_hands);

    //捨て山にtrueのカードを移動
    for(let i = 0; i < 4; i++){
        if(player_hands[i] == true){
            player_capture.push(player_card[i]);
            if(player_capture[0] != null){
                card_id = document.getElementById("player_capture");
                card_id.src = "https://www.deckofcardsapi.com/static/img/back.png";
                console.log("捨札山の表示");
            }
            player_card[i] = null;
            console.log(player_card);
        }
    }
    console.log(player_capture);

    //次のカードを引く
    for(let i = 0; i < 4; i++){
        if(player_card[i] == null){
        await player_draw();  
        card_id = document.getElementById("player_card_"+i);
        card_id.src = player_draw_card.cards[0].image;
        player_card[i] = player_draw_card.cards[0];
        player_card[i].value = numchange(player_card[i].value);
        }
    }
  }
