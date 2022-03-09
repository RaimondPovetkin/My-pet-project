const lineWidth = document.querySelector('.lineWidth')
const heightOfTeeth = document.querySelector('.teeth')
const pupilSize = document.querySelector('.pupil')
const eyesSize = document.querySelector('.eyes')
const heightOfMouth = document.querySelector('.mouthH')
const widthOfMouth = document.querySelector('.mouthW')
const lengthOfNose = document.querySelector('.nose')
const widthOfForehead = document.querySelector('.face')

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

let lineWidThthick=Number (data.lineWidThthick)

let tTeeth= Number (data.heightOfTeeth)
tTeeth=tTeeth/210+0.035

let pupil= Number (data.pupilSize)
pupil=pupil/5+3

let eyes=Number (data.eyesSize)

let hMouth= Number (data.heightOfMouth)

let wMouth= Number (data.widthOfMouth)

let lNose= Number (data.lengthOfNose)

let wForehead= Number (data.widthOfForehead)


/* коэффициенты для адаптивной отрисовки */
function findPointWidth(Width){
    return Width/470
}
function findPointHeight(Height){
    return Height/600
}


/* функция нахождения точек для уровневой заливки */
function findPoint(x1,y1,x2,y2,t){

    let coord=[]
    let lx=Math.abs(x1-x2)//длинна по x
    let ly=Math.abs(y1-y2)// длинна по y
    
    if(x1<=x2 && y1<=y2){
        coord[0]=lx*t+x1
        coord[1]=ly*t+y1
        return coord
    }
    if(x1>x2 && y1>y2){
        coord[0]=x1-lx*t
        coord[1]=y1-ly*t
        return coord
    }
    if(x1<x2 && y1<y2){
        coord[0]=lx*t+x1
        coord[1]=y1-ly*t
        return coord
    }
    if(x1>x2 && y1<=y2){
        coord[0]=x1-lx*t
        coord[1]=ly*t+y1
        return coord
    }
}


/* оптимальная ширина и длина 470/600 */
let canvasWidth=470
let canvasHeight=600


/* создание канваса */
const canvas = document.querySelector("#canvas")
const context = canvas.getContext("2d")


/* логика клика по картинке */
canvas.onclick = function() {
    var dataURL = canvas.toDataURL("image/jpeg")
    var link = document.createElement("a")
    document.body.appendChild(link) // Firefox requires the link to be in the body :(
    link.href = dataURL
    link.download = "my-image-name.jpg"
    link.click()
    document.body.removeChild(link)
  };


/* маленькие канвасы лица */
const canvasFace = document.querySelector("#canvas_face1")
const contextFace = canvasFace.getContext("2d")

const canvasFace2 = document.querySelector("#canvas_face2")
const contextFace2 = canvasFace2.getContext("2d")

const canvasFace3 = document.querySelector("#canvas_face3")
const contextFace3 = canvasFace3.getContext("2d")

let canvasFaceWidth =118
let canvasFaceHeight =150

canvasFace.width = canvasFaceWidth
canvasFace.height = canvasFaceHeight

canvasFace2.width = canvasFaceWidth
canvasFace2.height = canvasFaceHeight

canvasFace3.width = canvasFaceWidth
canvasFace3.height = canvasFaceHeight


/* относительные еденицы для адаптивного сжатия и растяжения */
let pointWidth=findPointWidth(canvasWidth)
let pointHeight=findPointHeight(canvasHeight)


/* первоначальные параметры отрисовки */
let paddingTop =50
canvas.width = canvasWidth
canvas.height = canvasHeight

let strokeThickness = '#4d4d4d'
let faceColor = "rgb(244, 205, 138)"
let mouthColor = "#9b2d30"
let idCanvasFace ="canvas_face1"
let versionHair="gray"


