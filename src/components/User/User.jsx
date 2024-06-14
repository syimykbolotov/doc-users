import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { HiFolderDownload } from "react-icons/hi";
import { BsFillPrinterFill } from "react-icons/bs";
import { MdOutlineSendToMobile } from "react-icons/md";
import { TiDelete } from "react-icons/ti";

const User = () => {
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);
  const selectedUser = user.find((u) => u.id === parseInt(id));

  if (!selectedUser) {
    return <div>Loading...</div>;
  }
  return (
    <div id="user">
      <div className="container">
        <div className="user">
          <div className="user-text">
            <h2>{selectedUser.name}</h2>
            <h2>{selectedUser.username}</h2>
            <h2>{selectedUser.email}</h2>
            <h2>{selectedUser.phone}</h2>
            <h2>{selectedUser.website}</h2>
          </div>
          <img
            // src={selectedUser.img}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png"
            alt="img"
          />
        </div>
        <h1 className="title-doc">ДОКУМЕНТЫ</h1>
        <div className="doc">
          <div className="user-doc">
            <button onClick={() => setModal(true)}>
              <FaArrowUpRightFromSquare />
            </button>
            <h2>С. о рождении</h2>
          </div>
          <div className="user-doc">
            <button onClick={() => setModal(true)}>
              <FaArrowUpRightFromSquare />
            </button>
            <h2>С. о работе</h2>
          </div>
          <div className="user-doc">
            <button onClick={() => setModal(true)}>
              <FaArrowUpRightFromSquare />
            </button>
            <h2>С. о место</h2>
          </div>
          <div className="user-doc">
            <button onClick={() => setModal(true)}>
              <FaArrowUpRightFromSquare />
            </button>
            <h2>С. о семья</h2>
          </div>
        </div>
        {modal ? (
          <div className="modal-doc">
            <div className="modal-icons">
              <div className="modal-icons-ic">
                <HiFolderDownload />
                <BsFillPrinterFill />
                <MdOutlineSendToMobile />
              </div>
              <span
                style={{
                  cursor: "pointer",
                }}
                onClick={() => setModal(false)}
              >
                {" "}
                <TiDelete />
              </span>
            </div>
            <div className="modal-img">
              <img
                src="https://nimbusweb.me/wp-content/uploads/2023/05/Business-Insurance-Document-1.jpg"
                alt="img"
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default User;
