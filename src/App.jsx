import Header from "./Componets/Header"
import { Outlet } from "react-router-dom"
import Footer from "./Componets/Footer"
// redux for state mangement
// import provider from "react-redux";
// import appStore from "./utils/appStore";


function App() {
  return (
    // <provider store={appStore}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    // </provider>
  )
}

export default App
