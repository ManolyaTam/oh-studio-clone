import "./carosel-item.css";
const apiPath = "http://localhost:3001"
const CaroselItem = ({ iconPath, companyName, desc, imagePath }) => {

  return (
    <div className="carosel-item">
      <img
        src={apiPath + imagePath}
        width={690}
        height={797}
        alt={`${companyName}`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/placeholder-img.png";
        }}
        className="carosel-item-image"
      />
      <div className="carosel-item-header">
        <img
          src={apiPath + iconPath}
          width={40}
          height={40}
          alt={`${companyName} icon`}
          className="carosel-item-icon"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/placeholder-img.png";
          }}
        />
        <div className="carosel-item-info">
          <h3 className="company-name">{companyName}</h3>
          {desc && <p className="description">{desc}</p>}
        </div>
      </div>
    </div>
  );
};

export default CaroselItem;
