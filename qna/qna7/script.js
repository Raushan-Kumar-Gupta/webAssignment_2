var prg=document.querySelector('#progress');
var cnt=0;
var h=document.querySelector('#h');
var interval=setInterval(function(){
    if(cnt==100){
        h.style.opacity=1;
        clearInterval(interval)
    }
    prg.style.width=cnt+'%';
    cnt++;
}, 100);
