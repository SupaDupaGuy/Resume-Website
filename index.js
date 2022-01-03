var runningFunc = false;
var bubbleQueue = [];
var bubbleQueue2 = [];
var bubbleIdleStyle;
function reverseAnim(idName){
    let element = document.getElementById(idName);
    element.style.animationDuration = "1s"
    element.style.animationName = "reverseIcon";
}

function hoverAnim(idName){
    let element = document.getElementById(idName);
    element.style.animationDuration = "1s";
    element.style.animationName = "iconAnim";
}

//only call if another is not running
function reverseBubbleAnim(idName){
    console.log('Reverse Hover Bubble');
    console.log(runningFunc);
    let element = document.getElementById(idName);
    element.style.animationDuration = "1s";
    element.style.animationName = "reverseBubbleHoverAnim";
    setTimeout(() => {
        element.style.animationDuration = '1.5s';
        element.style.animationName = 'bubbleIdleAnim';
    }, parseFloat(element.style.animationDuration) * 1000);
}

function bubbleHoverAnim(idName){
    console.log('Hover bubble');
    let element = document.getElementById(idName);
    //bubbleIdleStyle = element.style;
    element.style.animationDuration = "1s";
    element.style.animationName = "bubbleHoverAnim";
}

function clicked(idName){
    bubble = document.getElementById(idName);
    bubble.onmouseout = (event) => {};
    bubble.onmouseenter = (event) => {};

    bubble.style.animationDirection = 'normal';
    bubble.style.animationIterationCount = 'initial';
    bubble.style.animationDuration = '1.5s';
    bubble.style.animationFillMode = 'forwards';
    bubble.style.animationName = "bubblePop";
    //Add bubble to queue to regrow
    bubbleQueue.push(idName);
    bubbleQueue2.push(idName);

    //time until the bubble regrows
    setTimeout(() => {
        //grow bubble
        let newBubbleId = bubbleQueue.shift();
        let newBubble = document.getElementById(newBubbleId);
        newBubble.style.animationDirection = 'normal';
        newBubble.style.animationIterationCount = 'initial';
        newBubble.style.animationFillMode = 'forwards';
        newBubble.style.animationDuration = "1s";
        newBubble.style.animationName = "growBubble";
        newBubble.onmouseout = (event) => {reverseBubbleAnim(newBubbleId);};
        console.log('Mickey mouse clubhouse.');
        newBubble.onmouseenter = (event) => {bubbleHoverAnim(newBubbleId);};
        //Readd Idle animation
        //newBubble.style.animationName = 'bubbleIdleAnim';
        
        //Readd the idle animation after the length of the regrow animation duration
        console.log(parseFloat(newBubble.style.animationDuration) * 1000);
        setTimeout(() => {
            let newBubbleID2 = bubbleQueue2.shift();
            let newBubble2 = document.getElementById(newBubbleID2);
            newBubble2.style.animationIterationCount = 'infinite';
            newBubble2.style.animationDirection = 'alternate';
            newBubble2.style.animationDuration = '1.5s';
            newBubble2.style.animationName = 'bubbleIdleAnim';
        }, parseFloat(newBubble.style.animationDuration) * 1000);

    }, 5000);
    console.log(bubble.onmouseout);

    //bubble.onmouseout = "reverseBubbleAnim('bubble1')";
    //bubble.onmouseenter = "bubbleHoverAnim('bubble1')";
    //reverseBubbleAnim('bubble1');
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }