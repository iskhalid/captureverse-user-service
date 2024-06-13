

const UserService = require("../services/user-service");

const userService = new UserService();

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        if(user){
            return res.status(201).json({
                data: user,
                success: true,
                message: "user created successfully",
                err: {}
            })
        }
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to create user",
            err: {}
        })
        
    } catch (error) {
        console.log("something went wrong in user controller", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to create user",
            err: error
        })
    } };

const getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.body);
        if(!user){
            return res.status(500).json({
                data: {},
                success: false,
                message: "Failed to fetch user",
                err: {}
            })
        }
        return res.status(201).json({
            data: user,
            success: true,
            message: "user fetched successfully",
            err: {}
        })
    } catch (error) {
        console.log("something went wrong in user controller", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to fetch error",
            err: error
        })
    } };



module.exports = { createUser, getUser }