// Ye component ko news me daala ha 
import React from 'react'

const NewsItem = (props)=>  {
  
    //creating props , it is also called destructuring
    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    return (
      <div>
        <div className="card my-2 bg-dark text-white ">
          <div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 0
        }}>
            <span className="badge rounded-pill bg-danger">
              {source}
            </span>

          </div>

          {/* agr imgurl null hua to  */}
          <img src={!imageUrl ? "https://macreports.com/wp-content/uploads/2020/06/cannot-load-photo.png" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text "><small className="text-light">by {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>

            {/*  href pe newsUrl objext daalege to redirect ho jayega ,,, target = "_blank" krne se new tab pe redirect hoga*/}
            <a href={newsUrl} target="_blank" rel="noopener noreferrer"  className="btn btn-light">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
