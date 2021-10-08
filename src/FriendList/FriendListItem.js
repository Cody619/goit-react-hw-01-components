import React from 'react'
import classes from './friends.module.css'
import PropTypes from 'prop-types'
export const FriendListItem = (props) => {
  const { name, avatar, isOnline } = props

  return (
    <li className={classes.item}>
      <span
        className={isOnline ? classes.status_online : classes.status_offline}
      />
      <img
        className={classes.avatar}
        src={avatar}
        alt="not avatarian"
        width="48"
      />
      <p className={classes.name}>{name}</p>
    </li>
  )
}
FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
}
