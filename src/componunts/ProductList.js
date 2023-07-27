import React, { useEffect } from "react";
import './ProductListCss.css'


const ProductList = ({ prodState, prodDispatch }) => {
    const addToCart = (value) => {
        prodDispatch({ type: 'AddToCart', paylod: value })
    }

    const removeFromCart = (value) => {
        const getFilterData = prodState?.cartDetails?.filter(v => v.id !== value.id);
        prodDispatch({ type: 'removeFromCart', paylod: getFilterData })
    }

    const loopProdtList = prodState?.product?.map((value) => {
        return <div className="prodItem">
            <div className="imgWrap"><img src={value.images[0]} /></div>
            <div>{value.title}</div>
            <div>{value.description}</div>
            {prodState?.cartDetails?.find(p => p.id === value.id) ?
                <button onClick={() => removeFromCart(value)}>Remove From Cart</button> :
                <button onClick={() => addToCart(value)}>add To Cart</button>
            }

        </div>
    })

    return (
        <div className="prodContainer">
            {loopProdtList}
        </div>
    )
}

export default ProductList