import { createContext, useReducer } from "react"

// initialstate
const initialState = {
    transaction:[
        {id:1,text:'flower',amount:-20},
        {id:2,text:'book',amount:200},
        {id:3,text:'cloth',amount:300},
        {id:3,text:'rice',amount:-200}
    ]
}

// createContext
export const globalContext = createContext()

// create global provider
export const globalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer)
}