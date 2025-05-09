import BulletPoint from "../common/BulletPoint"
import { pricingOptions } from "./pricingOptions"
import PricingOption from "../PricingOptions/PricingOption.jsx"
import "./pricing.css"

const Pricing = () => {
  return (
    <div id="pricing" className="pricing">
      <div
        className="heading"
      >
        <BulletPoint> Pricing + Contact</BulletPoint>
      </div>
      <div className="pricing-options">
        {pricingOptions && pricingOptions.length ?
          pricingOptions.map((option) => (
            <PricingOption
              key={option.id}
              icon={option.icon}
              type={option.type}
              title={option.title}
              desc={option.description}
              price={option.price}
              isMonthly={option.isMonthly}
              features={option.features}
            />
          )) : null}
      </div>
    </div>
  )
}

export default Pricing