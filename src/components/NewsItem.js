import React from 'react'

const NewsItem = (props) => {
    let {title , description , imageUrl , url , source , date, author} = props;
    return (
      <>
      <div>
  <div className="card my-2" style={{width: "18rem"}}>
    <div style={{display:"flex" , justifyContent:"flex-end" , position:"absolute" , right: "0"}}>
       <span className=" badge rounded-pill bg-danger">
    {source}
  </span> 
      </div>   
  <img src={imageUrl===null?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DL7N2NUNJ5HJRIWXK3VITMYMNU.png&w=14409":imageUrl} className="card-img-top " alt="Image"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {author===null?"Unknown":author} At {date = new Date().toGMTString()}</small></p>

    <a href={url} target='_blank' className="btn btn-sm btn-dark">Read More</a>

  </div>
</div>
      </div>
    </>
    )
  }
  export default NewsItem;
