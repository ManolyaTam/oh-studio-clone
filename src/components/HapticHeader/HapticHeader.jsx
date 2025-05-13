import "./haptic-header.css"
import JobCard from "../JobCard/JobCard"

const HapticHeader = () => {
  return (
    <div id="hero" className="haptic-header">
      <img src="/images/haptic-heading.png" />
      <p>
        We help
        <img
          height={60}
          style={{ position: "relative", top: 20, margin: 6 }}
          src="/svg/header.svg"
          alt=""
        />
        ambitious<br />
        teams turn bold visions<br />
        into
        <img
          src="/images/haptic-heading2.png"
          alt=""
          style={{ position: "relative", top: 8, margin: 6 }}
        />
        lasting impact
      </p>
      <JobCard />
    </div>
  )
}

export default HapticHeader