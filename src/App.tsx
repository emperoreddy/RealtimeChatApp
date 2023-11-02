import ChatLayout from "./components/ChatLayout";
import background from "./assets/background.webp";
import "./App.css";
import UsernameSelect from "./components/UsernameSelect";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { createClient } from "@supabase/supabase-js";
import NotFound from "./components/NotFound";
import Authentication from "./components/Authentication";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

const ErrorBoundaryLayout = () => (
  <ErrorBoundary fallback={<div className="text-3xl text-white">Something went wrong 🥲</div>}>
    <Outlet />
  </ErrorBoundary>
);


const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
      {
        path: "/",
        element: <Authentication />,
      },
      {
        path: "/chat",
        element: <ChatLayout />,
      },
      {
        path: "/select-username",
        element: <UsernameSelect />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
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
