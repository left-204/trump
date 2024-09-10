let oppo_capture = [];
async function captured() {
    let oppo_card_0 = document.getElementById("oppo_card_0_box");
    let oppo_card_1 = document.getElementById("oppo_card_1_box");
    let oppo_card_2 = document.getElementById("oppo_card_2_box");
    let oppo_card_3 = document.getElementById("oppo_card_3_box");
    
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
    //console.log(player_checkbox);
    
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

    checked_reset();
  }