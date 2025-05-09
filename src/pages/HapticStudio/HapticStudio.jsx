import "./footer.css"
import Pricing from "../../components/Pricing/Pricing.jsx";
import Careers from "../../components/Careers/Careers.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import DShapeAnimation from "../../components/DShapeAnimation/DShapeAnimation.jsx";

const HapticStudio = () => {
  return (
    <div className="haptic-studio">
      <div className="haptic-header"></div>
      <div className="haptic-content">
        <Pricing />
        <DShapeAnimation />
        <Careers />
      </div>
      <Footer />
    </div>
  )
}

export default HapticStudio;