require('chai').should()
const target = require('../index')

describe('index', function() {
    this.timeout('5s')

    describe('isABreedOfDog', () => {
        describe('given a poodle', () => {
            it('should return true', async () => {
                // Arrange
                const animal = 'Poodle'

                // Act
                const result = await target.isABreedOfDog(animal)

                // Assert
                result.should.be.true
            })
        })

        describe('given a penguin', () => {
            it('should return false', async () => {
                // Arrange
                const animal = 'Penguin'

                // Act
                const result = await target.isABreedOfDog(animal)

                // Assert
                result.should.be.false
            })
        })
    })

    describe('subscribe', () => {
        describe('given the received message is poodle', () => {
            it('should publish the message to the dogs topic')
        })

        describe('given the received message is penguin', () => {
            it('should not publish the message to the dogs topic')
        })
    })
})
