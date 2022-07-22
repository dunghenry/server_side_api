import { Schema, model } from 'mongoose';

interface IUser{
    username?: string;
    email: string;
    password: string;
    isAdmin: boolean;
    avatar?: string;  
}
const userSchema = new Schema<IUser>({
    username:{
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    avatar: {
        type: String,
    }
}, {
    timestamps : true,
})
const User = model<IUser>('User', userSchema);
export default User;