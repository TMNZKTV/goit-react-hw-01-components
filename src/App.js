import React from "react";
import Profile from "./components/profile/Profile";
import user from "./components/profile/user.json";

import Statistics from "./components/statistics/Statistics";
import stats from "./components/statistics/statistical-data.json";

import FriendList from "./components/friendlist/FriendList";
import friends from "./components/friendlist/friendslist.json";

import Transactions from "./components/transactions/Transactions";
import transactions from "./components/transactions/transactions.json";

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
