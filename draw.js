
function drawEyes(eyesPositionX1,eyesPositionY1,eyes,pW,lineWidThthick){
    /* context.clearRect(0,0, canvas.width, canvas.height); */
    context.beginPath();
    context.arc(eyesPositionX1, eyesPositionY1, eyes*pW, 0, Math.PI*2);
    context.lineWidth = lineWidThthick;
    context.fillStyle = "white";
    context.strokeStyle = strokeThickness;
    context.fill();
    if(strokeThickness!=undefined)
    context.stroke(); 

}


function drawPupil(pupilPositionX1,pupilPositionY1,pupil,pW,lineWidThthick){
    context.beginPath();
    context.arc(pupilPositionX1, pupilPositionY1, pupil*pW, 0, Math.PI*2);
    context.lineWidth = lineWidThthick;
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.fill();
    if(strokeThickness!=undefined)
    context.stroke(); 
}


function cameBackFace(idFace,faceBlockX1,faceBlockY1,faceBlockX2,faceBlockY2,faceBlockX3,faceBlockY3,faceBlockX4,faceBlockY4,pW,wForehead,pH,strokeThickness,faceColor,lineWidThthick,contextDraw){
    switch(idFace){
        case "canvas_face1":
            return drawFace(faceBlockX1,faceBlockY1,faceBlockX2,faceBlockY2,faceBlockX3,faceBlockY3,faceBlockX4,faceBlockY4,pW,wForehead,pH,strokeThickness,faceColor,lineWidThthick,contextDraw)
        case "canvas_face2":
            return drawFace1(faceBlockX1,faceBlockY1,faceBlockX2,faceBlockY2,faceBlockX3,faceBlockY3,faceBlockX4,faceBlockY4,pW,wForehead,pH,strokeThickness,faceColor,lineWidThthick,contextDraw)
        case "canvas_face3":    
            return drawFace2(faceBlockX1,faceBlockY1,faceBlockX2,faceBlockY2,faceBlockX3,faceBlockY3,faceBlockX4,faceBlockY4,pW,wForehead,pH,strokeThickness,faceColor,lineWidThthick,contextDraw)
    }
}

function drowHair(hair,strokeThickness,lineWidThthick,pW,pH,contextDraw){
    console.log(hair,strokeThickness,lineWidThthick,pW,pH,contextDraw)

/*     contextDraw.beginPath();
    contextDraw.rect(hairBlockX1, hairBlockY1, hairBlockX3-hairBlockX1, hairBlockY3-hairBlockY1);
    contextDraw.lineWidth = lineWidth;
    contextDraw.strokeStyle = "black";
    contextDraw.fillStyle = "blue";
    contextDraw.fill();
    contextDraw.stroke();  */

    contextDraw.beginPath();
    contextDraw.moveTo(hair.hairBlockX1+20*pW, hair.hairBlockY1+30*pH);
    contextDraw.bezierCurveTo(hair.hairBlockX1, hair.hairBlockY1+30*pH, hair.hairBlockX1-50*pW, hair.hairBlockY1+50*pH, hair.hairBlockX1+100*pW, hair.hairBlockY1+150*pH);
    contextDraw.bezierCurveTo(hair.hairBlockX2+190*pW, hair.hairBlockY2-150*pH, hair.hairBlockX2+150*pW, hair.hairBlockY2-200*pH, hair.hairBlockX2+130*pW, hair.hairBlockY2-170*pH);
    contextDraw.bezierCurveTo(hair.hairBlockX3, hair.hairBlockY3-210*pH, hair.hairBlockX3-50*pW, hair.hairBlockY3-210*pH, hair.hairBlockX3-50*pW, hair.hairBlockY3-190*pH);
    contextDraw.bezierCurveTo(hair.hairBlockX4-66*pW, hair.hairBlockY4-10*pH, hair.hairBlockX4-136*pW, hair.hairBlockY4-10*pH, hair.hairBlockX4-136*pW, hair.hairBlockY4+30*pH);


    contextDraw.closePath();
    contextDraw.lineWidth = lineWidThthick;
    contextDraw.strokeStyle = strokeThickness;
    contextDraw.fillStyle = "grey";
    contextDraw.fill();
    if(strokeThickness!=undefined)
        contextDraw.stroke();
    }



