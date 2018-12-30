const { User } = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJSON = user.toJSON()
      res.send(userJSON)
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'This email account is already in use.'
      })
      // email already exists error
    }
  }
}
