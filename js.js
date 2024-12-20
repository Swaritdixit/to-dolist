let input=document.querySelector("#type");
let button=document.querySelector("#button");
let list=document.querySelector(".list");
let c=0;
button.addEventListener('click',()=>{ 
   const add=input.value.trim();
   if(add!=="")
   {
      const listitem=document.createElement("li");
      listitem.innerHTML=`${add}<button  style="margin-left:20px;" >Delete</button>`;
      const deleteBtn=listitem.querySelector('button');
      deleteBtn.addEventListener("click",()=>{
      listitem.remove();

      });
        list.appendChild(listitem);
         input.value="";
         listitem.addEventListener("click",()=>{
                if(listitem.style.textDecoration==='none')
                  listitem.style.textDecoration='line-through';
               else
               listitem.style.textDecoration='none';
         });
   }
});