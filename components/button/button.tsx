const Button = ({title, border, bgcolor, textcolor, svg, padding}:any) => {
   let buttonstyle = {
    backgroundColor: `${bgcolor}`,
    color: `${textcolor}`,
    padding: `10px ${!padding?"7rem":padding}`,
    borderRadius: "20px",
    fontWeight: "bold",
    display: "flex",
    gap: "15px",
    border: `${border}`
   } 
  return (
    <>
      <button className="hover:scale-105" style={buttonstyle}>
       {svg} {title}
      </button>
    </>
  )
}

export default Button
