import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo"><img src="/images/haptic.png" alt="haptic" /></div>
      <div className="footer-info">
        <div className="links">
          <div>
            <p>Learn More</p>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#projects">Work</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>
          <div>
            <p>Follow Us</p>
            <ul>
              <li><a target="_blank" href="http://linkedin.com">LinkedIn</a></li>
              <li><a target="_blank" href="http://instagram.com">Instagram</a></li>
              <li><a target="_blank" href="http://x.com">X</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">Haptic © 2025</div>
      </div>
    </div>
  )
}

export default Footer
