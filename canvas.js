var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');
c.fillStyle = 'black';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'white';
c.fillRect(205, 100, 100, 100);
c.fillStyle = 'rgb(255, 0, 0)';
c.fillRect(310, 100, 100, 100);

// line

c.beginPath();
c.moveTo(400, 100);
c.lineTo(400, 600);
c.moveTo(500, 100);
c.lineTo(1300, 50)
c.strokeStyle = 'white';
c.stroke();

//circle

for(var i = 0; i < 5; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var color = Math.random * color;
    c.beginPath();
    c.arc(x, y, 50, 0, Math.PI * 2, false);
    c.strokeStyle = color;
    c.stroke();
}