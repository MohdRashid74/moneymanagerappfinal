import './index.css'

const TransactionItem = props => {
  const {TranxactionList} = props
  const {Title, Amount, id, optionID} = TranxactionList
  return (
    <ul className="un-list-4">
      <li className="list-4">
        <p>{Title}</p>
        <p>{Amount}</p>
        <p>{optionID}</p>
        <button className="button1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="delete-image"
            alt="delete"
          />
        </button>
      </li>
    </ul>
  )
}
export default TransactionItem
