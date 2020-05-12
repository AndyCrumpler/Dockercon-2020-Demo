db.createCollection('greetings')

db.greetings.insertOne({
    greeting: 'Hello',
    name: 'World'
})

db.greetings.insertOne({
    greeting: 'Hello',
    name: 'Docker'
})
