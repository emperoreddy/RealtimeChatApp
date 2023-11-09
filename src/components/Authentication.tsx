import { useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../App";
import { useNavigate } from "react-router-dom";
import { storeUserEmail } from "../features/email/storeUserEmail";

export default function Authentication() {
  let navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event == "SIGNED_IN") {
      navigate("/chat");
    } else if (event == "SIGNED_OUT") {
      navigate("/");
    } else {
      console.log("Something went wrong");
    }
  });

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        storeUserEmail();
        navigate("/chat");
      }
    });
  }, []);

  return (
    <div className="flex  min-h-full flex-1  flex-col justify-center px-6 py-12 lg:px-8 text-gray-100">
      <div className="bg-gray-800 bg-opacity-30 px-10 md:px-36 py-10 lg:mx-96 md:mx-36 rounded-lg outline outline-gray-800 shadow-2xl">
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
