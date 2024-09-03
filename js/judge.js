let disp = document.getElementById("trump_table");
function button_set(){
    let display = document.getElementById("display");
    let high = document.createElement("button");
    let low = document.createElement("button");

    high.id = "High";
    low.id = "Low";

    high.innerHTML = "High";
    high.setAttribute('onclick', 'high()');
    low.innerHTML = "Low";
    low.setAttribute('onclick', 'low()');
    
    display.appendChild(high);
    display.appendChild(low);
    //console.log(trump2)
}

function high(){
    console.log("high");
    let subject = numchange(trump2.cards[0].value);
    let hand = numchange(trump2.cards[1].value)
    console.log(subject + "<" + hand);
    let modelurl = document.getElementById("next_card");
    modelurl.src = trump2.cards[1].image;
    disp.appendChild(modelurl);

    if(subject < hand){
        console.log("勝ち");
        win()
    }else if (subject > hand){
        console.log("負け")
        lose();
    }else {
        console.log("ドロー");
    }
}

function low(){
    console.log("low");
    let subject = numchange(trump2.cards[0].value);
    let hand = numchange(trump2.cards[1].value)
    console.log(subject + ">" + hand);
    let modelurl = document.getElementById("next_card");
    modelurl.src = trump2.cards[1].image;
    disp.appendChild(modelurl);
    
    if(subject > hand){
        console.log("勝ち");
        win()
    }else if (subject < hand){
        console.log("負け")
        lose();
    }else {
        console.log("ドロー");
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
    return value;
}

let result = document.getElementById("result");

function win(){
    let win_p = document.createElement("p");
    win_p.textContent = "勝ち!!";
    result.appendChild(win_p);
    let subject_img = document.getElementById("subject");
    subject_img.src = trump2.cards[1].image;
    trump2.cards[0] = trump2.cards[1];
    disp.appendChild(subject_img);
    next();
}

function lose(){
    let lose_p = document.createElement("p");
    lose_p.textContent = "負け!!";
    result.appendChild(lose_p);
}

function draw(){
    let draw_p = document.createElement("p");
    draw_p.textContent = "負け!!";
    result.appendChild(draw_p);
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