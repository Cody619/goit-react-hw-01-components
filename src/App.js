import './App.css'

import { Profile } from './profile/Profile'
import { Statistics } from './Statistics/Statistics'

import user from './user.json'
import stats from './stats.json'

import friends from './friends.json'
import { Friends } from './FriendList/FriendList'

import { Transaction } from './Transactions/TransactionHistory.js'
import transaction from './transaction.json'

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <br />
      <Statistics stats={stats} title="Upload stats" />
      <br />
      <Friends friends={friends} />
      <br />

      <Transaction items={transaction} />
    </div>
  )
}

export default App
