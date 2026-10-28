export function dueDate(){
    let todoProjects=JSON.parse(localStorage.getItem("todoProjects"))||[];
    let date=new Date().toISOString().split('T')[0];

    for(let i=0;i<todoProjects.length;i++){
        let proDate=todoProjects[i].proDueDate;
        let dueDateStatus="";

        if(proDate===""){
            dueDateStatus="Not-Specified"
        }
        else if(proDate<date){
            dueDateStatus="Over-Due";
        }
        else if(proDate===date){
            dueDateStatus="Due-Today"
        }
        else if(proDate>date){
            dueDateStatus="Upcoming"
        }
        
        todoProjects[i].ProDateStatus=dueDateStatus;
    }

    localStorage.setItem("todoProjects",JSON.stringify(todoProjects));
}