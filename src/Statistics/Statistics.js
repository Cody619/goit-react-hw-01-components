import React from 'react'
import PropTypes from 'prop-types'
import classes from './statistics.module.css'

export const Statistics = (props) => {
  const { title, stats } = props

  return (
    <section className={classes.statistics}>
      {title && <h2 className={classes.title}>{title}</h2>}

      <ul className={classes.stat_list}>
        {stats.map((item) => {
          return (
            <li key={item.id}>
              <span className={classes.label}>{item.label}</span>
              <span className={classes.percentage}>{item.percentage}%</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
}
