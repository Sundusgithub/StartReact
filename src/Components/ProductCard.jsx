import React, { useState } from 'react'

export default function ProductCard(props) {
  const [count, setCount] = useState(0) ;
  const increaseVal =() => setCount (count+1)
  const decreaseVal =() => setCount (count-1)

//   const decreaseVal =() => {
//   if (count>0) {
//     setCount (count-1)

//   }
//   else { 
//     setCount(0)
//   }
// }
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

  <div className="container text-center">
    {
    count>0 ? (
      <>
           <button className="btn-btn-dark mx-2" onClick={increaseVal}>+</button>
           {count}
            <button className="btn-btn-dark mx-2" onClick={decreaseVal}>-</button>
        </>
    ) :(<button className="btn-btn-dark mx-2" onClick={increaseVal}>Add To Cart</button>)
}
        <div>
       
            </div>
    </div>
</div>

    
    </div>

    
  )
}
