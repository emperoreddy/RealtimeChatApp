import ChatLayout from "./components/ChatLayout";
import background from "./assets/blob1.jpg";
import "./App.css";
import UsernameSelect from "./components/UsernameSelect";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { createClient } from "@supabase/supabase-js";
import NotFound from "./components/NotFound";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

const router = createBrowserRouter([
  {
    path: "/",
    element: <UsernameSelect />,
  },
  {
    path: "/chat",
    element: <ChatLayout />,
  },
  {
    path: "*",
    element: <NotFound/>,
  }
]);

function App() {
  return (
    <div
      className="bg-blue-800  w-screen h-screen flex items-center justify-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
