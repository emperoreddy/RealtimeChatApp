import { supabase } from "../../App";
import fetchUser from "../user/fetchUserData";
import emailExistsInUsers from "./emailExistsInUsers";

export const storeUserEmail = async () => {
  try {
    const user = await fetchUser();
    const userEmail = user?.email;

    if (userEmail && !(await emailExistsInUsers(userEmail))) {
      await supabase.from("users").upsert({ email: userEmail }).throwOnError();

      console.log(userEmail);
      console.log("successfully inserted email");
    }
  } catch (error) {
    console.error("Failed to store user email:", error);
  }
};
