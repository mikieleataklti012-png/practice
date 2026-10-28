import {orderimg} from './menuimg.js';
import { reserving } from './reserve.js';
import { viewing } from './viewimg.js';

export function menubtn(){

    let content=document.getElementById('content');
    let subMenu=document.getElementById('subMenu');
    let btn=document.getElementById('menu-btn');

    if(!subMenu){
        
        let div=document.createElement('div');

        div.id="subMenu"
        div.style.height="60px";
        div.style.display="flex";
        div.style.flexDirection="column";
        
        let order=document.createElement('button');
        order.textContent="Order";
        div.appendChild(order);

        let view=document.createElement('button');
        view.textContent="View";
        div.appendChild(view);

        let reserve=document.createElement('button');
        reserve.textContent="Reserve"
        div.appendChild(reserve);

        btn.insertAdjacentElement('afterend',div);

        order.addEventListener('click',()=>{
            orderimg();
        })

        view.addEventListener('click',()=>{
            content.innerHTML = "";
            viewing();
        })

        reserve.addEventListener('click',()=>{
            content.innerHTML = "";
            reserving();
        })

    }
}