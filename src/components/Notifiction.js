import React from "react";

function Notifiction() {
  const notifications = [
    {
      id: 1,
      title: "Airtel 5G Plus is now available",
      description:
        "Bharti Airtel (“Airtel”), one of India’s leading telecommunications services provider, today, announced thas...",
      timestamp: "May 5, 2023",
    },
    {
      id: 2,
      title: "Airtel Launches “Always On” IoT Connectivity solution",
      description:
        "Bharti Airtel (“Airtel”), India’s leading telecommunications services provider, today announced the launch...",
      timestamp: "May 4, 2023",
    },
    {
      id: 3,
      title:
        "Revolutionizing Travel: Airtel and Nokia join hands to bring alive the Grandeur of Kashi Vishwanath temple and Statue of Unity at the India Mobile Congress",
      description:
        "Bharti Airtel ('Airtel'), India's premier communications solutions provider and Nokia have joined hands ...",
      timestamp: "May 3, 2023",
    },
    {
      id: 4,
      title: "Airtel launches Xsafe ─ an advanced home surveillance solution",
      description:
        "Promises a convenient, hassle free and complete end-to-end home surveillance solution including installation, connectivity, app support...",
      timestamp: "May 2, 2023",
    },
  ];
  return (
    <div>
      {notifications.map((notification) => (
        <div key={notification.id}>
          <h3>{notification.title}</h3>
          <p>{notification.description}</p>
          <small>{notification.timestamp}</small>
        </div>
      ))}
    </div>
  );
}

export default Notifiction;
