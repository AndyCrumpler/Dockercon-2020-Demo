require('chai').should()
const target = require('../index')
const { PubSub } = require('@google-cloud/pubsub')
const { once } = require('events')

describe('index', function() {
    this.timeout('10s')

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
        let animalsTopic, animalsSub, dogsTopic, dogsSub

        before(async () => {
            const client = new PubSub()
            animalsTopic = (await client.createTopic('animals'))[0]
            dogsTopic = (await client.createTopic(process.env.DOGS_TOPIC))[0]
            animalsSub = (await animalsTopic.createSubscription(process.env.SUBSCRIPTION))[0]
            dogsSub = (await dogsTopic.createSubscription('dogs'))[0]
            target.subscribe();
        })

        describe('given the received message is poodle', () => {
            it('should publish the message to the dogs topic', async () => {
                // Arrange
                const animal  = 'poodle'

                // Act
                const promise = once(dogsSub, 'message')
                await animalsTopic.publish(Buffer.from(animal))
                const [message] = await promise
                message.ack()

                // Assert
                const dog = message.data.toString()
                dog.should.equal(animal)
            })
        })
    })
})
