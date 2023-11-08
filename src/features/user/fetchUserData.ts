import { supabase } from "../../App";

async function fetchUser() {
  const user = supabase.auth.getUser();

  if (user) {
    const userData = await user.then((data) => data.data.user);
    return userData;
  }
}

export default fetchUser;
