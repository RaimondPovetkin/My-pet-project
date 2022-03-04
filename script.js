



    

//считывание параметров с UI
/* document.querySelector('.H582812').addEventListener('click', ()=>{

})

document.querySelector('.Hf4cd8a').addEventListener('click', ()=>{

}) */



    const lineWidth = document.querySelector('.lineWidth'); //получаем поле name
    const heightOfTeeth = document.querySelector('.teeth'); //получаем поле name
    const pupilSize = document.querySelector('.pupil'); //получаем поле name
    const eyesSize = document.querySelector('.eyes'); //получаем поле name
    const heightOfMouth = document.querySelector('.mouthH'); //получаем поле name
    const widthOfMouth = document.querySelector('.mouthW'); //получаем поле name
    const lengthOfNose = document.querySelector('.nose'); //получаем поле name
    const widthOfForehead = document.querySelector('.face'); //получаем поле name

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
    /* hMouth=hMouth/210+0.035; */

    let wMouth= Number (data.widthOfMouth);

    let lNose= Number (data.lengthOfNose);
    /* lNose=260-lNose; */

    let wForehead= Number (data.widthOfForehead);



    function findPointWidth(Width){
        return Width/470
    }
    function findPointHeight(Height){
        return Height/600
    }


function findPoint(x1,y1,x2,y2,t){

    let coord=[];
    let lx=Math.abs(x1-x2);//длинна по x
    let ly=Math.abs(y1-y2);// длинна по y
    /* debugger */
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



let canvasWidth=470;
let canvasHeight=600;






const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");


    //логика клика на картинку

canvas.onclick = function() {
    var dataURL = canvas.toDataURL("image/jpeg");

    var link = document.createElement("a");

    document.body.appendChild(link); // Firefox requires the link to be in the body :(

    link.href = dataURL;

    link.download = "my-image-name.jpg";
  
    link.click();
    document.body.removeChild(link);
  };
  //////////////////////////////////
  //маленький канвас лица

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


    let drawFaceFu=drawFace;


    /* let faceBlockWidth=canvasWidth/4;
    let faceBlockHeight=canvasHeight/4;
    
    
    
    let faceBlockX1=Math.round(canvasWidth/2-faceBlockWidth/2);
    let faceBlockY1=hairBlockHeight/2-faceBlockHeight/2;
    
    let faceBlockX2=faceBlockX1;
    let faceBlockY2=Math.round(faceBlockY1+faceBlockHeight);
    
    let faceBlockX3=Math.round(canvasWidth/2+faceBlockWidth/2);
    let faceBlockY3=faceBlockY2;
    
    let faceBlockX4=faceBlockX3;
    let faceBlockY4=faceBlockY1; */
    

       

///////////////////////////////////
    

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

// относительные еденицы для адаптивного сжатия и растяжения
    /* let pointWidth=canvasWidth/470; 
    let pointHeight=canvasHeight/600; */

    let pointWidth=findPointWidth(canvasWidth);
    let pointHeight=findPointHeight(canvasHeight);

    let paddingTop =50;


    let strokeThickness = '#4d4d4d';
    let faceColor = "rgb(244, 205, 138)";
    let mouthColor = "#9b2d30";
    let rss ="canvas_face1";
    let versionHair="gray"



    drawFace("canvas_face1",0,0,0,canvasFaceHeight,canvasFaceWidth,canvasFaceHeight,canvasFaceWidth,0,pointWidth,wForehead,pointHeight,strokeThickness,faceColor,lineWidThthick,contextFace)

    drawFace("canvas_face2",0,0,0,canvasFaceHeight,canvasFaceWidth,canvasFaceHeight,canvasFaceWidth,0,pointWidth,wForehead,pointHeight,strokeThickness,faceColor,lineWidThthick,contextFace2)

    drawFace("canvas_face3",0,0,0,canvasFaceHeight,canvasFaceWidth,canvasFaceHeight,canvasFaceWidth,0,pointWidth,wForehead,pointHeight,strokeThickness,faceColor,lineWidThthick,contextFace3)

/*     drawFace1(0,0,0,canvasFaceHeight,canvasFaceWidth,canvasFaceHeight,canvasFaceWidth,0,pointWidth,wForehead,pointHeight,strokeThickness,faceColor,lineWidThthick,contextFace2)

    drawFace2(0,0,0,canvasFaceHeight,canvasFaceWidth,canvasFaceHeight,canvasFaceWidth,0,pointWidth,wForehead,pointHeight,strokeThickness,faceColor,lineWidThthick,contextFace3) */



draw()





function clearCanvas(contextDraw,canvasDraw){
    contextDraw.clearRect(0,0, canvasDraw.width, canvasDraw.height);
}




function draw(){



let radioFace = document.getElementsByName('colorFace');

for(let i=0;i<radioFace.length;i++){
    radioFace[i].onchange=function(){
        faceColor =this.value
        clearCanvas(context,canvas)
        draw()
    };
}

    


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



/*     document.querySelector('.faceColor').addEventListener('click', ()=>{
        clearCanvas()
        draw()
        let allColors = document.querySelectorAll('input.custom-radio');
        for(let i=0;i<allColors.length;i++){
            if(allColors[i].checked){
                let result = allColors[i].className.substr(allColors[i].className.indexOf(" ") + 1);
                faceColor =(result[0]="#"+ result.slice(1))
            }
        }
    })
 */



    




//волосы

let hairBlockWidth=canvasWidth/3;
let hairBlockHeight=canvasHeight/3;



let hairBlockX1=Math.round(canvasWidth/2-hairBlockWidth/2);
let hairBlockY1=paddingTop;

let hairBlockX2=hairBlockX1;
let hairBlockY2=Math.round(hairBlockY1+hairBlockHeight);

let hairBlockX3=Math.round(canvasWidth/2+hairBlockWidth/2);
let hairBlockY3=hairBlockY2;

let hairBlockX4=hairBlockX3;
let hairBlockY4=hairBlockY1;


drowHair(versionHair,hairBlockX1,hairBlockY1,hairBlockX2,hairBlockY2
    ,hairBlockX3,hairBlockY3,hairBlockX4,hairBlockY4,strokeThickness,faceColor,lineWidThthick,context)












////////////////////////////////////////обводка

document.querySelector('.lineWidth').oninput = function() {
    lineWidThthick=Number (document.querySelector('.lineWidth').value);
    clearCanvas(context,canvas)
    draw()
   };









    /////////////////////////////////////////////////////////////////face

    let face={

    }

    let faceBlockWidth=canvasWidth/4;
    let faceBlockHeight=canvasHeight/4;
    
    
    
    let faceBlockX1=Math.round(canvasWidth/2-faceBlockWidth/2);
    let faceBlockY1=paddingTop+hairBlockHeight/2-faceBlockHeight/2;
    
    let faceBlockX2=faceBlockX1;
    let faceBlockY2=Math.round(faceBlockY1+faceBlockHeight);
    
    let faceBlockX3=Math.round(canvasWidth/2+faceBlockWidth/2);
    let faceBlockY3=faceBlockY2;
    
    let faceBlockX4=faceBlockX3;
    let faceBlockY4=faceBlockY1;



    let radioFaceShape = document.getElementsByClassName("canvas_face");
for(let i=0;i<radioFaceShape.length;i++){
        radioFaceShape[i].onclick=function(){
        rss=radioFaceShape[i].id
        clearCanvas(context,canvas)
        draw()
        /*
        drawFaceFu= radioFaceShape[i].id */
    };
}

/*
 if(rss=="canvas_face1"){
    drawFace(faceBlockX1,faceBlockY1,faceBlockX2,faceBlockY2,faceBlockX3,faceBlockY3,faceBlockX4,faceBlockY4,pointWidth,face,pointHeight,strokeThickness,faceColor,lineWidThthick,context) 
 }
 else if(rss=="canvas_face2"){
    drawFace1(faceBlockX1,faceBlockY1,faceBlockX2,faceBlockY2,faceBlockX3,faceBlockY3,faceBlockX4,faceBlockY4,pointWidth,face,pointHeight,strokeThickness,faceColor,lineWidThthick,context) 
 }
 else if(rss=="canvas_face3"){
    drawFace2(faceBlockX1,faceBlockY1,faceBlockX2,faceBlockY2,faceBlockX3,faceBlockY3,faceBlockX4,faceBlockY4,pointWidth,face,pointHeight,strokeThickness,faceColor,lineWidThthick,context) 
} */
    drawFace(rss,faceBlockX1,faceBlockY1,faceBlockX2,faceBlockY2,faceBlockX3,faceBlockY3,faceBlockX4,faceBlockY4,pointWidth,wForehead,pointHeight,strokeThickness,faceColor,lineWidThthick,context)
    
    document.querySelector('.face').oninput = function() {
        clearCanvas(context,canvas)
        draw()
        wForehead=Number(document.querySelector('.face').value);
         drawFace(faceBlockX1,faceBlockY1,faceBlockX2,faceBlockY2,faceBlockX3,faceBlockY3,faceBlockX4,faceBlockY4,pointWidth,face,pointHeight,strokeThickness,faceColor,lineWidThthick,context) 
       };

       
    
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