import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/Action";
import { useNavigate } from "react-router-dom";
import { Userss } from "../../API";

const Users = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { user } = useSelector((s) => s.user);
  console.log(user);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div id="users">
      <div className="container">
        <div className="users">
          {Userss.map((u, idx) => (
            <div className="num" key={u.id}>
              <h2>{idx + 1}</h2>
              <h3 onClick={() => nav(`/user/${u.id}`)}>{u.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
