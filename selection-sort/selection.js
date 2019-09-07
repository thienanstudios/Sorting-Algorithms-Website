let array = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    array = new Array(width);

    for (let i = 0; i < array.length; i++) {
        array[i] = random(height);
    } 

}

function draw() {
    background(0);

    // selecton sort
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                min = j;
            }
        }
        if (i !== min) {
            swap(array, i, min);
        }
    }


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