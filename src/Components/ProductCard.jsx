import React from 'react'

export default function ProductCard(props) {
  return (
    <div className='col-md-3'>
    <div className="card" >
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.BrandName}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{props.collectionName}</h6>
    <p className="card-text">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor sint adipisci consectetur!
    </p>
    <a href="#" className="btn btn-primary">
      {props.categoryName}
    </a>
  </div>
</div>

    
    </div>
  )
}
