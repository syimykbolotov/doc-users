import React, { useState } from "react";
import { MdPersonSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { TiHome } from "react-icons/ti";
const DataSearch = () => {
  const [inputValuePin, setInputValuePin] = useState("");
  const [inputValueName, setInputValueName] = useState("");
  const [inputValueLastName, setInputValueLastName] = useState("");
  const nav = useNavigate();

  const btn = () => {
    if (inputValueName === "" || inputValueLastName === "") {
      alert("Заполните Поле !!!");
    } else {
      nav(`/search/${inputValueLastName}/${inputValueName}`);
      setInputValueLastName("");
      setInputValueName("");
    }
  };

  const searchByPin = () => {
    if (inputValuePin === "") {
      alert("Заполните Поле !!!");
    } else {
      nav(`/user/pin/${inputValuePin}`);
      setInputValuePin("");
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
              value={inputValuePin}
            />
          </div>
          <div className="dateInput">
            <label>Фамилия</label>
            <input
              onChange={(e) => setInputValueLastName(e.target.value)}
              type="text"
              value={inputValueLastName}
            />
          </div>
          <div className="dateInput">
            <label>Имя</label>
            <input
              onChange={(e) => setInputValueName(e.target.value)}
              type="text"
              value={inputValueName}
            />
          </div>

          <div style={{display:"flex" ,gap:10}}>
            {inputValuePin ? (
              <button onClick={searchByPin}>
                <MdPersonSearch />
              </button>
            ) : (
              <button onClick={btn}>
                <MdPersonSearch />
              </button>
            )}
            <button onClick={()=> nav("")}>
              <TiHome />
            </button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSearch;
