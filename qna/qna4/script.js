var list=document.querySelector('#list');
var inp=document.querySelector('#inp')

var add=document.querySelector('#add');
var remove=document.querySelector('#remove');

add.addEventListener('click',function(){
    if(inp.value.trim()!=''){
    var tag=document.createElement('li');
    tag.innerHTML=inp.value;
    // tag.textContent=list.value;
    console.log(tag)
    list.appendChild(tag);
    inp.value='';
    }
   
})
remove.addEventListener('click', function(){
    list.removeChild(list.lastElementChild);
})
