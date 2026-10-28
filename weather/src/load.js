import { getApi } from "./api.js";

export function load(){

    let content=document.querySelector('.content');
    let h1=document.createElement('h1');
    let p=document.createElement('p');
    let form=document.createElement('form');
    let label=document.createElement('label')
    label.textContent="Enter Your City";
    label.setAttribute("for","city")
    let input=document.createElement('input');
    input.type="text"
    input.id="city";
    input.placeholder='eg. London,Tokyo'
    let submit=document.createElement('button');
    submit.textContent="search";
    submit.type="submit"

    h1.textContent="Welcome to my Weather app";
    p.textContent=""


    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(submit);
    content.appendChild(h1);
    content.appendChild(p);
    content.appendChild(form);

    form.addEventListener('submit',function(event){
        event.preventDefault();
        let div=document.querySelector('.display');
        if(div){
            div.innerHTML="";
            div.remove();
        }
        let city=input.value;
        if(city.trim()!==""){
            getApi(city);
        }
        city="";
    })
}