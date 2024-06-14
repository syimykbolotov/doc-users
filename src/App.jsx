import React from "react";
import DataSearch from "./components/DataSearch/DataSearch";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users/Users";
import User from "./components/User/User";

const App = () => {
  return (
    <div>
      <DataSearch />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
