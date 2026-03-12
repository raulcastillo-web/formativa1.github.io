function checkAnswer(){

let answer = document.getElementById("answer").value;
let response = document.getElementById("response");

response.innerHTML = "> ATTEMPTING TO HACK GEOM-OS...";

setTimeout(function(){

let correct = "(3,-3) (5,-3) (4,-6)";

if(answer === correct){

response.innerHTML =
"> ACCESS GRANTED <br> PASSWORD WORD: GEOMETRY";

}
else{

response.innerHTML =
"> ACCESS DENIED <br> RETRY COMMAND";

}

},3000);

}
function goBack(){
window.location.href = "index.html";
}
