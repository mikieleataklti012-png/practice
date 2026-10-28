
export async function getApi(city){
    try{
        let content=document.querySelector('.content');
        let div= document.createElement('div');
        div.classList.add('display')
        let p=document.createElement('p');
        let p1=document.createElement('p');
        let p2=document.createElement('p');
        let p3=document.createElement('p');
        let p4=document.createElement('p');
        let url= await fetch(`https://api.weatherapi.com/v1/current.json?key=4b7627c3d5d94ccabe473711262710&q=${city}`);
        let response=await url.json();
        let weather=response.current.condition.text;
        let imgSrc=response.current.condition.icon;
        let fixedImgSrc = imgSrc.startsWith('//') ? `https:${imgSrc}` : imgSrc;
        let rain=response.current.chance_of_rain;
        let snow=response.current.chance_of_snow;
        let cloud=response.current.cloud;
        let tempC=response.current.temp_c;
        let tempF=response.current.temp_f;
        let button=document.createElement('button');
        let img=document.createElement('img');
        img.src=fixedImgSrc;
        p.textContent=`The weather for ${city} is: ${weather}`;
        p1.textContent=`The Chance of Rain in ${city} is: ${rain}`;
        p2.textContent=`The Chance of Snow in ${city} is: ${snow}`;
        p3.textContent=`Cloud: ${cloud}`;
        p4.textContent=`Temprature in Celsius in ${city} is ${tempC}`;
        button.textContent="Change T to Fahrenheit";
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(p4);
        div.appendChild(button);
        content.appendChild(div);

        button.addEventListener('click',()=>{
            let text=button.textContent;
            if(text==="Change T to Fahrenheit"){
                p4.textContent=`Temprature in Frenheit in ${city} is ${tempF}`
                button.textContent="Change T to Celsius"
            }
            else if (text==="Change T to Celsius"){
                p4.textContent=`Temprature in Celsius in ${city} is ${tempC}`;
                button.textContent="Change T to Fahrenheit";
            }
        })

    }catch(error){
        console.log("Somthing went wrong",error);
    }
}