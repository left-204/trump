let oppo_draw_card ="";
let player_draw_card ="";
let oppo_deck_history = [];
async function oppo_draw(){
    apiUrl_draw = "https://www.deckofcardsapi.com/api/deck/" + deck_id + "/pile/oppo_deck/draw/?count=1";
    response = await fetch(apiUrl_draw);
    //jsの型に変換
    oppo_draw_card = await response.json();
    let list_api = "https://www.deckofcardsapi.com/api/deck/" + deck_id + "/pile/oppo_deck/list/"
    response = await fetch(list_api);
    //jsの型に変換
    list = await response.json();
    if(oppo_draw_card.success == false){
        await oppo_deck_reset();
        apiUrl_draw = "https://www.deckofcardsapi.com/api/deck/" + deck_id + "/pile/oppo_deck/draw/?count=1";
        response = await fetch(apiUrl_draw);
        console.log(response);
        //jsの型に変換
        oppo_draw_card = await response.json();
        console.log(oppo_draw_card);
        if(oppo_draw_card.success == false){
            oppo_draw_card.cards[0] = "";
        }else{
            oppo_deck_history.splice(0); 
            let list_api = "https://www.deckofcardsapi.com/api/deck/" + deck_id + "/pile/oppo_deck/list/"
            response = await fetch(list_api);
            //jsの型に変換
            list = await response.json();
            console.log(list);
            oppo_draw_card.cards[0].value = numchange(oppo_draw_card.cards[0].value);
        }
    }else{
        oppo_draw_card.cards[0].value = numchange(oppo_draw_card.cards[0].value);
    }
    // console.log("山札から引きます");

    //console.log(oppo_draw_card.cards[0].value);
}
async function player_draw(){
    apiUrl_draw = "https://www.deckofcardsapi.com/api/deck/" + deck_id + "/pile/player_deck/draw/?count=1";
    response = await fetch(apiUrl_draw);
    // console.log(response);
    //jsの型に変換
    player_draw_card = await response.json();
    // console.log(player_draw_card);
    if(player_draw_card.success == false){
        await player_capture_reset();
        await player_shuffle();
        player_capture.splice(0); 
        apiUrl_draw = "https://www.deckofcardsapi.com/api/deck/" + deck_id + "/pile/player_deck/draw/?count=1";
    response = await fetch(apiUrl_draw);
    // console.log(response);
    //jsの型に変換
    player_draw_card = await response.json();
    }
    player_draw_card.cards[0].value = numchange(player_draw_card.cards[0].value)
    // console.log("手札を引きます");
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
            // console.log(oppo_card[i].code);
            oppo_deck_history.push(oppo_card[i]);
            // console.log(oppo_draw_card);
            oppo_card[i] = null;
            null_count += 1;
        }
    }
    // console.log(oppo_card);
    right_just(oppo_card,null_count);
    await fill_in();
    oppo_set();
    message_box_reset();
    dis_button_disp();
}
function dis_button_disp(){
    let dis_button = document.getElementsByClassName("button_discard");
    dis_button[0].style.visibility = "visible";
    let draw_button = document.getElementsByClassName("button_draw");
    draw_button[0].style.visibility = "visible";
    //捕獲される
    let button_captured = document.getElementsByClassName("button_captured");
    button_captured[0].style.visibility = "hidden";
    //捕獲する
    let button_capture = document.getElementsByClassName("button_capture");
    button_capture[0].style.visibility = "hidden";
    //生贄
    let button_sacrifice = document.getElementsByClassName("button_sacrifice");
    button_sacrifice[0].style.visibility = "hidden";
    let text_message = document.createElement("p");
    text_message.innerHTML = "捨てるフェーズ";
    message_box.appendChild(text_message);
    let explain_message = document.createElement("p");
    explain_message.innerHTML = "捨てるカードを選択してください捨てない場合は捨てないを押してください";
    message_box.appendChild(explain_message);
    message_box.style.visibility = "visible";
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

async function player_hand_fill(){
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

function checked_reset(){
    for(let i = 0 ; i<4; i ++){
        oppo_checkbox[i].checked = false;
        player_checkbox[i].checked = false;
        $('#player_card_' + i).css({
            backgroundColor : '#00000000',
        })
        $('#oppo_card_' + i).css({
            backgroundColor : '#00000000',
        })
    }
}

async function player_capture_reset(){
    let card_code ="";
    console.log(player_capture)
    for(let i = 0;i < player_capture.length;i++){           
        if(i != 0){
            card_code = card_code + "," + player_capture[i].code;
        }else {
            card_code = player_capture[i].code;
        }
        console.log(card_code)
    }
    let deck_api = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/pile/player_deck/add/?cards=" + card_code;
    response = await fetch(deck_api);
    console.log(response)
    //jsの型に変換
    deck = await response.json();
    console.log(deck)
}

async function oppo_deck_reset(){
    let card_code = "";
    console.log(oppo_deck_history);
    for(let i = 0;i < oppo_deck_history.length;i++){  
        if(i != 0){
            card_code = card_code + "," + oppo_deck_history[i].code;
        }else {
            card_code = oppo_deck_history[i].code;
        }
    }   
    console.log(card_code)
    let deck_api = "https://www.deckofcardsapi.com/api/deck/"+ deck_id +"/pile/oppo_deck/add/?cards=" + card_code;
    response = await fetch(deck_api);
    //jsの型に変換
    deck = await response.json();
    console.log(deck)
}   

async function draw(){
    await player_hand_fill();
    message_box_reset();
    capture_phase_button()
}

function capture_phase_button(){
    //捕獲される
    let button_captured = document.getElementsByClassName("button_captured");
    button_captured[0].style.visibility = "visible";
    //捕獲する
    let button_capture = document.getElementsByClassName("button_capture");
    button_capture[0].style.visibility = "visible";
    //生贄
    let button_sacrifice = document.getElementsByClassName("button_sacrifice");
    button_sacrifice[0].style.visibility = "visible";
    let dis_button = document.getElementsByClassName("button_discard");
    dis_button[0].style.visibility = "hidden";
    let draw_button = document.getElementsByClassName("button_draw");
    draw_button[0].style.visibility = "hidden";
    let text_message = document.createElement("p");
    text_message.innerHTML = "行動フェーズ";
    message_box.appendChild(text_message);
    let explain_message = document.createElement("p");
    explain_message.innerHTML = "捕獲を行います、できない場合は捕獲されるか、生贄にしてください";
    message_box.appendChild(explain_message);
    message_box.style.visibility = "visible";
}

function jamm_check(){
    let player_card_illust = 0;
    let oppo_card_illust = 0;
    for(let i = 0;i < 4;i++){
        if(player_card[i].value >= 11){
            player_card_illust += 1;
        }
        if(oppo_card[i].value >= 11){
            oppo_card_illust += 1;
        }
    }
    if(player_card_illust == 4 && oppo_card_illust == 4){
        let surrender_button = document.getElementsByClassName("surrender_button");
        surrender_button[0].style.display = "block";
    }
    
}
let surrender_onoff = 0
function surrender_disp(){
    if(surrender_onoff == 0){
        let surrender_div = document.getElementsByClassName("surrender_div");
        surrender_div[0].style.display = "block";
        surrender_onoff = 1;
    }else{
        let surrender_div = document.getElementsByClassName("surrender_div");
        surrender_div[0].style.display = "none";
        surrender_onoff = 0;
    }
}

function yes(){
    window.location.reload();
    // let all_div = document.getElementsByClassName("All_card");
    // all_div[0].style.display = "none";
    // let start_div = document.getElementsByClassName("start");
    // start_div[0].style.display = "block";
    // let title = document.getElementsByClassName("title");
    // title[0].style.display = "block";
}
function no(){
    let clear_div = document.getElementsByClassName("clear_div");
    clear_div[0].style.display = "block";
}
