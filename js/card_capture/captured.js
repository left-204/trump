let oppo_capture = [];
async function captured() {
    let captured_card = 0;
    let captured_illust = 0;
    if(oppo_checkbox[0].checked){
        for(let i = 0;i < 4;i++){
            if(player_checkbox[i].checked){
                captured_card += 1;
            }
        }
        console.log(captured_card)
        if(captured_card == 1){
        for(let i = 0;i < 4;i++){
            if(player_checkbox[i].checked){
                if(player_card[i].value <= 10 && oppo_card[0].value <= 10){
                    console.log(player_card[i]);
                    oppo_capture.push(player_card[i]);
                    player_card[i] = null;
                    card_img[i].src ="https://www.deckofcardsapi.com/static/img/back.png";
                    console.log("敵側");
                    console.log(oppo_card[0].code);
                    oppo_capture.push(oppo_card[0]);
                    oppo_card[0] = null;
                    card_id = document.getElementById("oppo_capture");
                    card_id.src = "https://www.deckofcardsapi.com/static/img/back.png";
                    console.log(captured_illust)
                    right_just(oppo_card,1)
                    console.log(oppo_card)
                    await fill_in()
                    oppo_set()
                    checked_reset();
                    message_box_reset();
                    dis_button_disp();
                }else {
                    console.log("絵柄は選べないです");
                    message_box_reset();
                    let text_message = document.createElement("p");
                    text_message.innerHTML = "絵柄カードは選択できない!";
                    message_box.appendChild(text_message);
                    message_box.style.visibility = "visible";
                    captured_illust += 1;
                }
            }
        }
        }else{
            console.log("チェックされてないよ");
            message_box_reset();
            let text_message = document.createElement("p");
            text_message.innerHTML = "カードを一枚選択してください!";
            message_box.appendChild(text_message);
            message_box.style.visibility = "visible";
        }
    }
  }