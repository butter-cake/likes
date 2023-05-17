var element = document.querySelector(".number");

function likeButton(){
    // var element = document.getElementById("number");
    var num = element.innerText;
    ++num;
    // document.getElementById("number").innerText = num;
    element.innerText = num;
}