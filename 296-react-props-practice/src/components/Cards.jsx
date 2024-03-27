function Cards(props){
  return (
    <div>
        <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img"
            src={props.src}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p className="info">{props.num}</p>
          <p className="info">{props.mail}</p>
        </div>
      </div>
    </div>
  )
}

export default Cards;