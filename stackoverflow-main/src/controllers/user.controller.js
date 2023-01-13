const { userModel }  = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const register = async (req, res) => {
    try {
        let {username,email,password} = req.body;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(mailformat)){
            let userExists = await userModel.findOne({email});
            let usernameExist= await userModel.findOne({username});
            if(userExists){
                return res.status(400).send({
                    error: true,
                    message: 'User already exists!'
                })
            } else if(usernameExist){
                return res.status(400).send({
                    error: true,
                    message: 'Username already taken!'
                })
            } else{
                password = bcrypt.hashSync(password);
                let newUser = await userModel.create({username,email,password});
                newUser = newUser.toJSON();
                delete newUser.password;
                return res.send({
                    error : false,
                    message: 'User successfully registered!',
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
            error: true,
            message: "Something went wrong!"
        });
    }
}

const login = async (req, res) => {
    try {
        let {username, password} = req.body;
        let userExists = await userModel.findOne({username});
        if(userExists){
            let match = bcrypt.compareSync(password, userExists.password);
            if(match){
                let token = jwt.sign({
                    _id : userExists._id,
                    username: userExists.username,
                    email: userExists.email
                },JWT_SECRET)
                return res.send({
                    error:false,
                    message:"User succesfully logged in",
                    token : token
                })
            } else {
                return res.status(200).send({
                    error: true,
                    message: 'Incorrect password !'
                })
            }
        } else{
            return res.send({
                error:true,
                message: "User does not exist!"
            })
        }
    } catch (error) {
        return res.status(500).send({
            error: true,
            message: "Something went wrong!"
        });
    }
}

module.exports = {register,login};

