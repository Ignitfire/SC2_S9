export const basePositionning = function(){
    // placer la frame au centre de l'écran
    let frame=document.querySelector("#frame")
    let frameX=(window.innerHeight-550)/2
    let frameY=(window.innerWidth-1100)/2
    document.body.style.zoom="100%";
    frame.style.left=frameY+"px"
    frame.style.top=frameX+"px"

    // placer la zone d'action au centre
    let actionBox=document.querySelector("#ActionBox");
    actionBox.style.left=((1100-actionBox.clientWidth)/2)+"px"

    // récupérer les éléments et tailles.
    let targetA=document.querySelector("#red");
    let targetB=document.querySelector("#blue");
    let targetC=document.querySelector("#yellow");
    let targetD=document.querySelector("#green");
    let blockWidth=targetA.clientWidth;
    let blockHeight=targetA.clientHeight;

    let start=document.querySelector("#start");
    let startWidth=start.clientWidth;
    let startHeight=start.clientHeight;
    // placer bloc 1 et 4 à gauche et à droite de la 2ème ligne
    targetA.style.position="absolute";
    targetA.style.top=(blockHeight+15) +"px";
    targetA.style.left="8px"

    targetD.style.position="absolute";
    targetD.style.top=(blockHeight+15) +"px";
    targetD.style.right="8px"

    // récupérer distance centre bloc à centre start
    let positionStart= start.getBoundingClientRect();
    let start_Y = positionStart.left-frameY+startWidth/2;
    let start_X = positionStart.top-frameX+startHeight/2;

    let positionTargetA = targetA.getBoundingClientRect();
    let targetA_Y = positionTargetA.left-frameY+blockWidth/2;
    let targetA_X = positionTargetA.top-frameX+blockHeight/2;

    let distance= Math.sqrt(Math.pow(Math.abs(start_Y-targetA_Y),2)+Math.pow(Math.abs(start_X-targetA_X),2))
    // placer les blocs 2 et 3 aux intersections gauche et droite de cette même distance
    let targetB_Y=(blockHeight/2)+8+frameX

    let targetB_X=start_X-Math.sqrt(Math.pow(distance,2)-Math.pow(start_Y-targetB_Y,2))


    targetB.style.position="absolute"
    targetB.style.left=targetB_X+"px"
    targetB.style.top=8+frameX
    targetC.style.position="absolute"
    targetC.style.right=targetB_X+"px"
    targetC.style.top=8+frameX
}