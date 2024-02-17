import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  try {
    const res = await axios.post('/user/login', { email, password });
    if (res.status !== 201) {
      throw new Error("Unable to login")
    }

    const data = await res.data;
    return data;

  } catch (error) {
    console.log(`Error while logging in, for email: ${email}, error: ${error}`);
    throw error;
  }
}