export function setLoader(loderData){
    return {
        type:'SET_Loader',
        payload:loderData


    }
}

export function setFavorite(toFav){
    return {
        type:'SET_Favorite',
        payload:toFav


    }
}
