import React from "react";
import { VscAccount } from "react-icons/vsc";
import { VscBellDot } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div onClick={() => navigate("/profile")}>
        <VscAccount className="icons profile" />
      </div>
      <div className="manage">
        <h3 className="heading">manage</h3>
        <p>plans and accounts</p>
      </div>
      <div className="headericon" onClick={() => navigate("/notification")}>
        <VscBellDot className="noti" />
      </div>
    </div>
  );
}

export default Header;
