import {orderimg} from './menuimg.js';
import { view } from './viewimg.js';

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
            content.innerHTML = "<h2>View Page</h2>";
            view();
        })

        reserve.addEventListener('click',()=>{
            content.innerHTML = "<h2>Reserve Page</h2>";
        })

    }
}