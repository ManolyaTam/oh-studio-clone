import "./partners.css";
import BulletPoint from "../common/BulletPoint";

const partnersData = [
  {
    id: 1,
    name: "Momentify",
    details: "Brand, Web, Product",
    year: 2024,
    image: "https://framerusercontent.com/images/WtDkhEjQ1TNDVDYNkBVhFoJnfU.jpg?scale-down-to=1024",
  },
  {
    id: 2,
    name: "Norby",
    details: "Motion",
    year: 2025,
    image: "https://framerusercontent.com/images/WtDkhEjQ1TNDVDYNkBVhFoJnfU.jpg?scale-down-to=1024",
  },
  {
    id: 3,
    name: "Spark",
    details: "Brand, Web, Product",
    year: 2024,
    image: "https://framerusercontent.com/images/5z0ZyBUqdAoedRuSZyNWGGNEzLs.jpg?scale-down-to=1024",
  },
  {
    id: 4,
    name: "Google",
    details: "Web, Product",
    year: 2024,
    image: "https://framerusercontent.com/images/WtDkhEjQ1TNDVDYNkBVhFoJnfU.jpg?scale-down-to=1024",
  },
  {
    id: 5,
    name: "Harvard",
    details: "Brand, Web, Product",
    year: 2025,
    image: "https://framerusercontent.com/images/WtDkhEjQ1TNDVDYNkBVhFoJnfU.jpg?scale-down-to=1024",
  },
  {
    id: 6,
    name: "Neon Horizons",
    details: "Brand, Product",
    year: 2025,
    image: "https://framerusercontent.com/images/WtDkhEjQ1TNDVDYNkBVhFoJnfU.jpg?scale-down-to=1024",
  },
];

const Partners = () => {
  return (
    <div className='partners'>
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
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Partners;
