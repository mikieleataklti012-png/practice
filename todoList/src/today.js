import { dueDate } from "./dueDate.js";

export function todayDate(){

    dueDate();

    let dateStatus;
    let today=[];
    let todoProjects=JSON.parse(localStorage.getItem("todoProjects")) || [];
    let display= document.querySelector(".display");
    display.innerHTML="";
    display.innerHTML="<h1>Today's Projects</h1>";

    for(let i=0; i<todoProjects.length;i++){
        dateStatus=todoProjects[i].ProDateStatus;
        if(dateStatus==="Due-Today"){
            today.push({project:todoProjects[i],masterIndex:i});
        }
    }

    if(today.length===0){
        let div=document.createElement('div');
        let p=document.createElement('h3');
        p.textContent='No Projects Due-Today'
        div.appendChild(p)
        display.appendChild(div);
        return;
    }

    let div= document.createElement("div");
    div.id="projectsDiv";

    let proName, proDescription, proDueDate,proPriority,proNotes,proStatus,ProDateStatus;

    for(let i=0;i<today.length;i++){
        let todo=today[i].project;
        let masterIndex=today[i].masterIndex;

        proName=todo.proName;
        proDescription=todo.proDescription;
        proDueDate=todo.proDueDate;
        proPriority=todo.proPriority;
        proNotes=todo.proNotes;
        proStatus=todo.proStatus;
        ProDateStatus=todo.ProDateStatus;

        let proj= document.createElement("div");
        proj.classList.add("project");
        proj.innerHTML=`<h2>${proName}</h2>
                            <p> Description: ${proDescription}</p>
                            <p>Due Date: ${proDueDate}</p>
                            <p>Due Date Status:${ProDateStatus}</p>
                            <p>
                                Priority: 
                                <select class="priority-select" data-index="${masterIndex}">
                                    <option value="Low" ${proPriority === 'Low' ? 'selected' : ''}>Low</option>
                                    <option value="Medium" ${proPriority === 'Medium' ? 'selected' : ''}>Medium</option>
                                    <option value="High" ${proPriority === 'High' ? 'selected' : ''}>High</option>
                                </select>
                            </p>
                            <p>Notes: ${proNotes}</p>
                            <p>
                                Status (Completed): 
                                <input type="checkbox" class="status-checkbox" data-index="${masterIndex}" ${proStatus ? 'checked' : ''}>
                            </p>
                            <div>
                                <img class="img" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" alt="delete icon" data-index="${masterIndex}">
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
            let todoProjects= JSON.parse(localStorage.getItem("todoProjects")) || [];
            
            todoProjects.splice(index, 1);
            localStorage.setItem("todoProjects", JSON.stringify(todoProjects));
            
            // Re-render the projects list so it instantly updates on screen
            todayDate();
        }
    });

    div.addEventListener("change", (e) => {
        let todoProjects= JSON.parse(localStorage.getItem("todoProjects")) || [];
        let index = e.target.getAttribute("data-index");

            if (e.target.classList.contains("priority-select")) {
               todoProjects[index].proPriority = e.target.value;
                localStorage.setItem("todoProjects", JSON.stringify(todoProjects));
            }

            if (e.target.classList.contains("status-checkbox")) {
                todoProjects[index].proStatus = e.target.checked;
                localStorage.setItem("todoProjects", JSON.stringify(todoProjects));
            }
            todayDate();
    });


}