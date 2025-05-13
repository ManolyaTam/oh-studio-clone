import "./footer.css"
import Header from "../../components/HapticHeader/HapticHeader.jsx";
import Pricing from "../../components/Pricing/Pricing.jsx";
import Careers from "../../components/Careers/Careers.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Carosel from "../../components/Carosel/Carosel.jsx";
import WhyHaptic from "../../components/WhyHaptic/WhyHaptic.jsx";
import CompaniesCarosel from "../../components/CompaniesCarosel/CompaniesCarosel.jsx";

const HapticStudio = () => {
  return (
    <div className="haptic-studio">
      <Header />
      <Carosel />
      <img src="/svg/black-white.svg" alt="" style={{ width: "100%", marginTop: 120 }} />
      <WhyHaptic />
      <CompaniesCarosel />
      <div className="haptic-content">
        <Pricing />
        <img
          src="/svg/black-white.svg"
          style={{ position: "relative", width: "100%" }}
          alt=""
        />
        <Careers />
      </div>
      <Footer />
    </div>
  )
}

export default HapticStudio;