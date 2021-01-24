import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const { state : { transactions } } = useContext(GlobalContext)
    const total = Number(transactions.reduce((acc, item) => (acc += item.amount), 0).toFixed(2))
    const sign = total < 0 ? '-' : '+'
    return (
        <>
            <h4>Your Balance</h4>
            <h1>{sign === '-' && '-'}${Math.abs(total)}</h1>
        </>
    )
}

export default Balance