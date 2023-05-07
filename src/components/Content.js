import React from "react";
import { Routes, Route } from "react-router-dom";
import Manage from "./Manage";
import Pay from "./Pay";
import Shop from "./Shop";
import Discover from "./Discover";
import Help from "./Help";
import Profile from "./Profile";
import Notification from "./Notifiction";

function Content() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Manage />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/help" element={<Help />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </div>
  );
}

export default Content;
