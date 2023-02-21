function getBasePosition(){
    let actionBox=document.querySelector("#ActionBox");
    console.log(window.innerWidth)
    console.log(actionBox.clientWidth)
    actionBox.style.left=((window.innerWidth-actionBox.clientWidth)/2)+"px"

}

function getCoordinates(){
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
    let start_X = positionStart.left+startWidth/2;
    let start_Y = positionStart.top+startHeight/2;
    console.log("start")
    console.log(start_X)
    console.log(start_Y)

    let positionTargetA = targetA.getBoundingClientRect();
    let targetA_X = positionTargetA.left+blockWidth/2;
    let targetA_Y = positionTargetA.top+blockHeight/2;

    console.log("target")
    console.log(targetA_X)
    console.log(targetA_Y)
    let distance= Math.sqrt(Math.pow(Math.abs(targetA_X-start_X),2)+Math.pow(Math.abs(targetA_Y-start_Y),2))
    console.log(distance)
    // placer les blocs 2 et 3 aux intersections gauche et droite de cette même distance
    // distance = sqrt(pow(start_X-targetB_X)+pow(start_Y-targetB_Y))
    // sqrt(pow(distance)-pow(start_Y-targetB_Y))-start_X=-targetB_X
    let targetB_Y= (blockHeight/2)+8
    let targetB_X=-Math.sqrt(Math.pow(distance,2)-Math.pow(start_Y-targetB_Y,2))+start_X
    console.log(targetB_X)


    targetB.style.position="absolute"
    targetB.style.left=targetB_X+"px"
    targetC.style.position="absolute"
    targetC.style.right=targetB_X+"px"
}
getBasePosition()
getCoordinates()
