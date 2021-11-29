const Cards3=({src,name,prof})=>{
  return(
    <div className="d-flex flex-column justify-content-center align-items-center" style={{border:"1px solid #F9CC22",maxWidth:150,wordWrap:"break-word"}}>
      <img className="img-fluid mt-1 p-3" src={src} alt="img" width={70}/>
      <p style={{textAlign:'center',color:'#F9CC22',marginTop:10,marginBottom:0}}>{name}</p>
      <p style={{textAlign:'center',color:'white'}}>{prof}</p>
    </div>
  )
}

export default Cards3