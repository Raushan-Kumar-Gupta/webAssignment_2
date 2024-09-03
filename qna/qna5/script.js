var start=document.querySelector('#start');
var stop=document.querySelector('#stop');
var head=document.querySelector('h1');
var cnt=0;
var intV;
start.addEventListener('click',function(){
    intV=setInterval(function(){
        head.textContent=cnt;
        cnt++;
    }, 1000)
})

stop.addEventListener('click', function(){
    clearInterval(intV);
})
// console.log(head);
// var cnt=0;
// setInterval(function(){
//     console.log(cnt);
//     cnt++;
// }, 1000);