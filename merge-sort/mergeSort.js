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

    mergeSort(array);
    

    // for (let i = 0; i < array.length; i++) {
    //     stroke(300);
    //     line(i, height, i, height - array[i]);
    // }
}





function mergeSort (array) {
    if (arr.length < 2) {
      return;
    }

    var mid = Math.floor(array.length / 2);
    var subLeft = mergeSort(array.slice(0, mid));
    var subRight = mergeSort(array.slice(mid));

    for (let i = 0; i < array.length; i++) {
        stroke(300);
        line(i, height, i, height - array[i]);
    }

    return merge(subLeft, subRight);
}

function merge (node1, node2) {
    var result = [];
    while (node1.length > 0 && node2.length > 0)
        result.push(node1[0] < node2[0]? node1.shift() : node2.shift());
    return result.concat(node1.length? node1 : node2);
}