let oppo_capture = [];
async function captured() {
    let captured_card = 0;
    let captured_illust = 0;

    if(oppo_checkbox[0].checked){
        console.log("敵側");
        if(oppo_card_0.checked){
            console.log(oppo_card[0].code);
            oppo_capture.push(oppo_card[0]);
            oppo_card[0] = null;
            card_id = document.getElementById("oppo_capture");
            card_id.src = "https://www.deckofcardsapi.com/static/img/back.png";
        }

    for(let i = 0;i < 4;i++){
        if(player_checkbox[i].checked){
            captured_card += 1;
        }
    }
    if(captured_card == 1){
        for(let i = 0;i < 4;i++){
            if(player_checkbox[i].checked){
                if(player_card[i].value <= 10){
                    console.log(player_card[i]);
                    oppo_capture.push(player_card[i]);
                    player_card[i] = null;
                    card_img[i].src ="https://www.deckofcardsapi.com/static/img/back.png";
                }else {
                    console.log("絵柄は選べないです");
                    captured_illust += 1;
                }
            }else{
                console.log("チェックされてないよ");
            }
        }   
        // await player_hand_fill();
        //console.log(player_checkbox);
        console.log("捨て場");
        console.log(oppo_capture);
        console.log(oppo_card)
        right_just(oppo_card,1)
        console.log(oppo_card)
        await fill_in()
        oppo_set()
        }
    }
    checked_reset();
  }