import "./pricing-option.css";

const PricingOption = ({ icon, type, title, desc, price, isMonthly, features }) => {
  const middleIndex = Math.ceil(features.length / 2);
  const firstHalf = features.slice(0, middleIndex);
  const secondHalf = features.slice(middleIndex);
  
  return (
    <div className="pricing-option">
      {/* header */}
      <div className="top">
        <div className="pricing-option-header">
          <img src={icon} alt={type} />
          <p className="tag">{type}</p>
        </div>
        {/* general */}
        <div className="option-title">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
      {/* price */}
      <p className="price">{price}<span>{isMonthly ? "/Month" : null}</span></p>
      <button className="price-button">Book a call</button>
      {/* features */}
      <div className="features-grid">
        <ul>
          {firstHalf.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <ul>
          {secondHalf.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PricingOption