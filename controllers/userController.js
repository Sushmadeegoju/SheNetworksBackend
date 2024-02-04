const userModel = require( "../model/users");

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        // console.log(users);
        res.status(200).json(users);
    } catch(error) {
        console.log("Something went wrong!" + error);
        res.status(500).json({ error: "Something went wrong!" });
    }
}

const postUser = async (req, res) => {
    const user = new userModel(req.body);
    try {
        await user.save();
        res.status(201).json(user);

    } catch(error) {
        console.log("Error posting data!" + error);
        res.status(500).json({ error: "Something went wrong!" });
    }
}

const getUser = async (req,res) => {
    const search_str = req.params.emailId;
    try {
        const user = await userModel.findOne({"email": { $regex: new RegExp(search_str, 'i') }});
        res.status(200).json(user);
    } catch(error) {
        console.log("user Not found!" + error);
        res.status(500).json({ error: "user not found!" });
    }
}

module.exports = { getAllUsers, postUser, getUser };