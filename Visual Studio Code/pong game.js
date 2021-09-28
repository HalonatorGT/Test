var ball=document.getElementById('ball');
var X=365;
setInterval(function(){
    ball.style.left=X+ 'px';
    X++;
}, 10);
ball.style.left='0';

