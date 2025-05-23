import "./footer.css"
import Header from "../../components/HapticHeader/HapticHeader.jsx";
import Pricing from "../../components/Pricing/Pricing.jsx";
import Careers from "../../components/Careers/Careers.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Carosel from "../../components/Carosel/Carosel.jsx";
import WhyHaptic from "../../components/WhyHaptic/WhyHaptic.jsx";
import CompaniesCarosel from "../../components/CompaniesCarosel/CompaniesCarosel.jsx";
import Partners from "../../components/Partners/Partners.jsx";
import NavMenu from "../../components/NavMenu/NavMenu.jsx";

const HapticStudio = () => {
  return (
    <div className="haptic-studio">
      <NavMenu />

      <Header />
      <Carosel />
      <img src="/svg/black-white.svg" alt="" style={{ width: "100%", marginTop: 120 }} />
      <WhyHaptic />
      <CompaniesCarosel />
      <Partners />
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