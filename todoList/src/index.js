import {addBtn} from "./add.js"
import {projects} from "./projects.js"
import { todayDate } from "./today.js";
import { upcomingDate } from "./upcoming.js";

export function load() {

    let container= document.createElement("div");
    let left= document.createElement("div");
    let right= document.createElement("div");
    
    left.classList.add("contents");
    right.classList.add("display");

    let today= document.createElement("button");
    today.textContent="Today";
    today.id="today";
    let add= document.createElement("button");
    add.textContent="Add Project";
    add.id="add";
    let project= document.createElement("button");
    project.textContent="Projects";
    project.id="projects";
    let upcoming= document.createElement("button");
    upcoming.textContent="Upcoming";
    upcoming.id="upcoming";

    right.innerHTML="<h1>Welcome to your Todo List</h1>";

    left.appendChild(today);
    left.appendChild(project);
    left.appendChild(upcoming);
    left.appendChild(add);

    left.style.width="20%";
    left.style.display="flex";
    left.style.flexDirection="column";
    left.style.justifyContent="space-around";
    left.style.alignItems="center";
    left.style.backgroundColor="gray";

    let buttons=left.querySelectorAll("button");
    buttons.forEach(button=>{
        button.style.width="80%";
        button.style.height="50px";
        button.style.fontSize="20px";
        button.style.borderRadius="10px";
        button.style.border="none";
        button.style.cursor="pointer";
        button.addEventListener('mouseenter', () => {
            button.style.transform = "scale(1.03)";
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = "scale(1)";
        });
    });

    right.style.backgroundColor="lightgray";
    right.style.width="80%";
    right.style.display="flex";
    right.style.flexDirection="column";
    right.style.alignItems="center";

    container.style.display="flex";
    container.style.height="100vh";

    container.appendChild(left);
    container.appendChild(right);
    document.body.appendChild(container);

    add.addEventListener('click',()=>{
        addBtn();
    })
    project.addEventListener('click',()=>{
        projects();
    })
    today.addEventListener('click',()=>{
        todayDate();
    })
    upcoming.addEventListener('click',()=>{
        upcomingDate();
    })
    
}
