let x = 2;
let y = 3
let rDir = true;
setInterval(function(){ 
    ball.style.left = x +'px';
    if (x > game.clientWidth - ball.clientWidth) rDir = false;
    if (x< 0) rDir = true;
    if (rDir) {
        x++;
    }
    else {
        x--;
    }
}, 1);
