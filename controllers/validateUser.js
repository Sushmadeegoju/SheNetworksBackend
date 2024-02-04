const userModel = require( "../model/users");

const validateUser = async (req, res) => {
    const { loginEmail, loginPassword } = req.body;
    try {
        console.log(loginEmail, loginPassword);
        const user = await userModel.findOne({email : loginEmail, password : loginPassword});
        
        if(user){
            res.status(200).json({ ...user._doc });
        } else {
            // alert(new Error("User Not Found"));
            console.log("error: User Not Found");
            res.status(404).json({ error: "User Not Found" });
        }
    } catch(error) {
        // alert(new Error("Something went wrong!"));
        console.log("Something went wrong!" + error);
        res.status(500).json({ error: "Something went wrong!" });
    }
}

module.exports = validateUser;