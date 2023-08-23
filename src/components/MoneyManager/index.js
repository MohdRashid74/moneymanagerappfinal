import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amount: '',
    TransactionList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  onSubmit = event => {
    event.preventDefault()
    const {titleInput, amount, optionId, TransactionList} = this.state
    const text = transactionTypeOptions.find(
      eachtransaction => eachtransaction.optionId === optionId,
    )
    console.log(text)
    const {displayText} = text
    const newList = {
      id: v4(),
      Title: titleInput,
      Amount: amount,
      optionID: displayText,
    }
    this.setState(prevState => ({
      TransactionList: [...prevState.TransactionList, newList],
      titleInput: '',
      amount: '',
    }))
  }

  onChangeValueInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onSelectValue = event => {
    this.setState({optionId: event.target.value})
  }

  render() {
    const {titleInput, amount, TransactionList, optionId} = this.state

    return (
      <div className="bg-container">
        <div className="banner-container">
          <div>
            <h1 className="heading">Hi,Richard</h1>
            <p className="pargraph">
              Welcome back to your <span className="span">Money Manager</span>
            </p>
          </div>
        </div>
        <MoneyDetails />
        <div className="Transaction-History-container">
          <div className="input-container">
            <h1 className="heading">Add Transaction</h1>
            <form className="form" onSubmit={this.onSubmit}>
              <label className="label" htmlFor="label-title">
                TITLE
              </label>
              <br />
              <input
                className="input"
                type="search"
                placeholder="title"
                id="label-input"
                onChange={this.onChangeValueInput}
                value={titleInput}
              />
              <br />
              <label className="label" htmlFor="amount-label">
                AMOUNT
              </label>
              <br />
              <input
                className="input"
                id="amount-label"
                placeholder="amount"
                onChange={this.onChangeAmount}
                value={amount}
              />
              <br />
              <label className="label" htmlFor="Type">
                TYPE
              </label>
              <br />
              <select
                className="input"
                id="Type"
                onChange={this.onSelectValue}
                value={optionId}
              >
                {transactionTypeOptions.map(eachItem => (
                  <option>{eachItem.displayText}</option>
                ))}
              </select>
              <br />
              <button className="button" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="History-container">
            <h1 className="heading">History</h1>
            <ul className="special-container">
              <li className="list-2">
                <p className="pargraph2">Title</p>
                <p className="pargraph2">Amount</p>
                <p className="pargraph2">Type</p>
              </li>

              {TransactionList.map(each => (
                <TransactionItem TranxactionList={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
