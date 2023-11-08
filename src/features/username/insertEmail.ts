import { supabase } from "./../../App";

export async function insertEmail(email: string) {
  const { data, error } = await supabase
    .from("users")
    .upsert({ email: email })
    .throwOnError();


  return data;
}
