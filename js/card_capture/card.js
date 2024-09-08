let oppo_draw_card ="";
let player_draw_card ="";
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
    for(let i = 0;i < 4;i++){
        if(oppo_card[i].value >= 11){
            console.log(oppo_card[i].code);
            let re_draw_code = oppo_card[i].code;
            re_draw_api ="https://www.deckofcardsapi.com/api/deck/" + deck_id + "/pile/oppo_deck/add/?cards=" + re_draw_code;
            response = await fetch(re_draw_api);
            //jsの型に変換
            oppo_draw_card = await response.json();
            console.log(oppo_draw_card);
            oppo_card[i] = null;
            null_count += 1;
        }
    }
    console.log(oppo_card);
    console.log(null_count);
    let fill = 0;
    let count = 0;
    while(count != 2){
        for(let i = 1;i < 4;i++){
            if(oppo_card[i - 1] == null){
            oppo_card[i-1] = oppo_card[i];
            oppo_card[i] = null;
            }
            console.log(oppo_card);
        }
        count += 1;

        for(let i = 3;i >= null_count;i--){
            if(oppo_card[i] == null){
                console.log(oppo_card[i]);
            }
        }
        // }
        // if(null_count == count){
        //     fill = 1;
        // }
        // fill = 0;
    }
    console.log(oppo_card);


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