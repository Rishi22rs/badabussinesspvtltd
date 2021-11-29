const Cards2=({MyModal})=>{
  return(
    <div className="col-md-4 d-flex flex-column justify-content-between align-items-start ml-2 mr-2 p-4" style={{background:"#EBF4FB",maxWidth:"360px"}}>
      <img src="https://assets.badabusiness.com/home/images/program_icon_1.png" alt="img" width={150}/>
      <h4 className="mt-3" style={{fontWeight:500,fontSize:"1.5rem"}}>Foundation Course</h4>
      <p style={{fontWeight: 500}}>Develop Foundational skills critical for business via Structured Business Frameworks, Case-studies, and in-depth Video Tutorials that support the unique needs of Entrepreneurs and Solopreneurs.</p>
      <p style={{fontWeight: 600,fontSize:"1.2rem"}}>Benifits</p>
      <ul className="d-flex flex-column justify-content-center ml-5 align-items-center" style={{width:"200px",marginTop:-20}}>
        <li style={{fontWeight: 400}}>Live Sessions with Dr. Vivek Bindra.</li>
        <li style={{fontWeight: 400}}>Live Sessions with Dr. Vivek Bindra.</li>
        <li style={{fontWeight: 400}}>Live Sessions with Dr. Vivek Bindra.</li>
      </ul>
      <MyModal className="why-btn">Enquire Now</MyModal>
    </div>
  )
}

export default Cards2