const {User} = require('../models/index')

class UserRepository {

    async create({name, username, email, password}) {
        try {
            const user = await User.create({name, username, email, password});
            return user;
        } catch (error) {
            console.log("Something went wrong in user repository", error);
            return null;
        }
    }

    async get({email, password}) {
        try {
            const user = await User.findOne({ email});
            if (!user) {
                return null
            }

            if (user.password == password) {
                return user}

            return null
        } catch (error) {
            console.log("Something went wrong in user repository", error);
            return null;
        }
    }
}

module.exports = UserRepository;