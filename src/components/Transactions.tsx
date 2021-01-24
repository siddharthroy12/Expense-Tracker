import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

const Transactions = () => {
    const { state: { transactions } } = useContext(GlobalContext)
    localStorage.setItem('transactions', JSON.stringify(transactions))
    return (
        <>
        <h3>History</h3>
        <ul className="list">
            {transactions.map(transaction => (
                <Transaction key={transaction.id+''} transaction={transaction}/>
            ))}
        </ul>
        </>
    )
}

export default Transactions