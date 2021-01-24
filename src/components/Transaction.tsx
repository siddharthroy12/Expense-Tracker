import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction as TransactionType } from '../context/types'

type TransactionProp = {
    transaction:TransactionType
}

const Transaction = ({ transaction }:TransactionProp) => {
    const { dispatch } = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : '+'

    const deleteTransaction = (id:number) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        })
    }

    return (
        <li className={sign === '-' ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={e => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}

export default Transaction