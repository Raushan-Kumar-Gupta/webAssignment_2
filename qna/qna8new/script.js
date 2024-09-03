var inp=document.querySelector('#input');
var data=[
    {   
        name:'rishu',
        src:'https://images.unsplash.com/photo-1633287015755-012b3273f293?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name:'samip',
        src:'https://images.unsplash.com/photo-1669912324683-886efc532643?q=80&w=968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name:'sahil',
        src:'https://images.unsplash.com/photo-1600496461900-3f1b74fb40d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBvcnRhaXQlMjBtZW58ZW58MHx8MHx8fDA%3D'
    },
    {
        name:'sumit',
        src:'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name:'aryan',
        src:'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

var people=document.querySelector('#people');

data.forEach(function(prsn){
    people.innerHTML+=`<div id="person">
            <div id="image">
              <img
                src=${prsn.src}
                alt=""
              />
            </div>
            <h5>${prsn.name}</h5>
          </div>`
})

inp.addEventListener('input', function(){
    if(inp.value.trim()!=''){
        people.innerHTML='';
        var newdata=data.filter(function(prsn1){
            return prsn1.name.startsWith(inp.value);
        })
        newdata.forEach(function(prsn2){
            people.innerHTML+=`<div id="person">
                    <div id="image">
                      <img
                        src=${prsn2.src}
                        alt=""
                      />
                    </div>
                    <h5>${prsn2.name}</h5>
                  </div>`
        })
    }
    
})
