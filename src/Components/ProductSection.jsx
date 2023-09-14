import React from 'react'
import ProductCard from './ProductCard'
import {BsFlower1} from 'react-icons/bs'
export default function ProductSection(props) {

  return (
<>
<div className="container my-5">
    <h2 className='text-center my-5'>{props.sectionTitle} <BsFlower1 size={40} color='purple'/></h2>
    <div className="row gap-5">
    <ProductCard BrandName="J.J" collectionName="Summer" categoryName="Female"/>
    <ProductCard BrandName="SanaSafinaz" collectionName="Spring" categoryName="Female"/>
    <ProductCard BrandName="Dinners" collectionName="Winter" categoryName="Female"/>
    <ProductCard BrandName="BeachTree" collectionName="Summer" categoryName="Female"/>
    <ProductCard BrandName="Maria.B" collectionName="Summer" categoryName="Female"/>


        
    </div>
</div>



</>

    )
}
