export const incrementCunter = (counter= 0) => async (dispatch)=>{
    
    dispatch({
        type:'success',
        payload:{
            counter:counter
        }
    })
}
export const updateLoading = (loading=false)=>async(dispatch)=>{
    dispatch({
        type:'loading',
        payload:{
            loading:loading
        }
    })
}