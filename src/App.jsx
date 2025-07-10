import Header from "./Componets/Header"
import { Outlet } from "react-router-dom"
import Footer from "./Componets/Footer"
// redux for state mangement
import { Provider }from "react-redux";
 import appStore from "./utils/appStore";


function App() {
  return (
     <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
     </Provider>
  )
}

export default App
