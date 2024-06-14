import React, { useState } from "react";
import { MdPersonSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const DataSearch = () => {
  const [inputValuePin, setInputValuePin] = useState("");
  const [inputValueName, setInputValueName] = useState("");
  const [inputValueLastName, setInputValueLastName] = useState("");
  const nav = useNavigate();

  const btn = () => {
    if (inputValueName === "" || inputValueLastName === "") {
      alert("toltur");
    } else {
      nav("/users");
    setInputValueLastName("");
    }
  };
  return (
    <div id="dataSearch">
      <div className="container">
        <div className="dataSearch">
          <div className="dateInput">
            <label>ПИН</label>
            <input
              onChange={(e) => setInputValuePin(e.target.value)}
              type="text"
            />
          </div>
          <div className="dateInput">
            <label>Фамилия</label>
            <input
              onChange={(e) => setInputValueLastName(e.target.value)}
              type="text"
            />
          </div>
          <div className="dateInput">
            <label>Имя</label>
            <input
              onChange={(e) => setInputValueName(e.target.value)}
              type="text"
            />
          </div>
          <button onClick={() => btn()}>
            <MdPersonSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataSearch;
