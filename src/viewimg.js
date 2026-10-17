import { menubtn } from "./menubtn.js";

export function view(){

    let subMenu=document.getElementById('subMenu');
    if(subMenu){
        subMenu.remove();
    }

    let btn= document.getElementById('menu-btn');
    btn.addEventListener('click',()=>{
        menubtn();
    });

    let div=document.createElement('div');
    let img1=document.createElement('img');
    img1.src="";
    img1.alt="";
    img1.style.width="";
    img1.style.height=""

    let img2=document.createElement('img');
    img2.src="";
    img2.alt="";
    img2.style.width="";
    img2.style.height=""

    let img3=document.createElement('img');
    img3.src="";
    img3.alt="";
    img3.style.width="";
    img3.style.height=""

    let img4=document.createElement('img');
    img4.src="";
    img4.alt="";
    img4.style.width="";
    img4.style.height=""

    div.appendChild(img1);
    div.appendChild(img2);
    div.appendChild(img3);
    div.appendChild(img4);

    document.body.appendChild(div);

}