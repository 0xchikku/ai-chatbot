import User from "../models/User.js";
import { compare, hash } from "bcrypt";
import { findExistingUser } from "../helpers/user-helpers.js";
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(`Error while getting all users, error: ${error}`);
        return res.status(500).json({ message: "ERROR", cause: (error.message) });
    }
};
export const userSignup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await findExistingUser(email);
        if (existingUser) {
            const message = `User with email: ${email} already exists!`;
            console.log(message);
            return res.status(401).json({ message });
        }
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        return res.status(201).json({ message: "OK", id: user._id.toString() });
    }
    catch (error) {
        console.log(`Error while user signup, error: ${error}`);
        return res.status(500).json({ message: "ERROR", cause: error?.message });
    }
};
export const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const existingUser = await findExistingUser(email);
        if (!existingUser) {
            const message = `User with email: ${email} not found!`;
            console.log(message);
            return res.status(401).json({ message });
        }
        const isPasswordCorrect = await compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            const message = `Incorrect Password!`;
            console.log(message);
            return res.status(403).json(message);
        }
        return res.status(201).json({ message: "OK", userId: existingUser._id });
    }
    catch (error) {
        console.log(`Error while user login, error: ${error}`);
        return res.status(500).json({ message: "ERROR", cause: error.message });
    }
};
//# sourceMappingURL=user-controllers.js.map