import image from "./image.png";
import {home} from './home.js'

let about=document.getElementById('about-btn')
let Home=document.getElementById('home-btn')
let content=document.getElementById("content");
    Home.addEventListener('click',()=>{
        content.innerHTML="";
        home();
    })

about.addEventListener('click',()=>{

    let menu=document.getElementById('subMenu');
    if(menu){
        menu.remove();
    }
    content.innerHTML = "<h2>About Page</h2>";
    let p=document.createElement("p");
    p.textContent = "If you have any questions please contact the customer service at 1-800-555-5555 or email us at foods@gmail.com";
    p.style.fontSize="25px"
    content.appendChild(p);
})    

export function load() {

    let content=document.getElementById("content");

    let p=document.createElement("p");
    p.textContent = "We offer a variety of delicious dishes to satisfy your cravings. \n Explore our menu and enjoy a delightful dining experience!";
    p.style.fontSize="25px"
    content.appendChild(p);

    let img = document.createElement("img");
    img.src=image;
    img.alt="creator:Vostok";
    img.style.width="1400px";
    img.style.height="500px";
    content.appendChild(img);

    let p2=document.createElement("p");
    p2.textContent = "We also have a delivery service so order wherever you are.";
    p2.style.fontSize="25px"
    content.appendChild(p2);

    content.style.display="flex";
    content.style.flexDirection="column";

}
