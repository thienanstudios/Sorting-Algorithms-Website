let array = [];
let w = 10;
let i = 0;
let j = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
    array = new Array(width);

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
        line(i, height, i, height - array[i]);
    }
}

function swap(array, num1, num2) {
    let temp = array[num1];
    array[num1] = array[num2];
    array[num2] = temp;
}