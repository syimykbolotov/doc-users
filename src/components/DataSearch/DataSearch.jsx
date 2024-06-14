import React, { useState } from "react";
import { MdPersonSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const DataSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const nav = useNavigate();
  console.log(inputValue);
  return (
    <div id="dataSearch">
      <div className="container">
        <div className="dataSearch">
          <div className="dateInput">
            <label>ПИН</label>
            <input type="text" />
          </div>
          <div className="dateInput">
            <label>Фамилия</label>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
            />
          </div>
          <div className="dateInput">
            <label>Имя</label>
            <input type="text" />
          </div>
          <button onClick={() => nav("/users")}>
            <MdPersonSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataSearch;
