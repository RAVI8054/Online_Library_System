import Header from "./Componets/Header"
import { Outlet } from "react-router-dom"
import Footer from "./Componets/Footer"
function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
