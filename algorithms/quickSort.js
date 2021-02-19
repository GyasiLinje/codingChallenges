function sort(arr) {
    const copiedArray = [...arr];

    if (copiedArray.length <= 1) {
        return copiedArray;
    }

    //splitting
    const smallerElementsArray = [];
    const biggerElementsArray = [];
    // Shifts the array to the left and stores it into pivotElement+
    const pivotElement = copiedArray.shift();
    const centerElementsArray = [pivotElement];


    //manipulate copied array
    while (copiedArray.length) {
        // change current pivot every iteration and shrinks and shrinks
        const currentElement = copiedArray.shift();

        if (currentElement === pivotElement) {
            centerElementsArray.push(currentElement);
        } else if (currentElement < pivotElement) {
            smallerElementsArray.push(currentElement);
        } else {
            biggerElementsArray.push(currentElement);
        }

    }

    // Now we broke up our arrays into smaller and smaller arrays, center, and smaller, bigger

    // now we need to sort smaller and bigger elements array

    const smallerElementsSortedArray = sort(smallerElementsArray);
    const biggerElementsSortedArray = sort(biggerElementsArray);

    // Combine the smaller center, smaller and bigger array
    return smallerElementsSortedArray.concat(centerElementsArray, biggerElementsSortedArray);
}

const sortedArray = sort([-3, 10, 1, 100, -10, 22, 15]);
console.log(sortedArray);