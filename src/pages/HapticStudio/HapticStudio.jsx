import "./footer.css"
import Footer from "../../components/Footer/Footer.jsx";
import Careers from "../../components/Careers/Careers.jsx";
const HapticStudio = () => {
  return (
    <div className="haptic-studio">
      <div className="haptic-header"></div>
      <div className="haptic-content">
        <Careers />
      </div>
      <Footer />
    </div>
  )
}

export default HapticStudio;