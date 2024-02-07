let add = document.getElementById("add")

let input1 = document.getElementById("input1");
let textarea = document.getElementById("text");
add.addEventListener("click", function(){
    if(input1.value == ""){
        alert("please enter first")
    }
    else{
        let create = document.createElement("p");
        let text = document.createTextNode(input1.value);
        create.appendChild(text);
        textarea.appendChild(create);
    }
    input1.value = "";
});
let input2 = document.getElementById("input2");

let replacetext = document.getElementById("replace");

replacetext.addEventListener("click", function(){
    textarea.innerHTML = textarea.innerHTML.replaceAll(input1.value , input2.value);
});

let lightedtext = document.getElementById("highlight");

lightedtext.addEventListener("click" , function(){

    if(input1.value !==""){
        let regex = new RegExp(input1.value , "gi")
        textarea.innerHTML = textarea.textContent.replace(regex, "<mark>$&</mark>");
    };
});
