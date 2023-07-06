const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController')

//api untuk read
router.get("/users", apiController.read)
  
//api untuk create
router.post('/createuser', apiController.createUser)
  
//api untuk update
router.put("/update/:id", (req, res) => {
    user_game.update({
        username: req.body.username,
        password: req.body.password
    }, {
        where: { id: req.params.id}
    }).then((user_game) => {
        res.status(200).json(user_game)
    }).catch((err) => {
        res.status(400).json("create failed")
    })
})
  
  
//api untuk delete
router.delete("/delete/:id", async(req, res) => {
    const id = req.params.id
    const user_game = await user_game.destroy({
        where: {
        id: id
        }
    })
    res.json({
        message: 'deleted article'
    })
})

module.exports = router