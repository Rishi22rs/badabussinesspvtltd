const Cards=({src,content})=>{
  return(
    <div className="m-3 p-3 d-flex flex-column align-items-center my-cards" style={{maxWidth:250}}>
      <img className="img-fluid mt-4" src={src} width={120}/>
      <p className="mt-4 p-2 text-wrap">{content}</p>
    </div>
  )
}

export default Cards