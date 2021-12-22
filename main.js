"use strict"
let button = document.getElementById("add");
let addCon = document.getElementById("todo");
let inputField = document.getElementById("input");


    button.addEventListener("click", function(){
        let task = document.createElement("p");
        task.innerText = inputField.value;
        addCon.appendChild(task);
        inputField.value = '';
        
        task.addEventListener("click", function(){
            task.style.textDecoration = "line-through";
        })
        
        task.addEventListener("dblclick", function(){
           addCon.removeChild(task);
        })
    })