import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeUsername } from "../features/username/storeUsernameSlice";
import { useNavigate } from "react-router-dom";
import storeUsernameInTable from "../features/username/storeUsernameInTable";
import fetchUser from "../features/user/fetchUserData";
import usernameExists from "../features/username/usernameExists";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UsernameSelect() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!username) return;
    dispatch(storeUsername(username));
    localStorage.setItem("username", username);

    // if user is already in table, show error
    if (await usernameExists(username)) {
      toast.error(" Username already exists, choose another one", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    } else {
      toast.success(" Username saved successfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    // store in database table "users"
    storeUsernameInTable(username);

    navigate("/chat");
    console.log("Username submitted:", username);
  }

  return (
    <>
      <div className="flex  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-gray-100">
        <div className="bg-gray-800 bg-opacity-40 py-10 lg:mx-96 md:mx-36 rounded-lg outline outline-gray-800 shadow-2xl">
          <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="logo"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
              Select a username
            </h2>
          </div>

          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              onSubmit={handleSubmit}
              action="/chat"
              method="GET"
            >
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 "
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="block w-full rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full transition justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleSubmit}
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
