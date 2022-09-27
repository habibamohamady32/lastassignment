let initialState={
    loader:false,
    favorties:[]
}

export default function favouriteReducer(state=initialState,action){
    switch (action.type) {
      
        case 'SET_Favorite' :
            let isInFavorite=state.favorties.findIndex(
                (product)=>product.id==action.payload.id
            )
            if(isInFavorite===-1){
                state.favorties.push(action.payload)
            }
            return state;
    
        default:
            return state;
            
    }

}