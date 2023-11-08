import { supabase } from "../../App";

const emailExistsInUsers = async (email: string) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("email")
      .eq("email", email)
      .single();

    if (error) {
      console.error("Error fetching user:", error);
      return false;
    }

    // return true if the email exists in the users table
    return data !== null;
    
  } catch (error) {
    console.error("Failed to check if email exists:", error);
    return false;
  }
};

export default emailExistsInUsers;
