const userService = require('./user.service');

exports.getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        return res.status(200).json(users);
    } catch (e) {
        res.status(500).json(e.message);
    }
}
exports.createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        return res.status(200).json(user);
    } catch (e) {
        res.status(500).json(e.message);
    }
}