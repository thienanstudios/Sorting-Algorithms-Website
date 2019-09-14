let array = [];
let i = 0;
let j = 0;

let w = 7.5;

function setup() {
    createCanvas(windowWidth, windowHeight);
    array = new Array(floor(width / w));

    for (let i = 0; i < array.length; i++) {
        array[i] = random(height);
    } 

}

function draw() {
    background(0);


    // bubble sort
    if (i < array.length) {
        for (let i = 0; i < array.length - j - 1; i++) {
            let a = array[i];
            let b = array[i + 1];
            if (a > b) {
                swap(array, i, i + 1);
            }
        }
    } else {
        noLoop();
    }
    i++;

    // draw it
    for (let i = 0; i < array.length; i++) {
        stroke(300);
        rect(i * w, height - array[i], w, array[i]);
    }
}

function swap(array, num1, num2) {
    let temp = array[num1];
    array[num1] = array[num2];
    array[num2] = temp;
}