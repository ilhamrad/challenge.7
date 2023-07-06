module.exports = {
    read: (req, res) => {
        user_game.findAll().then((user_game) => {
          res.json(user_game)
        })
      },
      createUser: (req,res) => {
        user_game.create({
            username: req.body.username,
            password: req.body.password
        })
        .then((user_game) => {
            res.status(200).json(user_game)
        }).catch((err) => {
            res.status(400).json("data failed to create")
        })
      }
}