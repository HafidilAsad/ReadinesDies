const initialState = {
    loading:false,
    counter:0,
}

export default function reducer(state=initialState,action){
    switch (action.type) {
        case 'loading':
            return{
                ...state,
                loading:action.payload.loading
            }
        case 'success':
            return{
                ...state,
                counter:action.payload.counter
            }
    
        default:
            return state;
    }
}