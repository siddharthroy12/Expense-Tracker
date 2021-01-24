export type Transaction = {
    id: number,
    text: String,
    amount: number
}

export type State =  {
    transactions: Array<Transaction>
}