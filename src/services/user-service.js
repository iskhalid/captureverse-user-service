const {UserRepository} = require("../repository/index");

class UserService {

    constructor(){
        this.userRepository = new UserRepository();
    }


  async createUser({ name, username, email, password }) {
    try {
        const user = await this.userRepository.create({name, username, email, password});
        return user;
    } catch (error) {
      console.log("Something went wrong in user service", error);
      return null;
    }
  }


  async getUser({ email, password }) {
    try {
      const user = await this.userRepository.get({ email, password });
      return user;
    } catch (error) {
      console.log("Something went wrong in user service", error);
      return null;
    }
  }


}

module.exports = UserService;
