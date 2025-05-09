import "./spinning-cross.css";

const SpinningCross = () => {
  return (
    <div className="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="26" height="26" preserveAspectRatio="xMidYMid slice" className="spinning-cross">
        <g>
          <path
            d="M156.74,156.77 L643.26,643.23
         M156.77,643.24 L643.23,156.74
         M56,400 L744,400
         M400,56 L400,744"
            stroke="black"
            strokeWidth="176"
            fill="none"
            strokeLinecap="butt"
          />
        </g>
      </svg>
    </div>
  )
}

export default SpinningCross;