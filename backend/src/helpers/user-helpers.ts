import User from "../models/User.js"


export const findExistingUser = async (email: string) => {
  try {
    const existingUser = await User.findOne({ email });
    return existingUser;
  } catch (error: any) {
    console.log(`Error while finding existing user, error: ${error}`);
    throw error;
  }
}