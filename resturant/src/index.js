import {load} from './load.js';
import{menubtn} from './menubtn.js'

index();

export function index(){
   
    load();

    let nav= document.getElementById('nav')
    nav.style.display="grid"
    nav.style.gridTemplateColumns= "repeat(1,1fr)";
    nav.style.gap="10px";
    nav.style.width="100px"
    nav.style.marginRight="20px"
    nav.style.backgroundColor="lightGray"

    let buttons=document.querySelectorAll('#nav button');
    buttons.forEach(button=>{
        button.style.backgroundColor="lightGray"
        button.style.width="100px"
    })

    let btn= document.getElementById('menu-btn');
        btn.addEventListener('click',()=>{
            menubtn();
        });
}
