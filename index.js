// window.onscroll=function(){
//     myfunction()
//   };
//   var navbar=document.getElementById("navbar");
  
//   var sticky=navbar.offsetTop;
  
//   function myfunction(){
//     if(window.pageYOffset >= sticky){
//       navbar.classList.add("sticky");
//     }else{
//       navbar.classList.remove("sticky");
//     }
//   }

var menu=[{name:'chawal'},
         {name:'chole'},
         {name:'dal'},
         {name:'roti'},
         {name:'eggroll'},
         {name:'maggi'},
         {name:'coffee'},
         {name:'rajma'}];
var searchInput =document.getElementById("food-search");


const list=document.getElementById("list");

function setList(group){
  clearList();
  for(const menu of group){
    const item=document.createElement('li');
    const text=document.createTextNode(menu.name);
    item.appendChild(text);
    list.appendChild(item);
  }
  if(group.length===0){
    setNoResults();
  }
}

function clearList(){
  while(list.firstChild){
    list.removeChild(list.firstChild);
  }
}

function setNoResults(){
    const item=document.createElement('li');
    const text=document.createTextNode("No Results Found");
    item.appendChild(text);
    list.appendChild(item);
}

// function getRelevancy(value,searchTerm){
//   if(value===searchTerm){
//     return 2;
//   }else if (value.startsWith(searchTerm)){
//     return 1;
//   }else if(value.includes(searchTerm)){
//     return 0;
//   }
// }
searchInput.addEventListener('input',(event)=>{
  let value= event.target.value;
  if(value && value.trim().length > 0){
    value=value.trim().toLowerCase();
    setList(menu.filter(food =>{
      return food.name.includes(value);
    }));
  }else{
    clearList();
  }
});
  