function drawFace(version,faceBlockX1,faceBlockY1,faceBlockX2,faceBlockY2,faceBlockX3,faceBlockY3,faceBlockX4,faceBlockY4,pW,wForehead,pH,strokeThickness,faceColor,lineWidThthick,contextDraw){

    if(version=="canvas_face1"){
        contextDraw.beginPath();
        contextDraw.moveTo(faceBlockX1+45*pW-wForehead*pW, faceBlockY1+40*pH);
        contextDraw.bezierCurveTo(faceBlockX1+30*pW+((40-wForehead)/2*pW), faceBlockY1+10*pH,
            faceBlockX1+90*pW-((40-wForehead)/2*pW), faceBlockY1+10*pH,
             faceBlockX1+75*pW+wForehead*pW, faceBlockY1+50*pH);
             contextDraw.lineTo(faceBlockX2+70*pW+wForehead*pW, faceBlockY2-50*pH);
             contextDraw.bezierCurveTo(faceBlockX3-50*pW, faceBlockY3+20*pH, faceBlockX3-110*pW, faceBlockY3+20*pH, 
            faceBlockX1+45*pW-wForehead*pW, faceBlockY1+40*pH);
    
    
            /* drawDot(faceBlockX1+30*pW+((40-wForehead)/2*pW), faceBlockY1+10*pH,contextDraw)
        drawDot(faceBlockX1+90*pW-((40-wForehead)/2*pW), faceBlockY1+10*pH,contextDraw)
        drawDot(faceBlockX3-50*pW, faceBlockY3+20*pH,contextDraw)
        drawDot(faceBlockX3-110*pW, faceBlockY3+20*pH,contextDraw) */
    
            /* +(40-wForehead*pW) */
    
    /* drawDot(faceBlockX1+30*pW, faceBlockY1+20*pH)
    drawDot(faceBlockX1+90*pW, faceBlockY1+20*pH) */
    
    contextDraw.closePath();
    contextDraw.lineWidth = lineWidThthick;
    contextDraw.strokeStyle = strokeThickness;
    contextDraw.fillStyle = faceColor;
    contextDraw.fill();
        if(strokeThickness!=undefined)
        contextDraw.stroke();
    }
    else if(version=="canvas_face2"){
        contextDraw.beginPath();
        contextDraw.moveTo(faceBlockX1+35*pW-wForehead*pW,faceBlockY1+80*pH);
        contextDraw.bezierCurveTo(faceBlockX1-1*pW+((40-wForehead)/2*pW), faceBlockY1+10*pH,
        faceBlockX1+100*pW-((40-wForehead)/2*pW), faceBlockY1+10*pH,
        faceBlockX1+65*pW+wForehead*pW, faceBlockY1+80*pH);
    
             contextDraw.bezierCurveTo(faceBlockX1+100*pW-((40-wForehead)/2*pW), faceBlockY3+20*pH, faceBlockX1-1*pW+((40-wForehead)/2*pW), faceBlockY3+20*pH, 
            faceBlockX1+35*pW-wForehead*pW, faceBlockY1+80*pH);



    /* drawDot(faceBlockX1+25*pW-wForehead*pW,faceBlockY1+80*pH,contextDraw)
    drawDot(faceBlockX1-10*pW+((40-wForehead)/2*pW), faceBlockY1+10*pH,contextDraw)
    drawDot(faceBlockX1+90*pW-((40-wForehead)/2*pW), faceBlockY1+10*pH,contextDraw)
    drawDot(faceBlockX1+55*pW+wForehead*pW, faceBlockY1+80*pH,contextDraw)

    drawDot(faceBlockX1+90*pW-((40-wForehead)/2*pW), faceBlockY3+20*pH,contextDraw)
    drawDot(faceBlockX1-10*pW+((40-wForehead)/2*pW), faceBlockY3+20*pH,contextDraw) */
    /* drawDot(faceBlockX2,faceBlockY2,contextDraw)
    drawDot(faceBlockX3,faceBlockY3,contextDraw)
    drawDot(faceBlockX4,faceBlockY4,contextDraw) */
    
    
    contextDraw.closePath();
    contextDraw.lineWidth = lineWidThthick;
    contextDraw.strokeStyle = strokeThickness;
    contextDraw.fillStyle = faceColor;
    contextDraw.fill();
        if(strokeThickness!=undefined)
        contextDraw.stroke();
    }
    else if(version=="canvas_face3"){
        contextDraw.beginPath();
        contextDraw.moveTo(faceBlockX1+45*pW-wForehead*pW, faceBlockY1+80*pH);
        contextDraw.bezierCurveTo(faceBlockX1-20*pW+((40-wForehead)/2*pW), faceBlockY1+10*pH,
            faceBlockX1+80*pW-((40-wForehead)/2*pW), faceBlockY1+10*pH,
             faceBlockX1+65*pW+wForehead*pW, faceBlockY1+80*pH);
    
             contextDraw.bezierCurveTo(faceBlockX1+80*pW-((40-wForehead)/2*pW), faceBlockY3+20*pH, faceBlockX1-20*pW+((40-wForehead)/2*pW), faceBlockY3+20*pH, 
            faceBlockX1+45*pW-wForehead*pW, faceBlockY1+80*pH);
    
    
    contextDraw.closePath();
    contextDraw.lineWidth = lineWidThthick;
    contextDraw.strokeStyle = strokeThickness;
    contextDraw.fillStyle = faceColor;
    contextDraw.fill();
        if(strokeThickness!=undefined)
        contextDraw.stroke();
    }


}



























