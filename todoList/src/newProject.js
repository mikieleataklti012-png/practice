function addProject(proName, proDescription, proDueDate,proPriority,proNotes,proStatus){
    if(!new.target){
        console.error("not a proper constructor calling");
    }
    this.proName = proName;
    this.proDescription = proDescription;
    this.proDueDate = proDueDate;
    this.proPriority = proPriority;
    this.proNotes = proNotes;
    this.proStatus = proStatus;
    this.ProDateStatus="";
}

export function newProject(){
    let display= document.querySelector(".display");
    display.innerHTML="";
    display.innerHTML="<h1>New Project</h1>";

    let form= document.createElement("form");
    form.id="newProjectForm";

    let nameLabel= document.createElement("label");
    nameLabel.textContent="Project Name: ";
    let nameInput= document.createElement("input");
    nameInput.type="text";
    nameInput.id="proName";
    nameInput.required=true;

    let descriptionLabel= document.createElement("label");
    descriptionLabel.textContent="Project Description: ";
    let descriptionInput= document.createElement("input");
    descriptionInput.type="text";
    descriptionInput.id="proDescription";

    let dueDateLabel= document.createElement("label");
    dueDateLabel.textContent="Project Due Date: ";
    let dueDateInput= document.createElement("input");
    dueDateInput.type="date";
    dueDateInput.id="proDueDate";
    
    let priorityLabel= document.createElement("label");
    priorityLabel.textContent="Project Priority: ";
    let prioritySelect= document.createElement("select");
    prioritySelect.id="proPriority";
    let option1= document.createElement("option");
    option1.value="Low";
    option1.textContent="Low";
    let option2= document.createElement("option");
    option2.value="Medium";
    option2.textContent="Medium";
    let option3= document.createElement("option");
    option3.value="High";
    option3.textContent="High";

    prioritySelect.appendChild(option1);
    prioritySelect.appendChild(option2);
    prioritySelect.appendChild(option3);

    let notesLabel= document.createElement("label");
    notesLabel.textContent="Project Notes: ";
    let notesInput= document.createElement("textarea");
    notesInput.id="proNotes";

    let submitBtn= document.createElement("button");
    submitBtn.type="submit";
    submitBtn.style.width="150px"
    submitBtn.style.height="40px"
    submitBtn.style.fontSize="15px"
    submitBtn.textContent="Add Project";

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);
    form.appendChild(priorityLabel);
    form.appendChild(prioritySelect);
    form.appendChild(notesLabel);
    form.appendChild(notesInput);
    form.appendChild(submitBtn);

    display.appendChild(form);

    form.style.display="flex";
    form.style.flexDirection="column";
    form.style.alignItems="center";
    form.style.justifyContent="space-around";
    form.style.height="400px";

    let labels= form.querySelectorAll("label");
    labels.forEach(label=>{
        label.style.fontSize="20px";
        label.style.fontWeight="bold";
    });

    let inputs= form.querySelectorAll("input, select, textarea");
    inputs.forEach(input=>{
        input.style.width="300px";
        input.style.height="30px";
        input.style.fontSize="16px";
        input.style.borderRadius="5px";
        input.style.border="1px solid gray";
        input.style.padding="5px";
    });

    form.addEventListener("submit", function(event){
        event.preventDefault();
        let proName= nameInput.value;
        let proDescription= descriptionInput.value;
        let proDueDate= dueDateInput.value;
        let proPriority= prioritySelect.value;
        let proNotes= notesInput.value;
        let proStatus= false; 

        let newPro= new addProject(proName, proDescription, proDueDate,proPriority,proNotes,proStatus);
        let todoProjects=JSON.parse(localStorage.getItem("todoProjects")) || [];
        todoProjects.push(newPro);
        localStorage.setItem("todoProjects", JSON.stringify(todoProjects));
        alert("Project added successfully!");
        form.reset();
    });
}
