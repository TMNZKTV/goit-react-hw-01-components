// Libraries
import React from "react";

// Components
import Profile from "./components/profile/Profile/Profile";
import Statistics from "./components/statistics/Statistics/Statistics";
import FriendList from "./components/friendlist/FriendList/FriendList";
import Transactions from "./components/transactions/Transactions/Transactions";

// Data
import user from "./components/profile/ProfileData/user.json";
import stats from "./components/statistics/StatsData/statistical-data.json";
import friends from "./components/friendlist/FriendsData/friendslist.json";
import transactions from "./components/transactions/TransactionsData/transactions.json";

// Styles
import "../src/styles.css";

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="upload stats" stats={stats} />

      <FriendList friends={friends} />

      <Transactions items={transactions} />
    </div>
  );
};
export default App;
