//捨てたい札を選択
let player_hands = [4];
//捕獲山
let player_capture = [];
async function discard() {
    for(let i = 0;i < 4;i++){
        if(player_checkbox[i].checked){
            player_hands[i] = true;
            // console.log(player_card[i]);
            // console.log("チェックされた！！");
        }else{
            player_hands[i] = false;
            // console.log("チェックされてない！！");
        }
    }
    // console.log(player_hands);

    //捨て山にtrueのカードを移動
    for(let i = 0; i < 4; i++){
        if(player_hands[i] == true){
            player_capture.push(player_card[i]);
            if(player_capture[0] != null){
                card_id = document.getElementById("player_capture");
                card_id.src = "https://www.deckofcardsapi.com/static/img/back.png";
                // console.log("捨札山の表示");
            }
            player_card[i] = null;
            console.log(player_card);
        }
    }
    // console.log(player_capture);

    //次のカードを引く
    player_hand_fill();
    checked_reset();
  }