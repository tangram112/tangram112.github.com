// console.log('This would be the main JS file.');
// dartst
function drawDiagram( canvas_id) {
      var canvas = document.getElementById(canvas_id);
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(188, 50, 200, 100);
      //context.fillStyle = 'yellow';
      //context.fill();
      context.lineWidth = 2;
      context.strokeStyle = 'white';
      context.stroke();	
}
