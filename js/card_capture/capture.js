let oppo_hands = [4];
let checked_oppo = "";
async function capture(){
    let checked_player = [];
    let checked_player_value = 0;
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
    console.log(oppo_hands)
    console.log(player_hands)
    //
    for(let i = 0;i < 4;i++){
        if(player_hands[i] == true){
            checked_player.push(player_card[i]);
        }   
        if(oppo_hands[i] == true){
            checked_oppo = oppo_card[i]; 
        }
    }
    console.log(checked_player)
    console.log(checked_oppo)
    if(checked_oppo.suit == checked_player[0].suit){        
        for(let i = 0;i < checked_player.length;i++){
            if(checked_oppo.suit == checked_player[i].suit){
                checked_player_value += checked_player[i].value;
                console.log(checked_player_value);
            }else{
                console.log("違うスートが選択されています");
                checked_player[i] = false;
                player_checkbox.checked = false;
            }
        }
        console.log(checked_player)
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
    }
    right_just(oppo_card,1);
    await fill_in();
    oppo_set();
    player_hand_fill();
    console.log(player_capture)
    checked_reset();
}