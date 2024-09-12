$('#player_card_0_box').change(function(){
    if ($(this).prop('checked')) {
        $('#player_card_0').css({
            backgroundColor : '#ff0000',
        })
    } else {
        $('#player_card_0').css({
            backgroundColor : '#00000000',
        })
    }
});
$('#player_card_1_box').change(function(){
    if ($(this).prop('checked')) {
        $('#player_card_1').css({
            backgroundColor : '#ff0000',
        })
    } else {
        $('#player_card_1').css({
            backgroundColor : '#00000000',
        })
    }
});
$('#player_card_2_box').change(function(){
    if ($(this).prop('checked')) {
        $('#player_card_2').css({
            backgroundColor : '#ff0000',
        })
    } else {
        $('#player_card_2').css({
            backgroundColor : '#00000000',
        })
    }
});
$('#player_card_3_box').change(function(){
    if ($(this).prop('checked')) {
        $('#player_card_3').css({
            backgroundColor : '#ff0000',
        })  
    } else {
        $('#player_card_3').css({
            backgroundColor : '#00000000',
        })
    }
});
$('#oppo_card_0_box').change(function(){
    if ($(this).prop('checked')) {
        for(let i = 0;i < 4;i++){
            if(i == 0){
                $('#oppo_card_' + i).css({
                    backgroundColor : '#ff0000',
                })
            }else {
                $('#oppo_card_' + i).css({
                    backgroundColor : '#00000000',
                })
            }
        }
    } else {
        $('#oppo_card_0').css({
            backgroundColor : '#00000000',
        })
    }
});
$('#oppo_card_1_box').change(function(){
    if ($(this).prop('checked')) {
        for(let i = 0;i < 4;i++){
            if(i == 1){
                $('#oppo_card_' + i).css({
                    backgroundColor : '#ff0000',
                })
            }else {
                $('#oppo_card_' + i).css({
                    backgroundColor : '#00000000',
                })
            }
        }
    } else {
        $('#oppo_card_1').css({
            backgroundColor : '#00000000',
        })
    }
});
$('#oppo_card_2_box').change(function(){
    if ($(this).prop('checked')) {
        for(let i = 0;i < 4;i++){
            if(i == 2){
                $('#oppo_card_' + i).css({
                    backgroundColor : '#ff0000',
                })
            }else {
                $('#oppo_card_' + i).css({
                    backgroundColor : '#00000000',
                })
            }
        }
    } else {
        $('#oppo_card_2').css({
            backgroundColor : '#00000000',
        })
    }
});
$('#oppo_card_3_box').change(function(){
    if ($(this).prop('checked')) {
        for(let i = 0;i < 4;i++){
            if(i == 3){
                $('#oppo_card_' + i).css({
                    backgroundColor : '#ff0000',
                })
            }else {
                $('#oppo_card_' + i).css({
                    backgroundColor : '#00000000',
                })
            }
        }
    } else {
        $('#oppo_card_3').css({
            backgroundColor : '#00000000',
        })
    }
});