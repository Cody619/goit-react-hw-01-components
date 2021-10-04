import React from 'react'
import classes from './friends.module.css'

export const Friends = (props) => {
  const { friends } = props
  return (
    <ul className={classes.friend_list}>
      {friends.map((item) => {
        return (
          <li className={classes.item} key={item.id}>
            <span
              className={
                item.isOnline ? classes.status_online : classes.status_offline
              }
            />
            <img
              className={classes.avatar}
              src={item.avatar}
              alt="not avatarian"
              width="48"
            />
            <p className={classes.name}>{item.name}</p>
          </li>
        )
      })}
    </ul>
  )
}
