import { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0.0)

    const { dispatch, state: { transactions } } = useContext(GlobalContext)
    
    const [nextId, setNextId] = useState(transactions.length > 0 ? transactions[transactions.length -1].id : 0)

    const addTransaction = () => {
        setNextId(nextId+1)
        if (text.length > 0 && amount !== 0) {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: {
                    id: nextId,
                    text,
                    amount
                }
            })
            setText('')
            setAmount(0.0)
        }
    }

    return (
        <>
        <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"
            id="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
            placeholder="Enter amount..." />
        </div>
        <button className="btn" onClick={e => {e.preventDefault();addTransaction()}}>Add transaction</button>
      </form>
        </>
    )
}

export default AddTransaction