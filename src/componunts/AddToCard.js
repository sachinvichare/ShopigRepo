import React, { useEffect } from "react"
import './AddToCardCss.css'

const AddToCard = ({ prodState }) => {
    const getAddToCart =  prodState?.cartDetails?.map(value => {
            return <div>
                <div className="thum">
                    <img src={value.thumbnail} />
                    <span>{value.title}</span>
                    <span>{value.price}</span>
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
        })
    
    return (
        <div className="addCardContainer">
            {getAddToCart}
        </div>
    )
}



export default AddToCard