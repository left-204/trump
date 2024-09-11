let oppo_hands = [4];
let checked_oppo = "";
let joker_exist = 0;
let checked_player = [];
let checked_player_value = 0;
let select_card_id = [];
let joker_hands = [];
let select_card = [];
async function capture(){
    checked_player = [];
    checked_player_value = 0;
    suit_check = 0;
    joker_exist = 0;
    //選択された場所をtrueにする
    for(let i = 0;i < 4;i++){
        if(player_checkbox[i].checked){
            player_hands[i] = true;
            // console.log(player_card[i]);
        }else{
            player_hands[i] = false;
        }
        if(oppo_checkbox[i].checked){
            oppo_hands[i] = true;
            // console.log(player_card[i]);
        }else{
            oppo_hands[i] = false;
        }
    }
    //ジョーカーの数を数える
    for(let i = 0;i < 4;i++){
        if(player_hands[i] == true){
            checked_player.push(player_card[i]);
            if(player_card[i].suit == "BLACK" || player_card[i].suit == "RED"){
                joker_exist += 1;
            }
        }
        //選択された敵カードを変数に格納
        if(oppo_hands[i] == true){
            checked_oppo = oppo_card[i]; 
        }
    }
    console.log(checked_player)
    console.log(checked_oppo)
    //プレイヤー選択カードにジョーカーがあったら下へ
    if(joker_exist == 0){
        capture_execute(0);
    }else {
        joker_execute();
    }
}
let suit_check = 0;
//捕獲処理joker_valueはジョーカー処理で指定された数値を持ってくる
async function capture_execute(joker_value){
    checked_player_value += joker_value;
    console.log(checked_player[0].suit);
    console.log(joker_exist);
    console.log(checked_player_value);
    //スート確認違うのがあったら1がついて捕獲に入れない
    for(let i = 0;i < checked_player.length;i++){
        if(checked_oppo.suit != checked_player[i].suit){
            suit_check = 1;
        }
        if(joker_value >= 1){
            suit_check = 0;
        }
    }
    if(suit_check == 0){
        for(let i = 0;i < checked_player.length;i++){
            console.log(checked_player[i].suit);
            if(checked_player[i].suit != "BLACK" && checked_player[i].suit != "RED"){
                checked_player_value += checked_player[i].value;
            }
        }
        console.log(checked_player_value);

        if(checked_player_value >= checked_oppo.value){
            console.log("捕獲します")
            for(let i = 0;i < 4;i++){
                if(oppo_hands[i] == true){
                    player_capture.push(oppo_card[i]);
                    oppo_card[i] = null;
                }
                if(player_hands[i] == true){
                    player_capture.push(player_card[i]);
                    player_card[i] = null;
                }
            }
        }
        console.log(player_capture);
        right_just(oppo_card,1);
        await fill_in();
        oppo_set();
        player_hand_fill();
        checked_reset();
    }else{
        console.log("スートが違うよ")
    }
}

function joker_execute(){
    select_card.splice(0);
    for(let i = 0;i < 3;i++){
        select_card_id[i] = document.getElementById("select_card_" + i);
        // console.log(select_card_id[i])
    }
    for(let i = 0;i < 4;i++){
        if(player_hands[i] == true){
            if(player_card[i].suit == "BLACK" || player_card[i].suit == "RED"){
                joker_hands[i] = true;
            }else{
                joker_hands[i] = false;
            }
        }
    }
    console.log(player_hands);
    console.log(joker_hands);
    for(let i = 0;i < 4;i++){
        if(joker_hands[i] == false){
            select_card.push(player_card[i]);
        }
    }
    console.log(select_card);
    for(let i = 0;i < select_card.length;i++){
        select_card_id[i].src = select_card[i].image;
    }


}

function select_card_set(select){
    console.log(select_card[select].value);
    let joker_value = 0;
    joker_value = Number(select_card[select].value)
    if(joker_exist >= 2){
        joker_value += joker_value;
    }

    capture_execute(joker_value);
}