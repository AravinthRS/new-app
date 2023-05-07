import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function Card() {
  return (
    <div className="card">
      <div className="servicesCard">
        <div className="cardServices">
          <div>SERVICES</div>
          <div>
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className="cardPaid">2 Prepaid</div>
      </div>
      <button className="cardVeiwBtn">VEIW DETAILS</button>
    </div>
  );
}

export default Card;
