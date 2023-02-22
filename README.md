# SC2_S9



function mousemove(e){
position=[e.pageX,e.pageY]
trial.mousePath.push(position)
}

mouseEvent
trial= actual trial
start.addEventListener('click,startTrial(trial))

function startTrial(trial){
textColor=selectTextColor()
trial.TextColor=textColor
buttons.addEventListener('click',answerSelected)
trial.starttime=time
addEventLisetener('mousemove',mousemove)
// potentiellement attente maximum de 10s pour pas que le systeme enregistre eternellement en cas de bug/d'arret
}

function answerSelected(e){
    trial.endtime=time
    controller.abort(mouvemove)
    trial.latency=endtime-starttime //arrondi ms
    trial.selectedColor=e.color
    go to next Trial
}

