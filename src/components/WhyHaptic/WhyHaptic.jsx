import CaroselItem from '../CaroselItem/CaroselItem'
import BulletPoint from '../common/BulletPoint'
import './why-haptic.css'

function WhyHaptic() {
  return (
    <div className="why-haptic">
      <div className="top">
        <BulletPoint>Why Haptic</BulletPoint>
        <p>Startups come to us when<br />
          they need a team that can<br />
          deliver real results.
        </p>
      </div>
      <div className="why-companies-container">
        <div className="why-companies">
          <CaroselItem
            companyName="Youtube"
            imagePath="/images/youtube.png"
            iconPath="/icons/youtube-icon.png"
            desc="Watch and share videos."
            key={6}
          />
          <CaroselItem
            companyName="Pinterest"
            imagePath="/images/pinterest.png"
            iconPath="/icons/pinterest-icon.png"
            desc="Discover visual ideas."
            key={5}
          />
        </div>
      </div>
    </div>
  )
}

export default WhyHaptic