const lineWidth = document.querySelector('.lineWidth');
const heightOfTeeth = document.querySelector('.teeth');
const pupilSize = document.querySelector('.pupil');
const eyesSize = document.querySelector('.eyes');
const heightOfMouth = document.querySelector('.mouthH');
const widthOfMouth = document.querySelector('.mouthW');
const lengthOfNose = document.querySelector('.nose');
const widthOfForehead = document.querySelector('.face');

const data = {
    lineWidThthick: lineWidth.value,
    heightOfTeeth: heightOfTeeth.value,
    pupilSize:pupilSize.value,
    eyesSize:eyesSize.value,
    heightOfMouth: heightOfMouth.value,
    widthOfMouth:widthOfMouth.value,
    lengthOfNose:lengthOfNose.value,
    widthOfForehead:widthOfForehead.value,
};

let lineWidThthick=Number (data.lineWidThthick);

let tTeeth= Number (data.heightOfTeeth);
tTeeth=tTeeth/210+0.035;

let pupil= Number (data.pupilSize);
pupil=pupil/5+3;

let eyes=Number (data.eyesSize);

let hMouth= Number (data.heightOfMouth);

let wMouth= Number (data.widthOfMouth);

let lNose= Number (data.lengthOfNose);

let wForehead= Number (data.widthOfForehead);


/* коэффициенты для адаптивной отрисовки */
function findPointWidth(Width){
    return Width/470
}
function findPointHeight(Height){
    return Height/600
}


/* функция нахождения точек для уровневой заливки */
function findPoint(x1,y1,x2,y2,t){

    let coord=[];
    let lx=Math.abs(x1-x2);//длинна по x
    let ly=Math.abs(y1-y2);// длинна по y
    
    if(x1<=x2 && y1<=y2){
        coord[0]=lx*t+x1;
        coord[1]=ly*t+y1;
        return coord;
    }
    if(x1>x2 && y1>y2){
        coord[0]=x1-lx*t;
        coord[1]=y1-ly*t;
        return coord;
    }
    if(x1<x2 && y1<y2){
        coord[0]=lx*t+x1;
        coord[1]=y1-ly*t;
        return coord;
    }
    if(x1>x2 && y1<=y2){
        coord[0]=x1-lx*t;
        coord[1]=ly*t+y1;
        return coord;
    }
}


/* оптимальная ширина и длина 470/600 */
let canvasWidth=470;
let canvasHeight=600;


/* создание канваса */
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");


/* логика клика по картинке */
canvas.onclick = function() {
    var dataURL = canvas.toDataURL("image/jpeg");
    var link = document.createElement("a");
    document.body.appendChild(link); // Firefox requires the link to be in the body :(
    link.href = dataURL;
    link.download = "my-image-name.jpg";
    link.click();
    document.body.removeChild(link);
  };


/* маленькие канвасы лица */
const canvasFace = document.querySelector("#canvas_face1");
const contextFace = canvasFace.getContext("2d");

const canvasFace2 = document.querySelector("#canvas_face2");
const contextFace2 = canvasFace2.getContext("2d");

const canvasFace3 = document.querySelector("#canvas_face3");
const contextFace3 = canvasFace3.getContext("2d");

let canvasFaceWidth =118;
let canvasFaceHeight =150;

canvasFace.width = canvasFaceWidth;
canvasFace.height = canvasFaceHeight;

canvasFace2.width = canvasFaceWidth;
canvasFace2.height = canvasFaceHeight;

canvasFace3.width = canvasFaceWidth;
canvasFace3.height = canvasFaceHeight;


/* относительные еденицы для адаптивного сжатия и растяжения */
let pointWidth=findPointWidth(canvasWidth);
let pointHeight=findPointHeight(canvasHeight);


/* первоначальные параметры отрисовки */
let paddingTop =50;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

let strokeThickness = '#4d4d4d';
let faceColor = "rgb(244, 205, 138)";
let mouthColor = "#9b2d30";
let idCanvasFace ="canvas_face1";
let versionHair="gray"


/* отрисовка маленьких лиц */
drawFace("canvas_face1",0,0,0,canvasFaceHeight,canvasFaceWidth,canvasFaceHeight,canvasFaceWidth,0,pointWidth,wForehead,pointHeight,strokeThickness,faceColor,lineWidThthick,contextFace)

