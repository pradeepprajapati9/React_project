import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./Component/Navbars";
import About from "./Component/About";
import Feature from "./Component/Feature";
import SaleProperties from "./Component/SaleProperties";
import OurService from "./Component/OurService";
import RealEstate from "./Component/RealEstate";
import OurClients from "./Component/OurClients";
import OurContact from "./Component/OurContact";
function App() {
  return (
    <div className="App">
      <div class="alert alert-danger"  >
       I Am Working On This Websites This is only for Demo
      </div>
      <Navbars />
      <About />
      <Feature />
      <SaleProperties />
      <OurService />
      <RealEstate />
      <OurClients />
      <OurContact />
    </div>
  );
}

export default App;

