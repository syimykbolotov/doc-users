import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Userss } from "../../API";

const Search = () => {
  const { usersName, usersFirstName, pin } = useParams();
  const nav = useNavigate();
  const [search, setSearch] = useState([]);

  useEffect(() => {
    if (pin) {
      const result = Userss.filter((u) => u.pin.toString() === pin);
      setSearch(result);
    } else {
      const results = Userss.filter(
        (u) =>
          u.lastName.toLowerCase() === usersName.toLowerCase() &&
          u.name.toLowerCase() === usersFirstName.toLowerCase()
      );
      setSearch(results);
    }
  }, [usersName, usersFirstName, pin]);

  return (
    <div id="users">
      <div className="container">
        <h1>SEARCH</h1>
        <div className="users">
          {search.length > 0 ? (
            search.map((u, idx) => (
              <div className="num" key={u.id}>
                <h2>{idx + 1}</h2>
                <h3 onClick={() => nav(`/user/${u.id}`)}>
                  {u.name} {u.lastName}
                </h3>
              </div>
            ))
          ) : (
            <p>No users found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
