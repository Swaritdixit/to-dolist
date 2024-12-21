document.addEventListener('DOMContentLoaded',()=>{
let input=document.querySelector("#type");
let button=document.querySelector("#button");
let list=document.querySelector(".list");

const addTaskToDOM=(task,iscomplete=false)=>{
   const listitem=document.createElement("li");
   listitem.innerHTML=`${task}<button  style="margin-left:20px;" >Delete</button>`;
   if(iscomplete)
   {
      listitem.style.textDecoration = 'line-through';

   }
   const deleteBtn=listitem.querySelector('button');
   deleteBtn.addEventListener("click",()=>{
   listitem.remove();
   saveTasks();
   });
     list.appendChild(listitem);
      
      listitem.addEventListener("click",()=>{
             if(listitem.style.textDecoration==='none')
               listitem.style.textDecoration='line-through';
            else
            listitem.style.textDecoration='none';
         saveTasks();
      });
     
}
const loadTasks=()=>
{
   const tasks=JSON.parse(localStorage.getItem('tasks'))||[];
   tasks.forEach(task=>addTaskToDOM(task.text,task.iscomplete));

};
const saveTasks=()=>{
   const tasks = Array.from(list.children).map(li => ({
      text: li.firstChild.textContent.trim(),
      iscomplete:li.style.textDecoration==='line-through'
 } ));
   localStorage.setItem('tasks',JSON.stringify(tasks));
}
button.addEventListener('click',()=>{ 
   const add=input.value.trim();
   if(add!=="")
   {  addTaskToDOM(add); 
         saveTasks();
         input.value="";
   }
   
});
loadTasks();
});
