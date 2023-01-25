var canvas = document.getElementById('CanvasId');
var g = canvas.getContext('2d');

function Background_Gradient(){
    var ctx = canvas.getContext("2d");
    var gradient = ctx.createLinearGradient(400, 0, 400, 300);
    gradient.addColorStop(0, 'blue');
    gradient.addColorStop(1, 'white');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 300);
}

function Draw_Road(x, y){
    g.beginPath();
    g.fillStyle = "black";
    g.moveTo(x-10,y+20);
    g.lineTo(x-20,y+40);
    g.lineTo(x+40,y+55);
    g.lineTo(x+50,y+35);
    g.lineTo(x-10,y+20);
    g.fill();
    g.stroke();
    g.closePath();

    g.beginPath();
    g.fillStyle = "white";
    g.moveTo(x-5,y+30);
    g.lineTo(x-5,y+35);
    g.lineTo(x+10,y+39);
    g.lineTo(x+10,y+34);
    g.lineTo(x-5,y+30);
    g.fill();
    g.stroke();
    g.closePath();

    g.beginPath();
    g.fillStyle = "white";
    g.moveTo(x+15,y+35);
    g.lineTo(x+15,y+40);
    g.lineTo(x+30,y+44);
    g.lineTo(x+30,y+39);
    g.lineTo(x+15,y+35);
    g.fill();
    g.stroke();
    g.closePath();

    g.beginPath();
    g.fillStyle = "white";
    g.moveTo(x+35,y+40);
    g.lineTo(x+35,y+45);
    g.lineTo(x+50,y+49);
    g.lineTo(x+50,y+44);
    g.lineTo(x+35,y+40);
    g.fill();
    g.stroke();
    g.closePath();
}

function Draw_House(x, y){ 
    //house
    g.beginPath();
    g.fillStyle = "red";
    g.moveTo(x,y);
    g.lineTo(x+40,y+10);
    g.lineTo(x+30,y+50);
    g.lineTo(x-10,y+20);
    g.lineTo(x,y);
    g.fill();
    g.stroke();
    g.closePath();

    g.beginPath();
    g.fillStyle = "orange";
    g.moveTo(x-10,y+20);
    g.lineTo(x-10,y+40);
    g.lineTo(x+30,y+50);
    g.lineTo(x+30,y+30);
    g.lineTo(x-10,y+20);
    g.fill();
    g.stroke();
    g.closePath();

    g.beginPath();
    g.fillStyle = "black";
    g.moveTo(x+30,y+30);
    g.lineTo(x+30, y+50);
    g.lineTo(x+50, y+40);
    g.lineTo(x+50, y+20);
    g.closePath();
    g.stroke();
    g.fill();

    g.beginPath();
    g.moveTo(x+50, y+20);
    g.lineTo(x+40, y+10)
    g.lineTo(x+30, y+30);
    g.closePath();
    g.stroke();
    g.fill();

    g.beginPath();
    g.fillStyle = "yellow";
    g.moveTo(x,y+25);
    g.lineTo(x+20, y+30);
    g.lineTo(x+20, y+40);
    g.lineTo(x, y+35);
    g.closePath();
    g.stroke();
    g.fill();
}

function Draw_Boom(x, y){
//boom
g.fillStyle = "rgb(165,42,42)"

g.fillRect(x, y, 10, 25);

g.fillStyle = "rgb(0, 100, 0)";

g.beginPath();
g.arc(x+5, y-10, 15, 0, 2 * Math.PI);
g.fill();
}

Background_Gradient();



function Draw_Street(x, y){

g.font = "30px monaco";
g.fillText("Merry Christmas", 100, 100);
// Draw multiple houses and trees 
    for (let i = 0; i < 8; i++) {
        Draw_House(x, y);

        Draw_Boom(x+40, y+25);

        Draw_Road(x, y+20);

        
        x = x+60
        y = y+15
    }
}

Draw_Street(0, 100);
Draw_Street(-5, 160);
Draw_Street(-10, 220);