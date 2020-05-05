require('chai').should()
const isABreedOfDog = require('../index')

describe('isABreedOfDog', () => {
    describe('given a poodle', () => {
        it('should return true', () => {
            // Arrange
            const animal = 'Poodle'

            // Act
            const result = isABreedOfDog(animal)

            // Assert
            result.should.be.true
        })
    })

    describe('given a hedgehog', () => {
        it('should return false', () => {
            // Arrange
            const animal = 'Hedgehog'

            // Act
            const result = isABreedOfDog(animal)

            // Assert
            result.should.be.false
        })
    })
})
