

const Card = ({ children, reverse }) => {

   
  return (
    <div className={`card ${reverse ? 'reverse' : "no-reverse"}`}>
        { children }
    </div>
  )

//   return (
//     <div className='card' style={{
//         backgroundColor: reverse ? "rgba(0, 0, 0, 0.867)" : "#ffffff",
//         color: reverse ? "#ffffff" : "#333333"
//     }}>
//         {children}
//     </div>
//   )
}

export default Card