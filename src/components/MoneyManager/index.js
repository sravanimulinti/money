import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

import './index.css'

// eslint-disable-next-line
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

// Write your code here

class MoneyManager extends Component {
  state = {
    allData: [],
    balance: 0,
    title: '',
    amount: '',
    type: '',
    activeElement: transactionTypeOptions.optionId,
  }

  addIncome = () => {
    this.setState(prevState => ({balance: prevState.amount}))
  }

  onTitle = e => {
    this.setState({title: e.target.value})
  }

  onAmount = e => {
    this.setState({amount: e.target.value})
  }

  onType = e => {
    this.setState({type: e.target.value})
  }

  onAddItem = event => {
    event.preventDefualt()
    const {title, amount, type} = this.state

    const newform = {
      id: uuidv4(),
      links: title,
      name: amount,
      pass: type,
    }
    this.setState(prev => ({
      alldata: [...prev.alldata, newform],
      title: '',
      amount: '',
      type: '',
    }))
  }

  deleteList = id => {
    const {allData} = this.state
    this.setState({allData: allData.filter(del => del.id !== id)})
  }

  render() {
    // eslint-disable-next-line
    const {balance, title, amount, type, allData, activeElement} = this.state
    return (
      <div className="bg">
        <div className="bg1">
          <h1 className="heading">Hi, Richard</h1>
          <p className="para">
            Welcome back is you<span className="span1"> Money Manager</span>
          </p>
        </div>

        <div className="">
          <ul className="">
            {allData.map(eachItem => (
              <MoneyDetails key={eachItem.id} />
            ))}
          </ul>
        </div>
        <div className="bg3">
          <form onSubmit={this.onAddItem}>
            <div className="bg2">
              <h1 className="heading">Add Transaction</h1>
              <label className="" htmlFor="data-testid">
                Title
              </label>
              <input
                className=""
                id="data-testid"
                placeholder="Title"
                type="text"
                onChange={this.onTitle}
              />
              <label className="" htmlFor="data-testid">
                Salary
              </label>
              <input
                className=""
                id="data-testid"
                placeholder="Salary"
                type="text"
                onChange={this.onAmount}
              />
              <select id="data-testid" onChange={this.onType}>
                <option value="income">Incomes</option>
                <option value="expenses">Expenses</option>
              </select>
              <button className="btn" type="submit">
                Add
              </button>
            </div>
          </form>

          <div className="bg2">
            <h1 className="headline">History</h1>
            <div className="bgcolor">
              <p className="paragragh">Title</p>
              <p className="paragragh">Amount</p>
              <p className="paragragh">Type</p>
            </div>
            <ul className="">
              {allData.map(eachObj => (
                <TransactionItem
                  key={eachObj.id}
                  Element={eachObj}
                  deleteItem={this.deleteList}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
