const initialState = {
    nama:'',
    umur:19,
}

export default function reducer(state=initialState,action){
    switch (action.type) {
        case 'nama':
            return{
                ...state,
                nama:action.payload.nama
            }
        case 'umur':
            return{
                ...state,
                umur:action.payload.umur
            }
    
        default:
            return state;
    }
}