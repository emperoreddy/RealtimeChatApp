import { supabase } from "../../App";

const usernameExists = async (username: string) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("username")
      .eq("username", username)
      .single();

    if (error) {
      console.error("Error fetching user:", error);
      return false;
    }

    // return true if the username exists in the users table
    return data !== null;
    
  } catch (error) {
    console.error("Failed to check if username exists:", error);
    return false;
  }
};

export default usernameExists;
