const sub = document.querySelector("#sub-heading");
sub.style.color = "brown";
const list = document.querySelectorAll("li");
for(let i = 0; i < list.length; i++){
    if(i % 2 != 0){
        list[i].style.backgroundColor = "white";
        list[i].style.borderRadius = "5px";
        list[i].style.marginBottom = "5px";
        list[i].style.fontSize = "20px"
    }else{
        list[i].style.backgroundColor = "red";
        list[i].style.borderRadius = "5px";
        list[i].style.color = "white";
        list[i].style.marginBottom = "5px";
        list[i].style.fontSize = "20px"
    }
}