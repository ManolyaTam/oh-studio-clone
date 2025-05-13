import "./partners.css";
import BulletPoint from "../common/BulletPoint";

const Partners = () => {

  return (
    <div className='partners'>
      <BulletPoint>Partners + Projects</BulletPoint>
      <ul>
        <li>
          <div className="partner">
            <h3>Momentify</h3>
            <p className="partner-details"><span>Brand, Web, Product</span> <span>2024</span></p>
          </div>
        </li>
        <li>
          <div className="partner">
            <h3>Norby</h3>
            <p className="partner-details"><span>Motion</span> <span>2025</span></p>
          </div>
        </li>
        <li>
          <div className="partner">
            <h3>Spark</h3>
            <p className="partner-details"><span>Brand, Web, Product</span> <span>2024</span></p>
          </div>
        </li>
        <li>
          <div className="partner">
            <h3>Google</h3>
            <p className="partner-details"><span>Web, Product</span> <span>2024</span></p>
          </div>
        </li>
        <li>
          <div className="partner">
            <h3>Harvard</h3>
            <p className="partner-details"><span>Brand, Web, Product</span> <span>2025</span></p>
          </div>
        </li>
        <li>
          <div className="partner">
            <h3>Neon Horizons</h3>
            <p className="partner-details"><span>Brand, Product</span> <span>2025</span></p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Partners