function drawFaceSmall(faceBlockX1,faceBlockY1,faceBlockX2,faceBlockY2,faceBlockX3,faceBlockY3,faceBlockX4,faceBlockY4,pW,wForehead,pH,strokeThickness,faceColor,lineWidThthick,contextDraw){
    drawDot(faceBlockX1,faceBlockY1,contextDraw)
    drawDot(faceBlockX2,faceBlockY2,contextDraw)
    drawDot(faceBlockX3,faceBlockY3,contextDraw)
    drawDot(faceBlockX4,faceBlockY4,contextDraw)

    contextDraw.beginPath();
    contextDraw.moveTo(faceBlockX1+45*pW-wForehead*pW, faceBlockY1+40*pH);
    contextDraw.bezierCurveTo(faceBlockX1+30*pW+((40-wForehead)/2*pW), faceBlockY1+10*pH,
        faceBlockX1+90*pW-((40-wForehead)/2*pW), faceBlockY1+10*pH,
         faceBlockX1+75*pW+wForehead*pW, faceBlockY1+50*pH);
         
         contextDraw.lineTo(faceBlockX2+70*pW+wForehead*pW, faceBlockY2-50*pH);
         contextDraw.bezierCurveTo(faceBlockX3-50*pW, faceBlockY3+20*pH, faceBlockX3-110*pW, faceBlockY3+20*pH, 
        faceBlockX1+45*pW-wForehead*pW, faceBlockY1+40*pH);

        /* +(40-wForehead*pW) */

/* drawDot(faceBlockX1+30*pW, faceBlockY1+20*pH)
drawDot(faceBlockX1+90*pW, faceBlockY1+20*pH) */

contextDraw.closePath();
contextDraw.lineWidth = lineWidThthick;
contextDraw.strokeStyle = strokeThickness;
contextDraw.fillStyle = faceColor;
contextDraw.fill();
    if(strokeThickness!=undefined)
    contextDraw.stroke();

}





















