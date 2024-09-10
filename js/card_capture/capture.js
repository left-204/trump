let oppo_hands = [4];
let checked_oppo = "";
let joker_exist = 0;
let checked_player = [];
let checked_player_value = 0;
async function capture(){
    checked_player = [];
    checked_player_value = 0;
    suit_check = 0;
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
    joker_exist = 0;
    //ジョーカーの数を数える
    for(let i = 0;i < 4;i++){
        if(player_hands[i] == true){
            //json型じゃなくなってる?
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
        capture_execute();
    }else {
        joker_execute();
    }
}
let suit_check = 0;
async function capture_execute(){
    console.log(checked_player[0].suit);
    for(let i = 0;i < checked_player.length;i++){
        if(checked_oppo.suit != checked_player[i].suit){
            suit_check = 1;
        }
    }
    if(suit_check == 0){
        for(let i = 0;i < checked_player.length;i++){
            checked_player_value += checked_player[i].value;
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
let select_card_id = [];
let joker_hands = [];
let select_card = [];
function joker_execute(){
    for(let i = 0;i < 3;i++){
        select_card_id[i] = document.getElementById("select_card_" + i);
        console.log(select_card_id[i])
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
    console.log(select_card.length);
    for(let i = 0;i < select_card.length;i++){
        select_card_id[i].src = select_card[i].image;
    }


}