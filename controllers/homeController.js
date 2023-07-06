module.exports = {
    home: (req, res) => {
        res.status(200).render("home")
    },
    gameplay: (req, res) => {
        res.status(200).render("gameplay")
    },
    whoami: (req, res) => {
        res.send(req.user.username)
    }
}