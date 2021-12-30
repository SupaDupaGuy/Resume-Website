var runningFunc = false;

function reverseAnim(idName){
    element = document.getElementById(idName);
    element.style.animationDuration = "1s"
    element.style.animationName = "reverseIcon";
}

function hoverAnim(idName){
    element = document.getElementById(idName);
    element.style.animationDuration = "1s";
    element.style.animationName = "iconAnim";
}

//only call if another is not running
function reverseBubbleAnim(idName){
    console.log('Reverse Hover Bubble');
    console.log(runningFunc);
    element = document.getElementById(idName);
    element.style.animationDuration = "1s";
    element.style.animationName = "reverseBubbleHoverAnim";
}

function bubbleHoverAnim(idName){
    console.log('Hover bubble');
    element = document.getElementById(idName);
    element.style.animationDuration = "1s";
    element.style.animationName = "bubbleHoverAnim";
}

function clicked(idName){
    bubble = document.getElementById(idName);
    bubble.onmouseout = (event) => {}

    bubble.style.animationDuration = '1.5s';
    bubble.style.animationFillMode = 'forwards';
    bubble.style.animationName = "bubblePop";
    setTimeout(() => {
        bubble.onmouseout = (event) => {reverseBubbleAnim('bubble1');};
        console.log('Mickey mouse clubhouse.');
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