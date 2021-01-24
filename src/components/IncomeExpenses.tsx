import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {
    const { state : { transactions } } = useContext(GlobalContext)
    
    const income = Number(transactions.reduce((acc, item) => {
        if (item.amount > 0) {
            return acc += item.amount
        } else {
            return acc
        }
    }, 0).toFixed(2))

    const expense = Number(transactions.reduce((acc, item) => {
        if (item.amount < 0) {
            return acc += item.amount
        } else {
            return acc
        }
    }, 0).toFixed(2))

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses