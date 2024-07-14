
let a = document.querySelector('.backgo')
a.addEventListener('click',function(){
    window.history.back();
});

let b = document.querySelector('.outfit')
b.onclick = function(){
    window.location.href = "outfit.html"
}

let c = document.querySelector('.messages-icon')
c.onclick = function(){
    window.location.href = "chats.html"
}