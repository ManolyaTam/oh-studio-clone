import BulletPoint from "../common/BulletPoint"
import "./careers.css"
const Careers = () => {
  const openRoles = [
    {
      id: 1,
      title: "Senior Designer",
      location: "Remote/Hybrid",
      type: "Full-time",
    }
  ]
  return (
    <div id="careers" className="careers">
      <div className="headline">
        <BulletPoint> Working at Haptic</BulletPoint>
        <p className="careers-heading">Great work starts with <br /> great people — join us.</p>
      </div>
      <div className="open-roles">
        <BulletPoint> Open Roles</BulletPoint>
        {openRoles && openRoles.length > 0 ? (
          openRoles.map((role) => (
            <div
              key={role.id}
              className="open-role"
            >
              <h3>{role.title}</h3>
              <p>{role.location}</p>
              <p>{role.type}</p>
            </div>
          ))
        ) : (
          <p>No open roles at the moment.</p>
        )}
      </div>
    </div>
  )
}

export default Careers