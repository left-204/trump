let oppo_hands = [4];
function capture(){
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
    console.log(oppo_hands);
    console.log(player_hands);
    
}