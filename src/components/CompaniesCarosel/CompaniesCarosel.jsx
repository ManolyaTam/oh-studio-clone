import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGoogle, faApple, faSlack, faStackOverflow, faGithub,
  faDiscord, faMicrosoft, faAmazon, faFacebook, faTwitter,
  faLinkedin, faAirbnb, faUber, faInstagram, faSpotify
} from '@fortawesome/free-brands-svg-icons'

import "./companies-carosel.css"

const CompaniesCarosel = () => {
  const icons = [
    faGoogle, faApple, faSlack, faStackOverflow, faGithub, faDiscord,
    faMicrosoft, faAmazon, faFacebook, faTwitter, faLinkedin, faAirbnb, faUber, faInstagram, faSpotify
  ];

  return (
    <div className="companies-carosel">
      <div className="scrolling-track">
        {[...icons, ...icons].map((icon, index) => (
          <FontAwesomeIcon
            key={index}
            icon={icon}
            className="company-icon"
            size='2x'
          />
        ))}
      </div>
    </div>
  );
}

export default CompaniesCarosel;
