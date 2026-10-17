import { menubtn } from "./menubtn.js";

export function reserving(){

    let subMenu=document.getElementById('subMenu');
    if(subMenu){
        subMenu.remove();
    }

    let btn= document.getElementById('menu-btn');
    btn.addEventListener('click',()=>{
        menubtn();
    });

    let content=document.getElementById('content');
    content.innerHTML="";
    content.innerHTML = "<h2>Reserve Page</h2>";
    let p=document.createElement('p');
    p.textContent="we are out of serivce for this moment, please come back later";
    p.style.fontSize="25px"
    content.appendChild(p);
}
