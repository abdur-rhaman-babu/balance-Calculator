export const AppReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_TRANSACTION':
        return {
            ...state,
            transactions: [state.transaction, action.payload]
        }
        case 'DELETE_TRANSACTION':
        return {
            ...state,
            transactions: state.transactions.filter((transaction)=>transaction.id !==action.payload)
        }


        default:
            return state
    }
}