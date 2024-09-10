async function sacrifice(){
    for(let i = 0;i < 4;i++){
        if(player_checkbox[i].checked){
            console.log(player_card[i]);
            oppo_capture.push(player_card[i]);
            player_card[i] = null;
        }else{
            console.log("チェックされてないよ");
        }
    }
    await player_hand_fill(); 
    
    for(let i = 0;i < 4;i++){
        if(oppo_checkbox[i].checked){
            console.log(oppo_card[i]);
            oppo_deck_history.push(oppo_card[i]);
            oppo_card[i] = null;
            right_just(oppo_card,1)
            await fill_in()
            oppo_set()
        }else{
            console.log("チェックされてないよ");
        }
    }
    console.log(oppo_card)
    for(let i = 0 ; i<4; i ++){
        oppo_checkbox[i].checked = false;
    }
    for(let i = 0 ; i<4; i ++){
        player_checkbox[i].checked = false;
    }
}