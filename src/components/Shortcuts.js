import React from "react";
import { TbRecharging } from "react-icons/tb";
import { BiMoneyWithdraw } from "react-icons/bi";
import { SiYourtraveldottv } from "react-icons/si";
import { TbCloudDataConnection } from "react-icons/tb";
import { GrChannel } from "react-icons/gr";

function Shortcuts() {
  return (
    <div className="icon-container">
      <div id="short">SHORTCUTS</div>
      <div className="row">
        <div className="shortcuts-icontext">
          <TbRecharging className="shortcuts-icon" />
          <div className="shortcuts-text">recharge</div>
        </div>
        <div className="shortcuts-icontext">
          <BiMoneyWithdraw className="shortcuts-icon" />
          <div className="shortcuts-text">pay bill</div>
        </div>
        <div className="shortcuts-icontext">
          <SiYourtraveldottv className="shortcuts-icon" />
          <div className="shortcuts-text">claim OTTs</div>
        </div>
        <div className="shortcuts-icontext">
          <TbCloudDataConnection className="shortcuts-icon" />
          <div className="shortcuts-text">connection</div>
        </div>
      </div>
      <div className="rowTwo">
        <div className="shortcuts-icontext">
          <GrChannel className="shortcuts-icon" />
          <div className="shortcuts-text">channels</div>
        </div>
      </div>
    </div>
  );
}

export default Shortcuts;
