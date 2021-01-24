import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import { State } from './types'

let transactions:any = localStorage.getItem('transactions')

if (transactions) {
    transactions = JSON.parse(transactions)
} else {
    transactions = []
}

const initialState:State = {
    transactions: transactions
}

export const GlobalContext = createContext<{state:State, dispatch:React.Dispatch<any>}>({
    state:initialState,
    dispatch: () => null
})

export const GlobalProvider = (props:any) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (<GlobalContext.Provider value={{
        state: state,
        dispatch
    }}>
        {props.children}
    </GlobalContext.Provider>)
}