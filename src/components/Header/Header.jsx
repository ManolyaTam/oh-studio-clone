import SpinningCross from "../SpinningCross/SpinningCross";
import "./header.css"

const Header = () => {
  return (
    <div className="header">
      <div>
        <span>
          A
          <a href="/"><img className="profile-pic" src="/profile-pic.png" /></a>
          designer working
        </span>
        <br />
        <span>with startups globally.</span><br />
        <span>Currently steering the</span><br />
        <span>ship at <a href="/">Haptic</a></span><br />
      </div>
      <div><SpinningCross /></div>
    </div>
  )
}

export default Header;