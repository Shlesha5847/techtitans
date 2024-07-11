let a = document.querySelector('.backgo')
a.addEventListener('click',function(){
    window.history.back();
});
let b = document.getElementById("box1")
b.onclick = function(){
    window.location.href="liveevents/liveevents.html"
}