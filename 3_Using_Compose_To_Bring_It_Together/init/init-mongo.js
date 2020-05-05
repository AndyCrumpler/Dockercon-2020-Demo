db.createUser(
    {
        user: "user",
        pwd: "password",
        roles: [
            {
                role: "readWrite",
                db: "dogs"
            }
        ]
    }
)

db.createCollection('breedsOfDog')

db.breedsOfDog.createIndex({ size: 1 }, { name: 'idx_size' })

db.breedsOfDog.insertOne({
    name: 'Poodle',
    size: 'small'
})

db.breedsOfDog.insertOne({
    name: 'Labrador',
    size: 'medium'
})
