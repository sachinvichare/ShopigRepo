const prodReducer = (state, paylod) => {
    console.log('state', state);
    console.log('paylod', paylod);
    switch(paylod.type){
        case 'mainData': {
            console.log(paylod);
            return {...state, product:paylod.paylod}
        }
        case 'AddToCart': {
            const getAddlist = state.cartDetails
            getAddlist.push(paylod.paylod);
            console.log('getAddlist', getAddlist);
            return {...state, cartDetails: getAddlist}
        }
        case 'removeFromCart' : {
            return {...state, cartDetails: paylod.paylod}
        }
    }
}

export default prodReducer