const { userModel }  = require("../models/user.model.js")

const register = async (req, res) => {
    try {
        let {email,password} = req.body;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(mailformat)){
            let userExists = await userModel.findOne({email});
            if(userExists){
                return res.status(400).send({
                    status: false,
                    message: 'User already exists.'
                })
            } else{
                let newUser = await userModel.create({email,password});
                newUser = newUser.toJSON();
                return res.send({
                    message: 'User successfully registered',
                    data: newUser
                });
            }
        } else{
            return res.send({
                error:true,
                message: "You have entered an invalid email address!"
            })
        }
    } catch (error) {
        return res.status(500).send({
            error: error,
            message: "Something went wrong!"
        });
    }
}
const login = async (req, res) => {
    try {
        let {email, password} = req.body;
    } catch (error) {
        return res.status(500).send({
            error: error,
            message: "Something went wrong!"
        });
    }
}

module.exports = {register,login};

