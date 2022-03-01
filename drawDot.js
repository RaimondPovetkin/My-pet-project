
function drawDot(pupilPositionX1,pupilPositionY1,contextDraw){
    contextDraw.beginPath();
    contextDraw.arc(pupilPositionX1, pupilPositionY1, 3, 0, Math.PI*2);
    contextDraw.lineWidth = 3;
    contextDraw.strokeStyle = "black";
    contextDraw.fillStyle = "black";
    contextDraw.fill();
    contextDraw.stroke(); 
}
