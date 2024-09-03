var home=document.querySelector('#home');
var about=document.querySelector('#about');
var skill=document.querySelector('#skill');
var home1=document.querySelector('#home1');
var about1=document.querySelector('#about1');
var skill1=document.querySelector('#skill1');
home1.style.display='initial'
home.addEventListener('click', function(){
    removeall()
    home1.style.display='initial';
})
about.addEventListener('click', function(){
    removeall()
    about1.style.display='initial';
})
skill.addEventListener('click', function(){
    removeall()
    skill1.style.display='initial';
})

function removeall(){
    document.querySelectorAll('p').forEach(function(p){
        p.style.display='none'
    })
}

