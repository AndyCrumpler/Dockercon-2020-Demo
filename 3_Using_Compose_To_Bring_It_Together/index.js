const { MongoClient } = require('mongodb')
const { PubSub } = require("@google-cloud/pubsub")

async function isABreedOfDog(animal) {
    const client = new MongoClient(process.env.MONGO_CONNECTION_STRING, { useUnifiedTopology: true })
    await client.connect()
    const db = client.db(process.env.DATABASE)
    const collection = db.collection(process.env.COLLECTION)
    var dogs = await collection.find({}).toArray()

    return dogs.some(dog => animal.toLowerCase() == dog.name.toLowerCase())
}

function subscribe() {
    const client = new PubSub();
    const subscription = client.subscription(process.env.SUBSCRIPTION)
    const topic = client.topic(process.env.DOGS_TOPIC)
    subscription.on('message', async message => {
        const animal = message.data.toString()
        if (await isABreedOfDog(animal)) {
            topic.publish(message)
        }
    });
}

module.exports = {
    isABreedOfDog,
    subscribe
}
