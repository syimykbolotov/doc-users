import React from "react";
import DataSearch from "./components/DataSearch/DataSearch";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users/Users";
import User from "./components/User/User";
import Search from "./components/Search/Search";

const App = () => {
  return (
    <div>
      <DataSearch />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/search/:usersName/:usersFirstName" element={<Search />} />
        <Route path="/user/pin/:pin" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
