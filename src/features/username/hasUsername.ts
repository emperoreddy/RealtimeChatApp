import { supabase } from "../../App";

export async function hasUsername(email: string): Promise<boolean> {
  const { data, error } = await supabase
    .from("users")
    .select("username")
    .eq("email", email)
    .single();

  if (error) {
    console.error(error);
    return false;
  }

  return !!data.username;
}
