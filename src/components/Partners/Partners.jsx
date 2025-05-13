import "./partners.css";
import BulletPoint from "../common/BulletPoint";
import { partnersData } from "../../services/partnersData";

const Partners = () => {
  return (
    <div id="projects" className='partners'>
      <BulletPoint>Partners + Projects</BulletPoint>
      <ul>
        {partnersData.map((partner) => (
          <li key={partner.id}>
            <div className="partner">
              <h3>{partner.name}</h3>
              <p className="partner-details">
                <span>{partner.details}</span><span>{partner.year}</span>
              </p>
              <img
                src={partner.image}
                alt={partner.name}
                className="partner-image"
                width="500px"
                height="370px"
                data-image={partner.image}
                data-order={partner.order}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Partners;
