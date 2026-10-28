import { index } from "./index.js";

export function home(){
    index();
    
    let subMenu=document.getElementById('subMenu');
    if(subMenu){
        subMenu.remove();
    }
}