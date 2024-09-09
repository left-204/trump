
function check() {
    for(let i = 0;i < 4;i++){
        player_checkbox.push(document.getElementById("player_card_"+ i +"_box"));
    }
    for(let i = 0;i < 4;i++){
        if(player_checkbox[i].checked){
            console.log(player_card[i]);
        }else{
            console.log("bbbb");
        }
    }
  }
function capture() {
    let player_card_0 = document.getElementById("player_card_0_box");
    let player_card_1 = document.getElementById("player_card_1_box");
    let player_card_2 = document.getElementById("player_card_2_box");
    let player_card_3 = document.getElementById("player_card_3_box");
    let oppo_card_0 = document.getElementById("oppo_card_0_box");
    let oppo_card_1 = document.getElementById("oppo_card_1_box");
    let oppo_card_2 = document.getElementById("oppo_card_2_box");
    let oppo_card_3 = document.getElementById("oppo_card_3_box");
    if(player_card_0.checked){
        console.log(player_card[0].code);
    }else{
        console.log("チェックされてないよ");
    }
    if(player_card_1.checked){
        console.log(player_card[1].code);
    }else{
        console.log("チェックされてないよ");
    }
    if(player_card_2.checked){
        console.log(player_card[2].code);
    }else{
        console.log("チェックされてないよ");
    }
    if(player_card_3.checked){
        console.log(player_card[3].code);
    }else{
        console.log("チェックされてないよ");
    }
    
    console.log("敵側");
    if(oppo_card_0.checked){
        console.log(oppo_card[0].code);
    }else{
        console.log("チェックされてないよ");
    }
    if(oppo_card_1.checked){
        console.log(oppo_card[1].code);
    }else{
        console.log("チェックされてないよ");
    }
    if(oppo_card_2.checked){
        console.log(oppo_card[2].code);
    }else{
        console.log("チェックされてないよ");
    }
    if(oppo_card_3.checked){
        console.log(oppo_card[3].code);
    }else{
        console.log("チェックされてないよ");
    }
  }