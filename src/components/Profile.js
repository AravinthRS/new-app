import React from "react";

function Profile() {
  return (
    <div>
      <img
        className="profilePic"
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="ProfilePic"
      />
      <h1>Aravinth R</h1>
      <p>Bio: Web developer.</p>
      <ul>
        <li>
          <a href="https://github.com/AravinthRS">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/feed/">LinkedIn</a>
        </li>
      </ul>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKQP-eYy94upgempvNExTaV7f-7xiMENFTg&usqp=CAU"
        alt="coming soon"
        className="coming-soon"
      ></img>
    </div>
  );
}

export default Profile;