drawFace("canvas_face2",0,0,0,canvasFaceHeight,canvasFaceWidth,canvasFaceHeight,canvasFaceWidth,0,pointWidth,wForehead,pointHeight,strokeThickness,faceColor,lineWidThthick,contextFace2)

drawFace("canvas_face3",0,0,0,canvasFaceHeight,canvasFaceWidth,canvasFaceHeight,canvasFaceWidth,0,pointWidth,wForehead,pointHeight,strokeThickness,faceColor,lineWidThthick,contextFace3)


/* функция очистки экрана */
function clearCanvas(contextDraw,canvasDraw){
    contextDraw.clearRect(0,0, canvasDraw.width, canvasDraw.height);
}


/* непосредственная отрисовка */
draw()

function draw(){


/* инициализация цвета лица */
let radioFace = document.getElementsByName('colorFace');
for(let i=0;i<radioFace.length;i++){
    radioFace[i].onchange=function(){
        faceColor =this.value
        clearCanvas(context,canvas)
        draw()
    };
}

    
/* инициализация цвета обводки */
let radioStroke = document.getElementsByName('colorStroke');
for(let i=0;i<radioStroke.length;i++){
    radioStroke[i].onchange=function(){
        strokeThickness =this.value
        if(strokeThickness==="undefined"){
            strokeThickness=undefined
        }
        clearCanvas(context,canvas)
        draw()
    };
}


/* инициализация формы лица */
let radioFaceShape = document.getElementsByClassName("canvas_face");
for(let i=0;i<radioFaceShape.length;i++){
    radioFaceShape[i].onclick=function(){
    idCanvasFace=radioFaceShape[i].id
    clearCanvas(context,canvas)
    draw()
    };
}


/* инициализация толщины линии */
document.querySelector('.lineWidth').oninput = function() {
    lineWidThthick=Number (document.querySelector('.lineWidth').value);
    clearCanvas(context,canvas)
    draw()
};


/* инициализация ширины лица */
document.querySelector('.face').oninput = function() {
    wForehead=Number(document.querySelector('.face').value);
    clearCanvas(context,canvas)
    draw()
};


/* волосы */
let hair={
     hairBlockWidth:canvasWidth/3,
     hairBlockHeight:canvasHeight/3,

     hairBlockX1:Math.round(canvasWidth/2-(canvasWidth/3)/2),
     hairBlockY1:paddingTop,
     hairBlockX2:Math.round(canvasWidth/2-(canvasWidth/3)/2),
     hairBlockY2:Math.round(paddingTop+(canvasHeight/3)),
     hairBlockX3:Math.round(canvasWidth/2+(canvasWidth/3)/2),
     hairBlockY3:Math.round(paddingTop+(canvasHeight/3)),
     hairBlockX4:Math.round(canvasWidth/2+(canvasWidth/3)/2),
     hairBlockY4:paddingTop
}

drowHair(hair,strokeThickness,lineWidThthick,pointWidth,pointHeight,context)


/* лицо */
    let face={

    }

    let faceBlockWidth=canvasWidth/4;
    let faceBlockHeight=canvasHeight/4;
    
    
    
    let faceBlockX1=Math.round(canvasWidth/2-faceBlockWidth/2);
    let faceBlockY1=paddingTop+hair.hairBlockHeight/2-faceBlockHeight/2;
    
    let faceBlockX2=faceBlockX1;
    let faceBlockY2=Math.round(faceBlockY1+faceBlockHeight);
    
    let faceBlockX3=Math.round(canvasWidth/2+faceBlockWidth/2);
    let faceBlockY3=faceBlockY2;
    
    let faceBlockX4=faceBlockX3;
    let faceBlockY4=faceBlockY1;


    drawFace(idCanvasFace,faceBlockX1,faceBlockY1,faceBlockX2,faceBlockY2,faceBlockX3,faceBlockY3,faceBlockX4,faceBlockY4,pointWidth,wForehead,pointHeight,strokeThickness,faceColor,lineWidThthick,context)
    
    

       
    
////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////eyes


    let eyesPositionX1=faceBlockX1+(faceBlockX1+(faceBlockX3-faceBlockX1)/2-faceBlockX1)/2
    let eyesPositionY1=faceBlockY1+(faceBlockY2-faceBlockY1)/2
    
    
    let eyesPositionX2=faceBlockX1+(faceBlockX3-faceBlockX1)/2
    let eyesPositionY2=eyesPositionY1

    drawEyes(eyesPositionX1,eyesPositionY1,eyes,pointWidth,lineWidThthick)

    document.querySelector('.eyes').oninput = function() {
        clearCanvas(context,canvas)
        draw()
        eyes=document.querySelector('.eyes').value
        /* drawEyes(eyesPositionX1,eyesPositionY1,eyes,pointWidth) */
      };
    

/////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////pupils
let pupilPositionX1=eyesPositionX1-5*pointWidth
let pupilPositionY1=eyesPositionY1


let pupilPositionX2=eyesPositionX2-5*pointWidth
let pupilPositionY2=eyesPositionY1

drawPupil(pupilPositionX1,pupilPositionY1,pupil,pointWidth,lineWidThthick)

document.querySelector('.pupil').oninput = function() {
    clearCanvas(context,canvas)
    draw()
    pupil=document.querySelector('.pupil').value;
    pupil=pupil/5+3;
    /* drawPupil(pupilPositionX1,pupilPositionY1,pupil,pointWidth) */
   };



let nosePositionX=(eyesPositionX1+eyesPositionX2)/2// между глазами
let nosePositionY=eyesPositionY1+10*pointHeight


    //////////////////////////////////////////////////////////mouth
    /* let coord={}; */

    
   
/* let mouthCoord={
    upperLipX0:pupilPositionX1-wMouth,
    upperLipY0:nosePositionY+20*pointHeight,
    upperLipX1:pupilPositionX1+10*pointWidth,
    upperLipY1:upperLipY0+2*pointHeight,
    upperLipX2:pupilPositionX1+20*pointWidth,
    upperLipY2:upperLipY0+2*pointHeight,
    upperLipX3:pupilPositionX2+wMouth,
    upperLipY3:nosePositionY+20*pointHeight, 
    
    
    lowerLipX1:pupilPositionX1+25*pointWidth,
    lowerLipY1:hMouth*pointHeight,
    lowerLipX2:pupilPositionX1+5*pointWidth,
    lowerLipY2:hMouth*pointHeight,
} */

/*  
    coord.push(pupilPositionX1-wMouth);
    coord.push(nosePositionY+20*pointHeight);
    coord.push(pupilPositionX1+10*pointWidth);
    coord.push(upperLipY0+2*pointHeight);
    coord.push(pupilPositionX1+20*pointWidth);
    coord.push(upperLipY0+2*pointHeight);
    coord.push(pupilPositionX2+wMouth);
    coord.push(nosePositionY+20*pointHeight);

    coord.push(pupilPositionX1+25*pointWidth);
    coord.push(hMouth*pointHeight);
    coord.push(pupilPositionX1+5*pointWidth);
    coord.push(hMouth*pointHeight); */

    drawMouth(hMouth,wMouth,pupilPositionX1,pupilPositionX2,nosePositionY,strokeThickness,mouthColor,pointHeight,pointWidth,tTeeth,lineWidThthick);


    document.querySelector('.mouthH').oninput = function() {
        clearCanvas(context,canvas)
        draw()
        hMouth=Number (document.querySelector('.mouthH').value);
        wMouth=Number (document.querySelector('.mouthW').value);
        /* drawMouth(hMouth,wMouth,pupilPositionX1,pupilPositionX2,nosePositionY,strokeThickness,mouthColor,pointHeight,pointWidth,t) */
    };


    document.querySelector('.mouthW').oninput = function() {
        clearCanvas(context,canvas)
        draw()
        hMouth=Number (document.querySelector('.mouthH').value);
        wMouth=Number (document.querySelector('.mouthW').value);
        /* drawMouth(hMouth,wMouth,pupilPositionX1,pupilPositionX2,nosePositionY,strokeThickness,mouthColor,pointHeight,pointWidth,t) */
    };

    document.querySelector('.teeth').oninput = function() {
        clearCanvas(context,canvas)
        draw()
        tTeeth=Number (document.querySelector('.teeth').value);
        tTeeth=tTeeth/210+0.035;
        /* console.log(t) */
        /* drawMouth(hMouth,wMouth,pupilPositionX1,pupilPositionX2,nosePositionY,strokeThickness,mouthColor,pointHeight,pointWidth,t) */
    };


/*     context.beginPath();
    context.moveTo(coord[0], coord[1]);
    context.bezierCurveTo(coord[2], coord[3], coord[4], coord[5], coord[6], coord[7]);
    context.bezierCurveTo(coord[8], coord[9], coord[10], coord[11], coord[0], coord[1]);
    context.closePath();
    context.stroke(); 
    context.lineWidth = 3;
    context.strokeStyle = strokeThickness;
    context.fillStyle = "#9b2d30";
    context.fill();
    context.stroke();
 */
/* 

    drawMouth(mouthCoord)



    function drawMouth(mouthCoord){
        context.beginPath();
        context.moveTo(mouthCoord.upperLipX0, mouthCoord.upperLipY0);
        context.bezierCurveTo(mouthCoord.upperLipX1, mouthCoord.upperLipY1, mouthCoord.upperLipX2, mouthCoord.upperLipY2, mouthCoord.upperLipX3, mouthCoord.upperLipY3);
        context.bezierCurveTo(mouthCoord.lowerLipX1, mouthCoord.lowerLipY1, mouthCoord.lowerLipX2, mouthCoord.lowerLipY2, mouthCoord.upperLipX0, mouthCoord.upperLipY0);
        context.closePath();
        context.stroke(); 
        context.lineWidth = 3;
        context.strokeStyle = strokeThickness;
        context.fillStyle = "#9b2d30";
        context.fill();
        context.stroke();
    }




    document.querySelector('.pupil').oninput = function() {
        
        pupil=document.querySelector('.pupil').value;
        pupil=pupil/5+3;
        drawPupil(pupilPositionX1,pupilPositionY1,pupil,pointWidth)
       };
    



 */

/*        let upperLipX0=pupilPositionX1-wMouth+20;
       let upperLipY0=nosePositionY+20*pointHeight;
       let upperLipX1=pupilPositionX1+10*pointWidth;
       let upperLipY1=upperLipY0+2*pointHeight;
       let upperLipX2=pupilPositionX1+20*pointWidth;
       let upperLipY2=upperLipY0+2*pointHeight;
       let upperLipX3=pupilPositionX2+wMouth;
       let upperLipY3=nosePositionY+20*pointHeight; 
       
       
       let lowerLipX1=pupilPositionX1+25*pointWidth;
       let lowerLipY1=hMouth*pointHeight;
       let lowerLipX2=pupilPositionX1+5*pointWidth;
       let lowerLipY2=hMouth*pointHeight;
 */





/////////////////////////////////////////////////////////////////nose


drawNose(lNose,strokeThickness,faceColor,nosePositionX, nosePositionY,pointWidth,pointHeight,lineWidThthick);


document.querySelector('.nose').oninput = function() {
    clearCanvas(context,canvas)
    draw()
    lNose=Number (document.querySelector('.nose').value);

    /* drawNose(lNose,strokeThickness,faceColor,nosePositionX, nosePositionY,pointWidth,pointHeight) */
};

    //////////////////////////////////////////////отрисовка второго глаза

    drawEyes(eyesPositionX2,eyesPositionY2,eyes,pointWidth,lineWidThthick)

/*     document.querySelector('.eyes').oninput = function() {
        
         eyes=document.querySelector('.eyes').value
         drawEyes(eyesPositionX2,eyesPositionY2,eyes,pointWidth)
       };

 */
    



    ///////////////////////////////////////////////отрисовка второго зрачка


    drawPupil(pupilPositionX2,pupilPositionY2,pupil,pointWidth,lineWidThthick)








        ///////////////////////////////////////////////отрисовка шеи


        /* drawNeck(pupilPositionX2,pupilPositionY2,pupil,pointWidth,lineWidThthick) */

    }
////////////////