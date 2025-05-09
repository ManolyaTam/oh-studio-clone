const BulletPoint = ({ children }) => {
  return (
    <div
      style={
        {
          fontSize: 16,
          display: "flex",
          alignItems: "center",
          gap: 10
        }}
    >
      <div style={{fontSize: 30}}>&#x2022;</div> 
      {children}
      </div>
  )
}

export default BulletPoint