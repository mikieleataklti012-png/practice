import { dueDate } from "./dueDate.js";

export function projects() {

    dueDate();

    let display= document.querySelector(".display");
    display.innerHTML="";
    display.innerHTML="<h1>Projects</h1>";

    let button1= document.createElement('button')
    button1.style.backgroundColor="lightGreen"
    let button2= document.createElement('button')
    button2.style.backgroundColor='rgb(245, 175, 69)'
    let button3= document.createElement('button')
    button3.style.backgroundColor="rgb(211, 71, 71)"
    let divBtn1= document.createElement('div')
    divBtn1.style.display="flex";
    divBtn1.style.flexDirection='column'
    let divBtn2= document.createElement('div')
    divBtn2.style.display="flex";
    divBtn2.style.flexDirection='column'
    let divBtn3= document.createElement('div')
    divBtn3.style.display="flex";
    divBtn3.style.flexDirection='column'
    let divBtns= document.createElement('div')
    divBtns.style.display="flex";
    divBtns.style.width="500px"
    divBtns.style.height="50px"
    divBtns.style.justifyContent="space-around"
    let p1=document.createElement('p')
    p1.textContent="High-Priority"
    let p2=document.createElement('p')
    p2.textContent='Medium-Priority'
    let p3=document.createElement('p')
    p3.textContent='Low-Priority'

    divBtn1.appendChild(button1);
    divBtn1.appendChild(p3);
    divBtn2.appendChild(button2);
    divBtn2.appendChild(p2);
    divBtn3.appendChild(button3);
    divBtn3.appendChild(p1);
    divBtns.appendChild(divBtn1);
    divBtns.appendChild(divBtn2);
    divBtns.appendChild(divBtn3)
    display.appendChild(divBtns);

    let div= document.createElement("div");
    div.id="projectsDiv";

    let proName, proDescription, proDueDate,proPriority,proNotes,proStatus,ProDateStatus;

    let todoProjects=JSON.parse(localStorage.getItem("todoProjects")) || [];

    for(let i=0;i<todoProjects.length;i++){
        proName=todoProjects[i].proName;
        proDescription=todoProjects[i].proDescription;
        proDueDate=todoProjects[i].proDueDate;
        proPriority=todoProjects[i].proPriority;
        proNotes=todoProjects[i].proNotes;
        proStatus=todoProjects[i].proStatus;
        ProDateStatus=todoProjects[i].ProDateStatus;

        let proj= document.createElement("div");
        proj.classList.add("project");
        proj.innerHTML=`<h2>${proName}</h2>
                            <p> Description: ${proDescription}</p>
                            <p>Due Date: ${proDueDate}</p>
                            <p>Due Date Status:${ProDateStatus}</p>
                            <p>
                                Priority: 
                                <select class="priority-select" data-index="${i}">
                                    <option value="Low" ${proPriority === 'Low' ? 'selected' : ''}>Low</option>
                                    <option value="Medium" ${proPriority === 'Medium' ? 'selected' : ''}>Medium</option>
                                    <option value="High" ${proPriority === 'High' ? 'selected' : ''}>High</option>
                                </select>
                            </p>
                            <p>Notes: ${proNotes}</p>
                            <p>
                                Status (Completed): 
                                <input type="checkbox" class="status-checkbox" data-index="${i}" ${proStatus ? 'checked' : ''}>
                            </p>
                            <div>
                                <img class="img" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" alt="delete icon" data-index="${i}">
                            </div>`;

        proj.style.border="1px solid black";
        proj.style.margin="10px";
        proj.style.padding="10px";
        proj.style.borderRadius="10px";
        proj.style.backgroundColor="white";
        proj.style.cursor="pointer";
        proj.style.width="500px";

        if(proPriority==="Low"){
            proj.style.backgroundColor="lightGreen"
        }
        else if(proPriority==="Medium"){
            proj.style.backgroundColor="rgb(245, 175, 69)"
        }
        else if(proPriority==="High"){
            proj.style.backgroundColor="rgb(211, 71, 71)"
        }
        
        let ps=proj.querySelectorAll("p");
        ps.forEach(p=>{
            p.style.fontSize="16px";
        }) 

        let img=proj.querySelector('.img')
        img.style.width="20px"
        img.style.height="20px"
        img.style.textAlign="center"

        div.appendChild(proj);
    }

    let img=div.querySelector('.img')

    div.style.display="flex";
    div.style.flexWrap="wrap";
    div.style.justifyContent="space-around";
    
    display.style.maxHeight = "100vh";
    display.style.overflowY = "auto";

    display.appendChild(div);

   div.addEventListener('click', (e) => {
        if (e.target.classList.contains('img')) {
            let index = e.target.getAttribute('data-index');
            let todoProjects = JSON.parse(localStorage.getItem("todoProjects")) || [];
            
            todoProjects.splice(index, 1);
            localStorage.setItem("todoProjects", JSON.stringify(todoProjects));
            
            // Re-render the projects list so it instantly updates on screen
            projects();
        }
    });

    div.addEventListener("change", (e) => {
        let todoProjects = JSON.parse(localStorage.getItem("todoProjects")) || [];
        let index = e.target.getAttribute("data-index");

            if (e.target.classList.contains("priority-select")) {
                todoProjects[index].proPriority = e.target.value;
                localStorage.setItem("todoProjects", JSON.stringify(todoProjects));
            }

            if (e.target.classList.contains("status-checkbox")) {
                todoProjects[index].proStatus = e.target.checked;
                localStorage.setItem("todoProjects", JSON.stringify(todoProjects));
            }
            projects();
    });
}