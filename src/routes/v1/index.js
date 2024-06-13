const express = require('express');
const UserController = require('../../controllers/user-controller');
const router = express.Router();

router.post('/user',UserController.createUser);
router.get('/user',UserController.getUser);
// router.get('/demo',()=>{
//     console.log("demo route")
    
// })

module.exports = router;