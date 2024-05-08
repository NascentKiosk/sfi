import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        
    }
}, 
{timestamps: true});

 //creating the model 
 // User is the name of the model and it has to start with the capital letter and singular. It should also have a userSchema
const User = mongoose.model("User", userSchema);

export default User;