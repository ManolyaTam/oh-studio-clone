const BulletPoint = ({ children }) => {
  return (
    <p
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
      </p>
  )
}

export default BulletPoint