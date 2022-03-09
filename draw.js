function drawEyes(eye){
    eye.context.beginPath()
    eye.context.arc(eye.eyesPositionX1, eye.eyesPositionY1, eye.eyes*eye.pW, 0, Math.PI*2)
    eye.context.lineWidth = eye.lineWidThthick
    eye.context.fillStyle = "white"
    eye.context.strokeStyle = eye.strokeThickness
    eye.context.fill()
    if(eye.strokeThickness!=undefined)
    eye.context.stroke()
}

function drawPupil(pup){
    pup.context.beginPath()
    pup.context.arc(pup.position1, pup.position2, pup.pupil*pup.pW, 0, Math.PI*2)
    pup.context.lineWidth = pup.lineWidThthick
    pup.context.strokeStyle = "black"
    pup.context.fillStyle = "black"
    pup.context.fill()
    if(pup.strokeThickness!=undefined)
    pup.context.stroke()
}

function drowHair(hair){
    hair.context.beginPath()
    hair.context.moveTo(hair.hairBlockX1+20*hair.pW, hair.hairBlockY1+30*hair.pH)
    hair.context.bezierCurveTo(
        hair.hairBlockX1, hair.hairBlockY1+30*hair.pH, 
        hair.hairBlockX1-50*hair.pW, hair.hairBlockY1+50*hair.pH, 
        hair.hairBlockX1+100*hair.pW, hair.hairBlockY1+150*hair.pH)
    hair.context.bezierCurveTo(
        hair.hairBlockX2+190*hair.pW, hair.hairBlockY2-150*hair.pH, 
        hair.hairBlockX2+150*hair.pW, hair.hairBlockY2-200*hair.pH, 
        hair.hairBlockX2+130*hair.pW, hair.hairBlockY2-170*hair.pH)
    hair.context.bezierCurveTo(
        hair.hairBlockX3, hair.hairBlockY3-210*hair.pH, 
        hair.hairBlockX3-50*hair.pW, hair.hairBlockY3-210*hair.pH, 
        hair.hairBlockX3-50*hair.pW, hair.hairBlockY3-190*hair.pH)
    hair.context.bezierCurveTo(
        hair.hairBlockX4-66*hair.pW, hair.hairBlockY4-10*hair.pH, 
        hair.hairBlockX4-136*hair.pW, hair.hairBlockY4-10*hair.pH, 
        hair.hairBlockX4-136*hair.pW, hair.hairBlockY4+30*hair.pH)
    hair.context.closePath()
    hair.context.strokeStyle = hair.strokeThickness
    hair.context.lineWidth = hair.lineWidThthick
    hair.context.fillStyle = "grey"
    hair.context.fill()
    if(hair.strokeThickness!=undefined)
        hair.context.stroke()
}

