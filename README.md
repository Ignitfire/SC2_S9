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


instructions à respecter !!

They then completed a short questionnaire regarding
their demographic details and filled out Annett’s [28] Handedness Inventory
->> voir si il faut faire le meme questionnaire

red or green, blue or yellow 
->> pour les associations congruentes/non congruentes -> construction du dictionnaire de mots


g. A trial ended once they clicked one of the response boxes.
When participants clicked the wrong box, a red ‘X’ appeared centrally on the display for 2s,
after which they could start the next trial.
->> bloquer l'execution pendant 2s lorsqu'il se trompe et afficher un gros X rouge



The inter trial interval was 500ms, meaning that following their response participants had to wait 500ms before the start button appeared again to
start the next trial. 
->> donc le bouton start disparait quand il clique et réapparait 500ms apres avoir choisi la couleur


When participants initiated the mouse movement later than 500ms after
stimulus presentation, the trial was followed by a message encouraging them to start moving earlier on subsequent trials. This was done to ensure that participants did not strategically wait to initiate their movement until after selection of the correct response was fully completed
->> si ils attendent avant de bouger (+ de 500ms), un message est affiché après l'essai  pour leur dire de ne pas attendre et de bouger directement


These random blocks involved the presentation of 160 trials, with the restrictions that there was no direct repetition of the stimulus color
(and thus response location) and that each stimulus was presented equally often. 
->> chaque mot doit etre representé de maniere egalle dans chaque block random

