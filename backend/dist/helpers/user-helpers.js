import User from "../models/User.js";
export const findExistingUser = async (email) => {
    try {
        const existingUser = await User.findOne({ email });
        return existingUser;
    }
    catch (error) {
        console.log(`Error while finding existing user, error: ${error}`);
        throw error;
    }
};
//# sourceMappingURL=user-helpers.js.map