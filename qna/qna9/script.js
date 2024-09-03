var txtarea=document.querySelector('textarea');
var char=document.querySelector('#char');
var word=document.querySelector('#word');

txtarea.addEventListener('input',function(){
    char.textContent=txtarea.value.length;
    var wordcnt=0;
     // Update word count
     var words = txtarea.value.trim().split(' ');
    //  var cleanWords=words.filter(function(elm){
    //     return elm!='';
    //  });
    word.textContent=words.length;
    });

