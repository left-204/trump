let oppo_capture = [];
async function captured() {
    let oppo_card_0 = document.getElementById("oppo_card_0_box");
    let oppo_card_1 = document.getElementById("oppo_card_1_box");
    let oppo_card_2 = document.getElementById("oppo_card_2_box");
    let oppo_card_3 = document.getElementById("oppo_card_3_box");
    let captured_card = 0;
    let captured_illust = 0;
    for(let i = 0;i < 4;i++){
        if(player_checkbox[i].checked){
            captured_card += 1;
        }
    }
    if(captured_card == 1){
    for(let i = 0;i < 4;i++){
        if(player_checkbox[i].checked){
            if(player_card <= 10){
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
    if(captured_illust == 0){
    console.log("敵側");
    if(oppo_card_0.checked){
        console.log(oppo_card[0].code);
        oppo_capture.push(oppo_card[0]);
        oppo_card[0] = null;
        card_id = document.getElementById("oppo_capture");
        card_id.src = "https://www.deckofcardsapi.com/static/img/back.png";
    }else{
        console.log("一番右のカードを選択してね");
    }
    if(oppo_card_1.checked){
        console.log("一番右のカードを選択してね");
    }else{
        console.log("");
    }
    if(oppo_card_2.checked){
        console.log("一番右のカードを選択してね");
    }else{
        console.log("");
    }
    if(oppo_card_3.checked){
        console.log("一番右のカードを選択してね");
    }else{
        console.log("");
    }

    console.log("捨て場");
    console.log(oppo_capture);
    console.log(oppo_card)
    right_just(oppo_card,1)
    console.log(oppo_card)
    await fill_in()
    oppo_set()
    }
    }else {
        console.log("捕獲されるカードは一枚以下にしてください");
    }
    checked_reset();
  }