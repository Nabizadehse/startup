import "./main.scss";
import cryptoscreen from "../img/screen.png";
import Header from "../components/header";
import Footer from "../components/footer";
import Pricing from "../components/pricing";
import Service from "../components/service";
import Progress from "../components/progress";

const Main = () => {
  return (
    <div className="main__container">
      {/* what about use section for each part of page to simplify html structure?  */}
      <Header />
      <Progress />
      <Service />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Main;
