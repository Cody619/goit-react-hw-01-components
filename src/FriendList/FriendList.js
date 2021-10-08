import React from 'react'
import classes from './friends.module.css'
import { FriendListItem } from './FriendListItem'
import PropTypes from 'prop-types'

export const Friends = (props) => {
  const { friends } = props

  return (
    <ul className={classes.friend_list}>
      {friends.map((item) => {
        return (
          <FriendListItem
            key={item.id}
            name={item.name}
            avatar={item.avatar}
            isOnline={item.isOnline}
          />
        )
      })}
    </ul>
  )
}

Friends.propTypes = { friends: PropTypes.array }