function drawFace(face){
    switch(face.version) {
        case "canvas_face1":{
            face.context.beginPath()
            face.context.moveTo(
                face.faceBlockX1+45*face.pW-face.wForehead*face.pW, face.faceBlockY1+40*face.pH
                )
            face.context.bezierCurveTo(
                face.faceBlockX1+30*face.pW+((40-face.wForehead)/2*face.pW), face.faceBlockY1+10*face.pH,
                face.faceBlockX1+90*face.pW-((40-face.wForehead)/2*face.pW), face.faceBlockY1+10*face.pH,
                face.faceBlockX1+75*face.pW+face.wForehead*face.pW, face.faceBlockY1+50*face.pH
                )
            face.context.lineTo(
                face.faceBlockX2+70*face.pW+face.wForehead*face.pW, face.faceBlockY2-50*face.pH
                )
            face.context.bezierCurveTo(
                face.faceBlockX3-50*face.pW, face.faceBlockY3+20*face.pH, 
                face.faceBlockX3-110*face.pW, face.faceBlockY3+20*face.pH, 
                face.faceBlockX1+45*face.pW-face.wForehead*face.pW, face.faceBlockY1+40*face.pH
                )
            face.context.closePath()
            face.context.lineWidth = face.lineWidThthick
            face.context.strokeStyle = face.strokeThickness
            face.context.fillStyle = face.color
            face.context.fill()
            if(face.strokeThickness!=undefined)
                face.context.stroke()
            break
        }
        case "canvas_face2":{
            face.context.beginPath()
            face.context.moveTo(
                face.faceBlockX1+35*face.pW-face.wForehead*face.pW,face.faceBlockY1+80*face.pH
                )
            face.context.bezierCurveTo(
                face.faceBlockX1-1*face.pW+((40-face.wForehead)/2*face.pW), face.faceBlockY1+10*face.pH,
                face.faceBlockX1+100*face.pW-((40-face.wForehead)/2*face.pW), face.faceBlockY1+10*face.pH,
                face.faceBlockX1+65*face.pW+face.wForehead*face.pW, face.faceBlockY1+80*face.pH
                )
            face.context.bezierCurveTo(
                face.faceBlockX1+100*face.pW-((40-face.wForehead)/2*face.pW), face.faceBlockY3+20*face.pH, 
                face.faceBlockX1-1*face.pW+((40-face.wForehead)/2*face.pW), face.faceBlockY3+20*face.pH, 
                face.faceBlockX1+35*face.pW-face.wForehead*face.pW, face.faceBlockY1+80*face.pH
                )
            face.context.closePath()
            face.context.lineWidth = face.lineWidThthick
            face.context.strokeStyle = face.strokeThickness
            face.context.fillStyle = face.color
            face.context.fill()
                if(face.strokeThickness!=undefined)
                face.context.stroke()
            break
        }
        case "canvas_face3":{
            face.context.beginPath()
            face.context.moveTo(
                face.faceBlockX1+45*face.pW-face.wForehead*face.pW, face.faceBlockY1+80*face.pH
                )
            face.context.bezierCurveTo(
                face.faceBlockX1-20*face.pW+((40-face.wForehead)/2*face.pW), face.faceBlockY1+10*face.pH,
                face.faceBlockX1+80*face.pW-((40-face.wForehead)/2*face.pW), face.faceBlockY1+10*face.pH,
                face.faceBlockX1+65*face.pW+face.wForehead*face.pW, face.faceBlockY1+80*face.pH)
            face.context.bezierCurveTo(
                face.faceBlockX1+80*face.pW-((40-face.wForehead)/2*face.pW), face.faceBlockY3+20*face.pH, 
                face.faceBlockX1-20*face.pW+((40-face.wForehead)/2*face.pW), face.faceBlockY3+20*face.pH, 
                face.faceBlockX1+45*face.pW-face.wForehead*face.pW, face.faceBlockY1+80*face.pH)
        
            face.context.closePath()
            face.context.lineWidth = face.lineWidThthick
            face.context.strokeStyle = face.strokeThickness
            face.context.fillStyle = face.color
            face.context.fill()
                if(face.strokeThickness!=undefined)
                face.context.stroke()
            break
        }
    }
}