function drawMouth(hMouth,wMouth,pupilPositionX1,pupilPositionX2,nosePositionY,strokeThickness,mouthColor,pH,pW,t,lineWidThthick){
    let upperLipX0=pupilPositionX1-wMouth;
    let upperLipY0=nosePositionY+20*pH;
    let upperLipX1=pupilPositionX1+10*pW;
    let upperLipY1=upperLipY0+2*pH;
    let upperLipX2=pupilPositionX1+20*pW;
    let upperLipY2=upperLipY0+2*pH;
    let upperLipX3=pupilPositionX2+wMouth;
    let upperLipY3=nosePositionY+20*pH; 
    
    
    let lowerLipX1=pupilPositionX1+25*pW;
    let lowerLipY1=upperLipY2+hMouth*pH;
    let lowerLipX2=pupilPositionX1+5*pW;
    let lowerLipY2=upperLipY1+hMouth*pH;



    context.beginPath();
    context.moveTo(upperLipX0, upperLipY0);
    context.bezierCurveTo(upperLipX1, upperLipY1, upperLipX2, upperLipY2, upperLipX3, upperLipY3);
    context.bezierCurveTo(lowerLipX1, lowerLipY1, lowerLipX2, lowerLipY2, upperLipX0, upperLipY0);
    context.closePath();
    context.lineWidth = lineWidThthick;
    context.strokeStyle = strokeThickness;
    context.fillStyle = mouthColor;
    context.fill();
    if(strokeThickness!=undefined)
    context.stroke();







/***************ЗУБЫ***************** */


/////////////////////////поиск точек на нижней губе
    let beginningOfTeethX=Math.pow((1-t),3)*upperLipX3+3*Math.pow((1-t),2)*t*lowerLipX1+3*(1-t)*Math.pow(t,2)*lowerLipX2+Math.pow(t,3)*upperLipX0;

    let beginningOfTeethY=Math.pow((1-t),3)*upperLipY3+3*Math.pow((1-t),2)*t*lowerLipY1+3*(1-t)*Math.pow(t,2)*lowerLipY2+Math.pow(t,3)*upperLipY0;


    let endOfTeethX=Math.pow((1-t),3)*upperLipX0+3*Math.pow((1-t),2)*t*lowerLipX2+3*(1-t)*Math.pow(t,2)*lowerLipX1+Math.pow(t,3)*upperLipX3;

    let endOfTeethY=Math.pow((1-t),3)*upperLipY0+3*Math.pow((1-t),2)*t*lowerLipY2+3*(1-t)*Math.pow(t,2)*lowerLipY1+Math.pow(t,3)*upperLipY3;
////////////////рисование верхней губы
    context.beginPath();
    context.moveTo(upperLipX0, upperLipY0);
    context.bezierCurveTo(upperLipX1, upperLipY1, upperLipX2, upperLipY2, upperLipX3, upperLipY3);
    context.lineWidth = 1;
    context.strokeStyle = 'black';
////////////////определение двух промежуточных точек для построения правой кривой
    var values = findPoint(lowerLipX1,lowerLipY1,lowerLipX2,lowerLipY2,t);
    let lowerLipX21=values[0];
    let lowerLipY21=values[1];

    var values = findPoint(upperLipX3,upperLipY3,lowerLipX1,lowerLipY1,t);
    let teethLowerLipX1=values[0];
    let teethLowerLipY1=values[1];

    var values = findPoint(teethLowerLipX1,teethLowerLipY1,lowerLipX21,lowerLipY21,t);
    let teethLowerLipX2=values[0];
    let teethLowerLipY2=values[1];
////////////////рисование правой кривой

    context.bezierCurveTo(teethLowerLipX1, teethLowerLipY1, teethLowerLipX2, teethLowerLipY2, beginningOfTeethX, beginningOfTeethY);
    context.strokeStyle = 'black';    

////////////////рисование нижней части зубов
    context.lineTo(endOfTeethX, endOfTeethY);
    context.strokeStyle = 'black';

////////////////определение двух промежуточных точек для построения левой кривой
    var values = findPoint(lowerLipX2,lowerLipY2,lowerLipX1,lowerLipY1,t);
    let lowerLipX21L=values[0];
    let lowerLipY21L=values[1];

    var values = findPoint(upperLipX0,upperLipY0,lowerLipX2,lowerLipY2,t);
    let teethLowerLipX1L=values[0];
    let teethLowerLipY1L=values[1];

    var values = findPoint(teethLowerLipX1L,teethLowerLipY1L,lowerLipX21L,lowerLipY21L,t);
    let teethLowerLipX2L=values[0];
    let teethLowerLipY2L=values[1];


    context.bezierCurveTo(teethLowerLipX2L, teethLowerLipY2L, teethLowerLipX1L, teethLowerLipY1L, upperLipX0, upperLipY0);
    context.lineWidth = 0;
    context.strokeStyle = 'black';
    context.closePath();
    context.fillStyle = "white";
    context.fill();    



//////////////////////////////повторная обводка рта
    context.beginPath();
    context.moveTo(upperLipX0, upperLipY0);
    context.bezierCurveTo(upperLipX1, upperLipY1, upperLipX2, upperLipY2, upperLipX3, upperLipY3);
    context.bezierCurveTo(lowerLipX1, lowerLipY1, lowerLipX2, lowerLipY2, upperLipX0, upperLipY0);
    context.closePath();
    context.lineWidth = lineWidThthick;
    context.strokeStyle = strokeThickness;
    if(strokeThickness!=undefined)
    context.stroke();
}


function drawNose(lNose,strokeThickness,faceColor,nosePositionX, nosePositionY,pW,pH,lineWidThthick){
    context.beginPath();
    context.moveTo(nosePositionX, nosePositionY);
    context.bezierCurveTo(nosePositionX-20*pW-lNose*pW, nosePositionY-1*pH, 
        nosePositionX-40*pW-(lNose/2*pW), nosePositionY+20*pH, 
        nosePositionX-30*pW-lNose/1.4*pW, nosePositionY+40*pH);

    context.lineTo(nosePositionX, nosePositionY+15*pH);
    context.lineWidth = lineWidThthick;
    context.strokeStyle = strokeThickness;
    context.fillStyle = faceColor;
    context.fill();
    if(strokeThickness!=undefined)
    context.stroke();

}