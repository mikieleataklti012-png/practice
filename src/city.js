
let url= await fetch(`https://api.weatherapi.com/v1/current.json?key=4b7627c3d5d94ccabe473711262710&q=london`);
let response=await url.json();
console.log(response);

let locatio=response.location;
let p= document.createElement('p')
p.textContent=JSON.stringify(locatio)
document.body.appendChild(p);