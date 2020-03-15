const bcrypt = require('bcryptjs')

const resolvers = {
    Query: {
        async user (root, { id }, { models }) {
              return models.User.findById(id)
        },
        async allPhotos (root, args, { models }) {
              return models.Photos.findAll()
        },
        async allUsers (root, args, { models }) {
              return models.User.findAll()
        }
      },

      Mutation: {
        async createUser (root, { name, email, password }, { models }) {
            return models.User.create({
                name,
                email,
                password: await bcrypt.hash(password, 10)
              })
        },
        async createPhotos (root, { userId, url }, { models }) {
            return models.Photos.create({ userId, url })
        },

        async allUserPhotos (root, {id}, { models }) {
            return models.Photos.findById(id)
         },

        async login (root, { email, password }, { models }) {
            const user = await models.User.findOne({ email });
            if(user && password == user.password)
            {   
                return user
            }
        }
    },  

    User: {
        async Photos (user) {
            return user.Photos
        }
    }
}

module.exports = resolvers