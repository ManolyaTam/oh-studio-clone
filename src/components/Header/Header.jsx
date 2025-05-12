import SpinningCross from "../SpinningCross/SpinningCross";
import "./header.css"

const Header = () => {
  return (
    <div className="header">
      <div>
        <span>
          A
          <a href="https://example.com/" target="_blank"><img className="profile-pic" src="/images/profile-pic.png" /></a>
          designer working
        </span>
        <br />
        <span>with startups globally.</span><br />
        <span>Currently steering the</span><br />
        <span>ship at&nbsp;<img src="/images/haptic-logo.png" alt="haptic-logo" /><a className="hapticLink" href="/haptic/">Haptic</a></span><br />
      </div>
      <div><SpinningCross /></div>
    </div>
  )
}

export default Header;