var btn = document.querySelector("button");
var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");

btn.addEventListener('click', function(){
    var img1src=img1.src;
    var img2src=img2.src;
   img1.src=img2src;
   img2.src=img1src;
})