// var userName=document.querySelector("#username");
// var password=document.querySelector("#password");
var inp=document.querySelectorAll("input");
var p=document.querySelectorAll('p');
var btn=document.querySelector("btn");
var form=document.querySelector("form");
var userError=document.getElementById("userError");
var passError=document.getElementById("passError");
form.addEventListener('click',function(event){
    event.preventDefault();
    for(var i=0; i<inp.length; i++){
        if(inp[i].value.trim()===''){
            p[i].textContent='Error';
            p[i].style.color='red'
        }
        else{
            p[i].textContent='';
        }
    }

    // //method 2(difficult)
    // inp.forEach(function(elem){
    //     if(elem.value.trim()===""){
    //             p[0].textContent="Error"
    //             p[0].style.color='red';
    //     }else{

    //     }
    // })
    // console.log(p);

    // //method 1 
    // if(userName.value.trim()===''){
    //     userError.textContent="Name required";
    //     userError.style.color='red';
    // }
    // else{
    //     userError.textContent="";
    //     userError.style.color='';
    // }
    // if(password.value.trim()===''){
    //     passError.textContent="password required";
    //     passError.style.color='red';
    // }
    // else{
    //     passError.textContent="";
    //     passError.style.color='';
    // }

    // console.log(userName.value)
})
