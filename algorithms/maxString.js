let animalsArray = ['lion', 'zebra', 'elephant', 'giraffe', 'wolf', 'monkey'];


const findLongestAnimalName = animalArr => {

    if(!animalArr) return
    var maxNameLength = animalArr[0].length;
    var name = animalArr[0];

    console.log(animalArr[0].length)

    for(let i = 0; i < animalArr.length; i++) {
        if(animalArr[i].length > maxNameLength) {
            maxNameLength = animalArr[i].length;
            name = animalArr[i];
        }
    }

    var myAnimalPair = new Map();

    myAnimalPair.set('animalName:',[name, maxNameLength]);

    return myAnimalPair

}


console.log(findLongestAnimalName(animalsArray));