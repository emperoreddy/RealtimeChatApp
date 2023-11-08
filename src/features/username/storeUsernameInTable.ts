import { supabase } from "../../App";
import fetchUser from "../user/fetchUserData";

async function storeUsernameInTable(username: string) {
  const user = await fetchUser();
  const userEmail = user?.email;

  const { data, error } = await supabase
    .from("users")
    .update({ username: username, email: userEmail })
    .eq("email", userEmail);

  if (error) {
    console.error("Error storing username:", error);
    throw error;
  }

  console.log("Username stored successfully:", data);
}

export default storeUsernameInTable;
