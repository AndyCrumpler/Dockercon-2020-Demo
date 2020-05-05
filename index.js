module.exports = function isABreedOfDog(animal) {
    return dogs.some(dog => animal.ToLowerCase() == dog.toLowerCase())
}

const dogs = [
    "Collie",
    "Labrador",
    "Poodle"
]