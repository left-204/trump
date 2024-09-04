//デッキを再構成
function reset(){
    const trump_tableDiv = document.getElementById("trump_table");
    trump_tableDiv.innerHTML = "";
    let display = document.getElementById("display");
    //ボタンを作る
    let start = document.createElement("button");
    //ボタンに名前
    start.innerHTML = "スタート";
    //ボタンの動作
    start.setAttribute('onclick', 'start()');
    //idの付与
    start.id = 'start'
    display.appendChild(start);
    let High = document.getElementById("High");
    display.removeChild(High)
    let Low = document.getElementById("Low");
    display.removeChild(Low)
    let reset = document.getElementById("reset");
    display.removeChild(reset)
    let rest = document.getElementById("rest");
    rest.innerHTML ="";
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
};