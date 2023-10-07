// Write your code here
import './index.css'

const TransactionItem = props => {
  // eslint-disable-next-line
  const {Element, deleteItem} = props
  const {links, name, pass, id} = deleteItem

  const deleteElement = () => {
    deleteItem(id)
  }
  return (
    <div>
      <li className="">
        <div className="bgcolor">
          <p className="paragragh">{links}</p>
          <p className="paragragh">{name}</p>
          <p className="paragragh">{pass}</p>
          <button className="button" type="button" onClick={deleteElement}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
              className="image"
              alt="delete"
            />
          </button>
        </div>
      </li>
    </div>
  )
}
export default TransactionItem
