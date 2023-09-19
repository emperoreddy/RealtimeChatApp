import ChatLayout from './components/ChatLayout'
import background from './assets/blob.webp'
import './App.css'

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

function App() {

  return (
  <div className="bg-blue-800 w-screen h-screen flex items-center justify-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${background})`}}>
    <ChatLayout/>
  </div>
  )
}

export default App
