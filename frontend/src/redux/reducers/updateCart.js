const initialState=[]

const changeTheValue=(state=initialState,action)=>{
    const a=(action.payload);
    // console.log(a.target.name)
    switch(action.type){
        case "ADDIT":
                return [...state,a];
                case "DELIT":
                    const remainingItems= state.filter((item)=>item.name!==a.name)
                    return [...remainingItems]

        default:return state;
    }
}

export default changeTheValue;