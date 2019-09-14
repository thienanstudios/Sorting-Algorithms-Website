let array = [];
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
        rect(i * w, height - array[i], w, array[i]);
    }
}


function swap(array, num1, num2) {
    let temp = array[num1];
    array[num1] = array[num2];
    array[num2] = temp;
}

















/*
 *
 
 let array = [];
let states = [];
let w = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);
    array = new Array(floor(width / w));

    for (let i = 0; i < array.length; i++) {
        array[i] = random(height);
        states[i] = -1;
    }
    selectionSort(array, 0, array.length - 1)
}

// -----------------------------------

async function selectionSort(array, start, end) {
    // if (start >= end) {
    //     return;
    // }
    let index = await partition(array, start, end);
    states[index] = -1;

    await Promise.all([
        selectionSort(array, start, end)
    ]);
}

async function partition(array, start, end) {
    for (let i = start; i < end; i++) {
        states[i] = 1;
    }

    // let pivotValue = array[end];
    let pivotIndex = start;
    states[pivotIndex] = 0;

    for (let i = start; i < end; i++) {
        let min = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                min = j;
                // here, is what is new 
            states[pivotIndex] = -1;
            pivotIndex++;
            states[pivotIndex] = 0;
            }
        }
        if (i !== min) {
            swap(array, i, min);

            // // here, is what is new 
            // states[pivotIndex] = -1;
            // pivotIndex++;
            // states[pivotIndex] = 0;
        }
        // await swap(array, pivotIndex, end);
    }



    await swap(array, pivotIndex, end);

    for (let i = start; i < end; i++) {
        if (i != pivotIndex) {
            states[i] = -1;
        }
    }

    return pivotIndex;
}

//---------------------------------------

// async function selectionSort(array, start, end) {

//     let pivotValue = arr[end];
//     let pivotIndex = start;
//     states[pivotIndex] = 0;

//     for (let i = 0; i < array.length; i++) {
//         let min = i;
//         for (var j = i + 1; j < array.length; j++) {
//             if (array[j] < array[i]) {
//                 min = j;
//             }
//         }
//         if (i !== min) {
//             swap(array, i, min);

//             // here, is what is new 
//             states[pivotIndex] = -1;
//             pivotIndex++;
//             states[pivotIndex] = 0;
//         }
//     }
// }


function draw() {
    background(0);

    for (let i = 0; i < array.length; i++) {
        noStroke();
        if (states[i] == 0) {
            fill('00FFFF');
        } else if (states[i] == 1) {
            fill('#8A2BE2');
        } else {
            fill(255);
        }
        rect(i * w, height - array[i], w, array[i]);
    }

}


async function swap(array, num1, num2) {
    await sleep(50);
    let temp = array[num1];
    array[num1] = array[num2];
    array[num2] = temp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



 */
