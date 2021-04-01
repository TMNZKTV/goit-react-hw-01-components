// Libraries
import React from "react";

// Components
import Profile from "./components/profile/Profile/Profile";
import Statistics from "./components/statistics/Statistics/Statistics";
import FriendList from "./components/friendlist/FriendList/FriendList";
import Transactions from "./components/transactions/Transactions/Transactions";

// Data
import user from "../src/Data/user.json";
import stats from "../src/Data/statistical-data.json";
import friends from "../src/Data/friendslist.json";
import transactions from "../src/Data/transactions.json";

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
