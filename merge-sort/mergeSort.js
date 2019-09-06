let values = [];
let w = 10;

let states = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    values = new Array(floor(width/w));
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
        states[i] = -1;
    }
    mergeSort(values, 0, values.length - 1);
}

async function mergeSort(arr, start, end) {
    
}