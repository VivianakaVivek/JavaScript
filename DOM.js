let a = document.querySelector('h1');
console.dir(a);

    a.innerHTML = "<b>Its bold HEllo worlds</b>";
a.style.color = "red";
a.style.backgroundColor = "yellow";
a.style.fontSize = "50px";

a.innerText = "It change inner text of h1 tag";


// New Task 

let div = document.createElement('div');
div.innerText = " lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.";
div.setAttribute("title", "This is div");
document.querySelector("body").append(div);


// highlight the alternative list element

let list = document.querySelectorAll("li");
for(let i = 0 ; i < list.length; i++){
    if(i % 2 == 0){
        list[i].style.backgroundColor = "lightblue";
    }
}       


let li = document.querySelectorAll("li:nth-child(2n)");
li.forEach(val => {
    val.style.backgroundColor = "Pink"
});