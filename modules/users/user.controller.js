const User = require('./user.model');

exports.getUsers = async (req,res) => {
    try {
       const users= await User.find({});
       res.status(200).json(users);
    } catch (e) {
        res.status(500).json(e.message);
    }
}
exports.createUser = async (req,res) => {
    try {
       const user= await User.create(req.body);
       res.status(200).json(user);
    } catch (e) {
        res.status(500).json(e.message);
    }
}