import ChatLayout from './components/ChatLayout'
import background from './assets/blob.webp'
import './App.css'

function App() {

  return (
  <div className="bg-blue-800 w-screen h-screen flex items-center justify-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${background})`}}>
    <ChatLayout/>
  </div>
  )
}

export default App
