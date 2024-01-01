/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react"
import { AppReducer } from "./reducer";

// initialstate
const initialState = {
    transactions:[
        {id:1,text:'flower',amount:-20},
        {id:2,text:'book',amount:200},
        {id:3,text:'cloth',amount:300},
        {id:4,text:'rice',amount:-200}
    ]
}

// createContext
export const globalContext = createContext()

// create global provider
export const GlobalProvider = ({children})=>{
    const deleteTransaction =(id)=>{
        dispatch({type:'DELETE_TRANSACTION',payload:id})
    }

    const [state,dispatch] = useReducer(AppReducer, initialState)
    return (
        <globalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction
        }}>
            {children}
        </globalContext.Provider>
    )
}
export default GlobalProvider