/* отрисовка маленьких лиц */
let faceMini={
    pH:pointHeight,
    pW:pointWidth,
    lineWidThthick:lineWidThthick,
    strokeThickness:strokeThickness,
    wForehead:wForehead,
    color:faceColor,
    faceBlockX1:0,
    faceBlockY1:0,
    faceBlockX2:0,
    faceBlockY2:canvasFaceHeight,
    faceBlockX3:canvasFaceWidth,
    faceBlockY3:canvasFaceHeight,
    faceBlockX4:canvasFaceWidth,
    faceBlockY4:0,
}

faceMini.version="canvas_face1"
faceMini.context=contextFace
drawFace(faceMini)

faceMini.version="canvas_face2"
faceMini.context=contextFace2
drawFace(faceMini)

faceMini.version="canvas_face3"
faceMini.context=contextFace3
drawFace(faceMini)


/* функция очистки экрана */
function clearCanvas(contextDraw,canvasDraw){
    contextDraw.clearRect(0,0, canvasDraw.width, canvasDraw.height)
}


/* непосредственная отрисовка */
draw()

function draw(){


/* инициализация цвета лица */
let radioFace = document.getElementsByName('colorFace')
for(let item of radioFace){
    item.onchange=function(){
        faceColor =this.value
        clearCanvas(context,canvas)
        draw()
    }
}
    
/* инициализация цвета обводки */
let radioStroke = document.getElementsByName('colorStroke')
for(let item of radioStroke){
    item.onchange=function(){
        strokeThickness =this.value
        if(strokeThickness==="undefined"){
            strokeThickness=undefined
        }
        clearCanvas(context,canvas)
        draw()
    }
}


/* инициализация формы лица */
let radioFaceShape = document.getElementsByClassName("canvas_face")
for(let item of radioFaceShape){
    item.onclick=function(){
        idCanvasFace=item.id
        clearCanvas(context,canvas)
        draw()
    }
}


/* инициализация толщины линии */
document.querySelector('.lineWidth').oninput = function() {
    lineWidThthick=Number (document.querySelector('.lineWidth').value)
    clearCanvas(context,canvas)
    draw()
}


/* инициализация ширины лица */
document.querySelector('.face').oninput = function() {
    wForehead=Number(document.querySelector('.face').value)
    clearCanvas(context,canvas)
    draw()
}


/* инициализация зрачков */
document.querySelector('.pupil').oninput = function() {
    clearCanvas(context,canvas)
    draw()
    pupil=document.querySelector('.pupil').value
    pupil=pupil/5+3
}


/* инициализация глаз */
document.querySelector('.eyes').oninput = function() {
    clearCanvas(context,canvas)
    draw()
    eyes=document.querySelector('.eyes').value
}


/*инициализация высоты рта */
document.querySelector('.mouthH').oninput = function() {
    clearCanvas(context,canvas)
    draw()
    hMouth=Number (document.querySelector('.mouthH').value)
    wMouth=Number (document.querySelector('.mouthW').value)
}


/*инициализация ширины рта */
document.querySelector('.mouthW').oninput = function() {
    clearCanvas(context,canvas)
    draw()
    hMouth=Number (document.querySelector('.mouthH').value)
    wMouth=Number (document.querySelector('.mouthW').value)
}


/*инициализация высоты зубов */
document.querySelector('.teeth').oninput = function() {
    clearCanvas(context,canvas)
    draw()
    tTeeth=Number (document.querySelector('.teeth').value)
    tTeeth=tTeeth/210+0.035
}


/*инициализация длинны носа */
document.querySelector('.nose').oninput = function() {
    clearCanvas(context,canvas)
    draw()
    lNose=Number (document.querySelector('.nose').value)
}


/* волосы */
let hair={
    context:context,
    pH:pointHeight,
    pW:pointWidth,
    lineWidThthick:lineWidThthick,
    strokeThickness:strokeThickness,

    hairBlockWidth:canvasWidth/3,
    hairBlockHeight:canvasHeight/3
}

hair.hairBlockX1=Math.round(canvasWidth/2-hair.hairBlockWidth/2)
hair.hairBlockY1=paddingTop
hair.hairBlockX2=hair.hairBlockX1
hair.hairBlockY2=Math.round(paddingTop+hair.hairBlockHeight)
hair.hairBlockX3=Math.round(canvasWidth/2+hair.hairBlockWidth/2)
hair.hairBlockY3=hair.hairBlockY2
hair.hairBlockX4=hair.hairBlockX3
hair.hairBlockY4=paddingTop

drowHair(hair)


/* лицо */
let face={
    version:idCanvasFace,
    context:context,
    pH:pointHeight,
    pW:pointWidth,
    lineWidThthick:lineWidThthick,
    strokeThickness:strokeThickness,
    wForehead:wForehead,
    color:faceColor,

    faceBlockWidth:canvasWidth/4,
    faceBlockHeight:canvasHeight/4
}

face.faceBlockX1=Math.round(canvasWidth/2-face.faceBlockWidth/2)
face.faceBlockY1=paddingTop+hair.hairBlockHeight/2-face.faceBlockHeight/2
face.faceBlockX2=face.faceBlockX1
face.faceBlockY2=Math.round(face.faceBlockY1+face.faceBlockHeight)
face.faceBlockX3=Math.round(canvasWidth/2+face.faceBlockWidth/2)
face.faceBlockY3=face.faceBlockY2
face.faceBlockX4=face.faceBlockX3
face.faceBlockY4=face.faceBlockY1

drawFace(face)
    

/* глаза */
let eye={
    context:context,
    eyes:eyes,
    pW:pointWidth,
    lineWidThthick:lineWidThthick,
    strokeThickness:strokeThickness
}

eye.eyesPositionX1=face.faceBlockX1+(face.faceBlockX1+(face.faceBlockX3-face.faceBlockX1)/2-face.faceBlockX1)/2
eye.eyesPositionY1=face.faceBlockY1+(face.faceBlockY2-face.faceBlockY1)/2
eye.eyesPositionX2=face.faceBlockX1+(face.faceBlockX3-face.faceBlockX1)/2
eye.eyesPositionY2=eye.eyesPositionY1
    
drawEyes(eye)

    
/* зрачок */
let pup={
    context:context,
    pW:pointWidth,
    lineWidThthick:lineWidThthick,
    pupil:pupil,
    strokeThickness:strokeThickness
}
pup.position1=eye.eyesPositionX1-5*pointWidth
pup.position2=eye.eyesPositionY1

let pupilPositionX2=eye.eyesPositionX2-5*pointWidth

drawPupil(pup)


/* объект носа */
let nose={
    context:context,
    lNose:lNose,
    pH:pointHeight,
    pW:pointWidth,
    lineWidThthick:lineWidThthick,
    strokeThickness:strokeThickness,
    color:faceColor,
}

nose.nosePositionX=(eye.eyesPositionX1+eye.eyesPositionX2)/2// между глазами
nose.nosePositionY=eye.eyesPositionY1+10*pointHeight


/* рот */
let mouth={
    context:context,
    hMouth:hMouth,
    wMouth:wMouth,
    strokeThickness:strokeThickness,
    mouthColor:mouthColor,
    pH:pointHeight,
    pW:pointWidth,
    t:tTeeth,
    lineWidThthick:lineWidThthick
}
mouth.leftPoint=pup.position1
mouth.rightPoint=pupilPositionX2
mouth.nosePositionY=nose.nosePositionY

drawMouth(mouth)

drawNose(nose)


/* отрисовка второго глаза */
eye.eyesPositionX1=face.faceBlockX1+(face.faceBlockX3-face.faceBlockX1)/2
eye.eyesPositionY1=eye.eyesPositionY1

drawEyes(eye)


/* отрисовка второго зрачка */
pup.position1=eye.eyesPositionX2-5*pointWidth

drawPupil(pup)

}