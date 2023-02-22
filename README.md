# SC2_S9





mouseEvent
trial= actual trial
start.addEventListener('click,startTrial(trial))

function startTrial(trial){
textColor=selectTextColor()
trial.TextColor=textColor
word=""
if(trial.isCongruent) word=a
else word=b
trial.starttime=time
stimulus.innerhtml=word
stimulus.style.color=textColor
buttons.addEventListener('click',answerSelected)
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

