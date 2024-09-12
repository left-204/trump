$('#player_card_0_box').change(function(){
    player_back_color_change(0)
});
$('#player_card_1_box').change(function(){
    player_back_color_change(1)
});
$('#player_card_2_box').change(function(){
    player_back_color_change(2)
});
$('#player_card_3_box').change(function(){
    player_back_color_change(3)
});
$('#oppo_card_0_box').change(function(){
    oppo_back_color_change(0)
});
$('#oppo_card_1_box').change(function(){
    oppo_back_color_change(1)
});
$('#oppo_card_2_box').change(function(){
    oppo_back_color_change(2)
});
$('#oppo_card_3_box').change(function(){
    oppo_back_color_change(3)
});

function player_back_color_change(click_card){
    if ($('#player_card_' + click_card + '_box').prop('checked')) {
        $('#player_card_' + click_card).css({
            backgroundColor : '#ff0000',
        })  
    } else {
        $('#player_card_' + click_card).css({
            backgroundColor : '#00000000',
        })
    }
}
function oppo_back_color_change(click_card){
    if ($('#oppo_card_' + click_card + '_box').prop('checked')) {
        for(let i = 0;i < 4;i++){
            if(i == click_card){
                $('#oppo_card_' + i).css({
                    backgroundColor : '#ff0000',
                })
            }else {
                $('#oppo_card_' + i).css({
                    backgroundColor : '#00000000',
                })
            }
        }
    }
}
let rule = 0;
function rule_disp(){
    let rule_space = document.getElementsByClassName("rule_space");
    let rule_button = document.getElementsByClassName("rule_button");
    if(rule == 0){
        rule_space[0].style.display = "block";
        rule_button[0].style.visibility = "hidden";
        rule = 1;
    }else{
        rule_space[0].style.display = "none";
        rule_button[0].style.visibility = "visible";
        rule = 0;
    }
}
function message_box_reset(){
    message_box.innerHTML = "";
    message_box.style.visibility = "hidden";
}