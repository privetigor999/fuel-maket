import AboutWork from "./components/AboutWork/AboutWork";
import Advantage from "./components/Advantage/Advantage";
import DeliveryBlock from "./components/DeliveryBlock/DeliveryBlock";
import FuelWithDelivery from "./components/FuelWithDelivery/FuelWithDelivery";
import Header from "./components/Header/Header";
import HeaderInfo from "./components/HeaderInfo/HeaderInfo";
import Prefooter from "./components/Prefooter/Prefooter";
import PriceBlock from "./components/PriceBlock/PriceBlock";
import Quality from "./components/Quality/Quality";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <HeaderInfo />
      <Header />
      <DeliveryBlock />
      <PriceBlock />
      <FuelWithDelivery />
      <AboutWork />
      <Advantage />
      <Quality />
      <Reviews />
      <Prefooter />
      <Footer />
    </div>
  );
}

export default App;
