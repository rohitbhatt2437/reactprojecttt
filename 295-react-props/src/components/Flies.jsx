function Flies(props){
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img}
      alt="avatar_img"/>
      <p>{props.num}</p>
      <p>{props.mailw}</p>
    </div>
  )
}

export default Flies;