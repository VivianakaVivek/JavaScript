
let button = document.querySelector("button");
button.addEventListener("click" , function() {
button.style.backgroundColor = "red"
button.style.fontWeight = "bold"

});
 

 let option = document.querySelector("select");
 option.addEventListener("change" ,  function(dt){
    console.dir(dt.target.value);
let head = document.querySelector("h4");
head.innerText = "You Selected a Car : " + dt.target.value ;
 })
