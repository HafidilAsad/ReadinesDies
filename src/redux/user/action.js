export const incrementCunter = (counter= 0) => async (dispatch)=>{
    axios
    dispatch({
        type:'success',
        payload:{
            counter:counter
        }
    })
}
export const updateLoading = ()=>async(dispatch)=>{
    dispatch({
        type:'loading',
        payload:{
            loading:true
        }
    })
}