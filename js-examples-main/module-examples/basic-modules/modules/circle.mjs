function draw(color, posicion) {

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;
    ctx.arc(100, 75, posicion, 1 * Math.PI, 0);
    ctx.stroke();
    return ctx;

}

export { draw };


/*
var c = document.getElementById("myCanvas");
   var ctx = c.getContext("2d");
   ctx.beginPath();
   ctx.lineWidth = 3;
   ctx.strokeStyle = "red";
   ctx.arc(100, 75, 50, 1 * Math.PI, 0);
   ctx.stroke();

   var c = document.getElementById("myCanvas");
   var ctx = c.getContext("2d");
   ctx.beginPath();
   ctx.lineWidth = 3;
   ctx.strokeStyle = "blue";
   ctx.arc(100, 75, 47, 1 * Math.PI, 0);
   ctx.stroke();

   var c = document.getElementById("myCanvas");
   var ctx = c.getContext("2d");
   ctx.beginPath();
   ctx.lineWidth = 3;
   ctx.strokeStyle = "green";
   ctx.arc(100, 75, 44, 1 * Math.PI, 0);
   ctx.stroke();

   var c = document.getElementById("myCanvas");
   var ctx = c.getContext("2d");
   ctx.beginPath();
   ctx.lineWidth = 3;
   ctx.strokeStyle = "yellow";
   ctx.arc(100, 75, 41, 1 * Math.PI, 0);
   ctx.stroke();

   var c = document.getElementById("myCanvas");
   var ctx = c.getContext("2d");
   ctx.beginPath();
   ctx.lineWidth = 3;
   ctx.strokeStyle = "blue";
   ctx.arc(100, 75, 38, 1 * Math.PI, 0);
   ctx.stroke();

   var c = document.getElementById("myCanvas");
   var ctx = c.getContext("2d");
   ctx.beginPath();
   ctx.lineWidth = 3;
   ctx.strokeStyle = "violet";
   ctx.arc(100, 75, 35, 1 * Math.PI, 0);
   ctx.stroke();

   var c = document.getElementById("myCanvas");
   var ctx = c.getContext("2d");
   ctx.beginPath();
   ctx.lineWidth = 3;
   ctx.strokeStyle = "blue";
   ctx.arc(100, 75, 32, 1 * Math.PI, 0);
   ctx.stroke();

   */