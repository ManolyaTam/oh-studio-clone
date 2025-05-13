import "./job-card.css";

const JobCard = () => {
  return (
    <div className="job-card">
      <img
        src="/images/hiring.png"
        alt="Hiring Logo"
        className="logo"
      />
      <div className="info">
        <p className="hiring">Hiring</p>
        <h2 className="title">Senior Designer</h2>
      </div>
      <button className="plus-btn">+</button>
    </div>
  );
};

export default JobCard;
