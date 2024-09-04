let disp = document.getElementById("trump_table");
let score = 0;
function button_set(){
    let display = document.getElementById("display");
    let high = document.createElement("button");
    let low = document.createElement("button");
    score = 0;
    high.id = "High";
    low.id = "Low";

    high.innerHTML = "High";
    high.setAttribute('onclick', 'high()');
    low.innerHTML = "Low";
    low.setAttribute('onclick', 'low()');
    
    //ボタンを作る
    let reset = document.createElement("button");
    //ボタンに名前
    reset.innerHTML = "やめる";
    //ボタンの動作
    reset.setAttribute('onclick', 'reset()');
    //idの付与
    reset.id = 'reset'
    display.appendChild(reset);

    display.appendChild(high);
    display.appendChild(low);
    //console.log(trump2)
}

function high(){
    console.log("high");
    let subject = numchange(enemy_hand.cards[pointer].value);
    let hand = numchange(player_hand.cards[pointer].value)
    console.log(subject + "<" + hand);
    let modelurl = document.getElementById("next_card");
    modelurl.src = player_hand.cards[pointer].image;
    disp.appendChild(modelurl);

    if(subject < hand){
        console.log("勝ち");
        win()
    }else if (subject > hand){
        console.log("負け")
        lose();
    }else {
        console.log("ドロー");
        draw()
    }
}

function low(){
    console.log("low");
    let subject = numchange(enemy_hand.cards[pointer].value);
    let hand = numchange(player_hand.cards[pointer].value)
    console.log(subject + ">" + hand);
    let modelurl = document.getElementById("next_card");
    modelurl.src = player_hand.cards[pointer].image;
    disp.appendChild(modelurl);
    
    if(subject > hand){
        console.log("勝ち");
        win()
    }else if (subject < hand){
        console.log("負け")
        lose();
    }else {
        console.log("ドロー");
        draw()
    }
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
    console.log(value)
    return value;
}

let result = document.getElementById("result");

function win(){
    let result_id = document.getElementById("result");
    let score_id = document.getElementById("score");
    result_id.textContent = "勝ち!!";
    score += 1;
    score_id.textContent = score;
    let next_img = document.getElementById("next_card");
    next_img.src = player_hand.cards[pointer].image;
    disp.appendChild(next_img);
    next();
}

function lose(){
    let result_id = document.getElementById("result");
    result_id.textContent = "負け!!";
}

function draw(){
    let result_id = document.getElementById("result");
    result_id.textContent = "ドロー";
    next();
}

function sleep(wait_time){
    wait_time = Number(wait_time);
    console.log(wait_time);
    let spanSec = 0;
    let id = setInterval(function(){
        spanSec++;
        if(spanSec >= wait_time){
            clearInterval(id);
        }
    },1000);
}

