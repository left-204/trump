async function sacrifice(){
    let sacrifice_player = 0;
    let sacrifice_oppo = 0;
    let illust_check = 0;
    for(let i = 0;i < 4;i++){
        if(player_checkbox[i].checked){
            sacrifice_player += 1;
        }
        if(oppo_checkbox[i].checked){
            sacrifice_oppo += 1;
        }
    }
    if(sacrifice_player == 2 && sacrifice_oppo == 1){
    for(let i = 0;i < 4;i++){
        if(player_checkbox[i].checked){
            if(player_card[i].value <= 10){
            console.log(player_card[i]);
            oppo_capture.push(player_card[i]);
            player_card[i] = null;
            card_img[i].src ="https://www.deckofcardsapi.com/static/img/back.png";
            card_id = document.getElementById("oppo_capture");
            card_id.src = "https://www.deckofcardsapi.com/static/img/back.png";
            }else {
                console.log("絵柄カードは選べないよ");
                illust_check = 1;
            }
        }else{
            console.log("チェックされてないよ");
        }
    }
    // await player_hand_fill(); 
    if(illust_check == 0){
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
    }
    }else {
        console.log("手札を2枚選んで臭いもしくは敵カードを一枚臭い");
    }
    
    checked_reset();
}