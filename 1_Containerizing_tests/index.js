module.exports = function isABreedOfDog(animal) {
    return dogs.some(dog => animal.toLowerCase() == dog.toLowerCase())
}

const dogs = [
    "Collie",
    "Labrador",
    "Poodle"
]
