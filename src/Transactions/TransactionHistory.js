import React from 'react'
import classes from './transaction.module.css'
import PropTypes from 'prop-types'

export const Transaction = (props) => {
  const { items } = props

  return (
    <table className={classes.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

Transaction.propTypes = {
  items: PropTypes.array,
}
