import './App.css'

import { Profile } from './profile/Profile'
import { Statistics } from './Statistics/Statistics'

import user from './data/user.json'
import stats from './data/stats.json'

import friends from './data/friends.json'
import { Friends } from './FriendList/FriendList'

import { Transaction } from './Transactions/TransactionHistory.js'
import transaction from './data/transaction.json'

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
