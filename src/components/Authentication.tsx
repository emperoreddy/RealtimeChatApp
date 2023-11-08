import { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../App";
import { useNavigate } from "react-router-dom";
import fetchUser from "../features/username/fetchUserData";
import { insertEmail } from "../features/username/insertEmail";
import emailExistsInUsers from "../features/email/emailExistsInUsers";

export default function Authentication() {
  let navigate = useNavigate();

  const storeUserEmail = async () => {
    try {
      const user = await fetchUser();
      const userEmail = user?.email;

      if (userEmail && !(await emailExistsInUsers(userEmail))) {
        await insertEmail(userEmail);
        console.log(userEmail);
        console.log("successfully inserted email");
      }
    } catch (error) {
      console.error("Failed to store user email:", error);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session) {
        storeUserEmail();
        navigate("/chat");
      }
    });

    supabase.auth.onAuthStateChange((event) => {
      if (event == "SIGNED_IN") {
        navigate("/chat");
      } else if (event == "SIGNED_OUT") {
        navigate("/");
      } else {
        console.log("Something went wrong");
      }
    });
  }, []);

  return (
    <div className="flex  min-h-full flex-1  flex-col justify-center px-6 py-12 lg:px-8 text-gray-100">
      <div className="bg-gray-800 bg-opacity-50 px-36 py-10 lg:mx-96 md:mx-36 rounded-lg outline outline-gray-800 shadow-2xl">
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="demo"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
            Login / Sign Up
          </h2>
        </div>

        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={[]}
          view="sign_in"
        />
      </div>
    </div>
  );
}
