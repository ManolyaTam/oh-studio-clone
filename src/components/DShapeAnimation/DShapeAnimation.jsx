import "./d-shape-animation.css";

const DShapeAnimation = () => {
  return (
    <div className="animation-wrapper">
      <div className="queue">
        {[...Array(20)].map((_, i) => (
          <div className="box" key={i} style={{ zIndex: 20 - i }}>
            <div className="circle"></div>
          </div>
        ))}
        {/* duplicate for seamless loop */}
        {[...Array(20)].map((_, i) => (
          <div className="box" key={`clone-${i}`} style={{ zIndex: 20 - i }}>
            <div className="circle"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DShapeAnimation;
