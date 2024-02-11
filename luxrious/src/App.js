import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./component/Nav/Navbar";
import Rout from "./Rout";
import { BrowserRouter } from "react-router-dom";
import Footer from "./component/Footer";

function App() {
 
  return (

    <>
      <BrowserRouter>
        <Navbars />
        <Rout />
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
