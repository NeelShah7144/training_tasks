import React from 'react'

export default function NewsCard(props) {
  return (
    <div>
        <div className="card bg-secondary text-light" style={{width: "18rem"}}>
  <img src={props.imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}...</h5>
    <p className="card-text">{props.desc}...</p>
    <a href={props.mainUrl} target='_blank' className="btn btn-primary">Read More</a>
  </div>
</div> 
    </div>
  )
}
