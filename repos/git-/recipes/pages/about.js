function setColor(){
    const root=document.documentElement;
    let theme=root.className;
    let newTheme=theme==="dark"?"light":"dark";
    root.className=newTheme;
    document.querySelector('.bg').textContent=newTheme;
}
let btn= document.querySelector('.toggle');
btn.addEventListener('click',setColor);