function drawMouth(mouth){
    let upperLipX0=mouth.leftPoint-mouth.wMouth
    let upperLipY0=mouth.nosePositionY+20*mouth.pH
    let upperLipX1=mouth.leftPoint+10*mouth.pW
    let upperLipY1=upperLipY0+2*mouth.pH
    let upperLipX2=mouth.leftPoint+20*mouth.pW
    let upperLipY2=upperLipY0+2*mouth.pH
    let upperLipX3=mouth.rightPoint+mouth.wMouth
    let upperLipY3=mouth.nosePositionY+20*mouth.pH;
    
    let lowerLipX1=mouth.leftPoint+25*mouth.pW
    let lowerLipY1=upperLipY2+hMouth*mouth.pH
    let lowerLipX2=mouth.leftPoint+5*mouth.pW
    let lowerLipY2=upperLipY1+mouth.hMouth*mouth.pH

    mouth.context.beginPath()
    mouth.context.moveTo(upperLipX0, upperLipY0)
    mouth.context.bezierCurveTo(upperLipX1, upperLipY1, upperLipX2, upperLipY2, upperLipX3, upperLipY3)
    mouth.context.bezierCurveTo(lowerLipX1, lowerLipY1, lowerLipX2, lowerLipY2, upperLipX0, upperLipY0)
    mouth.context.closePath()
    mouth.context.lineWidth = mouth.lineWidThthick
    mouth.context.strokeStyle = mouth.strokeThickness
    mouth.context.fillStyle = mouth.mouthColor
    mouth.context.fill()
    if(mouth.strokeThickness!=undefined)
    mouth.context.stroke()

/***************ЗУБЫ***************** */
/////////////////////////поиск точек на нижней губе
    let beginningOfTeethX=Math.pow((1-mouth.t),3)*upperLipX3+3*Math.pow((1-mouth.t),2)*mouth.t*lowerLipX1+3*(1-mouth.t)*Math.pow(mouth.t,2)*lowerLipX2+Math.pow(mouth.t,3)*upperLipX0

    let beginningOfTeethY=Math.pow((1-mouth.t),3)*upperLipY3+3*Math.pow((1-mouth.t),2)*mouth.t*lowerLipY1+3*(1-mouth.t)*Math.pow(mouth.t,2)*lowerLipY2+Math.pow(mouth.t,3)*upperLipY0


    let endOfTeethX=Math.pow((1-mouth.t),3)*upperLipX0+3*Math.pow((1-mouth.t),2)*mouth.t*lowerLipX2+3*(1-mouth.t)*Math.pow(mouth.t,2)*lowerLipX1+Math.pow(mouth.t,3)*upperLipX3

    let endOfTeethY=Math.pow((1-mouth.t),3)*upperLipY0+3*Math.pow((1-mouth.t),2)*mouth.t*lowerLipY2+3*(1-mouth.t)*Math.pow(mouth.t,2)*lowerLipY1+Math.pow(mouth.t,3)*upperLipY3

////////////////отрисовка верхней губы
    mouth.context.beginPath()
    mouth.context.moveTo(upperLipX0, upperLipY0)
    mouth.context.bezierCurveTo(upperLipX1, upperLipY1, upperLipX2, upperLipY2, upperLipX3, upperLipY3)
    mouth.context.lineWidth = 1
    mouth.context.strokeStyle = 'black'

////////////////определение двух промежуточных точек для построения правой кривой
    var values = findPoint(lowerLipX1,lowerLipY1,lowerLipX2,lowerLipY2,mouth.t)
    let lowerLipX21=values[0]
    let lowerLipY21=values[1]

    var values = findPoint(upperLipX3,upperLipY3,lowerLipX1,lowerLipY1,mouth.t)
    let teethLowerLipX1=values[0]
    let teethLowerLipY1=values[1]

    var values = findPoint(teethLowerLipX1,teethLowerLipY1,lowerLipX21,lowerLipY21,mouth.t)
    let teethLowerLipX2=values[0]
    let teethLowerLipY2=values[1]

////////////////отрисовка правой кривой
    mouth.context.bezierCurveTo(teethLowerLipX1, teethLowerLipY1, teethLowerLipX2, teethLowerLipY2, beginningOfTeethX, beginningOfTeethY)
    mouth.context.strokeStyle = 'black'

////////////////отрисовка нижней части зубов
    mouth.context.lineTo(endOfTeethX, endOfTeethY)
    mouth.context.strokeStyle = 'black'

////////////////определение двух промежуточных точек для построения левой кривой
    var values = findPoint(lowerLipX2,lowerLipY2,lowerLipX1,lowerLipY1,mouth.t)
    let lowerLipX21L=values[0]
    let lowerLipY21L=values[1]

    var values = findPoint(upperLipX0,upperLipY0,lowerLipX2,lowerLipY2,mouth.t)
    let teethLowerLipX1L=values[0]
    let teethLowerLipY1L=values[1]

    var values = findPoint(teethLowerLipX1L,teethLowerLipY1L,lowerLipX21L,lowerLipY21L,mouth.t)
    let teethLowerLipX2L=values[0]
    let teethLowerLipY2L=values[1]

    mouth.context.bezierCurveTo(teethLowerLipX2L, teethLowerLipY2L, teethLowerLipX1L, teethLowerLipY1L, upperLipX0, upperLipY0)
    mouth.context.lineWidth = 0
    mouth.context.strokeStyle = 'black'
    mouth.context.closePath()
    mouth.context.fillStyle = "white"
    mouth.context.fill()

//////////////////////////////повторная обводка рта
    mouth.context.beginPath()
    mouth.context.moveTo(upperLipX0, upperLipY0)
    mouth.context.bezierCurveTo(upperLipX1, upperLipY1, upperLipX2, upperLipY2, upperLipX3, upperLipY3)
    mouth.context.bezierCurveTo(lowerLipX1, lowerLipY1, lowerLipX2, lowerLipY2, upperLipX0, upperLipY0)
    mouth.context.closePath()
    mouth.context.lineWidth = mouth.lineWidThthick
    mouth.context.strokeStyle = mouth.strokeThickness
    if(strokeThickness!=undefined)
    mouth.context.stroke()
}


function drawNose(nose){
    context.beginPath()
    context.moveTo(nose.nosePositionX, nose.nosePositionY)
    context.bezierCurveTo(
        nose.nosePositionX-20*nose.pW-nose.lNose*nose.pW, nose.nosePositionY-1*nose.pH, 
        nose.nosePositionX-40*nose.pW-(nose.lNose/2*nose.pW), nose.nosePositionY+20*nose.pH, 
        nose.nosePositionX-30*nose.pW-nose.lNose/1.4*nose.pW, nose.nosePositionY+40*nose.pH)

    context.lineTo(nose.nosePositionX, nose.nosePositionY+15*nose.pH)
    context.lineWidth = nose.lineWidThthick
    context.strokeStyle = nose.strokeThickness
    context.fillStyle = nose.color
    context.fill()
    if(nose.strokeThickness!=undefined)
    context.stroke()

}