import "./footer.css"
import Header from "../../components/HapticHeader/HapticHeader.jsx";
import Pricing from "../../components/Pricing/Pricing.jsx";
import Careers from "../../components/Careers/Careers.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const HapticStudio = () => {
  return (
    <div className="haptic-studio">
      <Header />
      <img src="/svg/black-white.svg" alt="" />
      <div className="haptic-content">
        <Pricing />
        <img
          src="/svg/black-white.svg"
          style={{ position: "relative", width: "100vw" }}
          alt=""
        />
        <Careers />
      </div>
      <Footer />
    </div>
  )
}

export default HapticStudio;