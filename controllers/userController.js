
exports.getOneUsr = (req, res) => {
    res.json({
        user: req.profile
    })
}