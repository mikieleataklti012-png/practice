import {home} from './home.js';
import {menubtn} from './menubtn.js';

export function  menu(){
    let content=document.getElementById('content');
    content.innerHTML="";
    home();
    
    let subMenu=document.getElementById('subMenu');
    let btn=document.getElementById('menu-btn');

    btn.addEventListener('click',()=>{
        if(subMenu){
            subMenu.remove();
        }

        else if(!subMenu){
            menubtn();
        }
    })

}