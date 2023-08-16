const User = require("../modals/User");

exports.getAllUsers = async () => {
    return await User.find();
};

exports.addUser = async (user) => {
    return await User.create(user);
};

exports.getUserById = async (id) => {
    return await User.findById(id);
};

exports.deleteUserById = async (id) => {
    return await User.findByIdAndDelete(id);
};

exports.updateUserById = async (id, user) => {
    return await User.findByIdAndUpdate(id, user);
};
