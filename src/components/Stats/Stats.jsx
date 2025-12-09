import React, { useEffect, useState } from "react";
import "./Stats.css";

const Stats = () => {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    delivery: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      if (i <= 100) {
        setStats({
          projects: i * 5,        // up to 500
          clients: Math.floor(i * 1.2), // up to 120
          delivery: 24,           // static
          satisfaction: 99,       // static
        });
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { value: stats.projects + "+", label: "Projects Edited" },
    { value: stats.clients + "+", label: "Happy Clients" },
    { value: stats.delivery + " hrs", label: "Avg Delivery" },
    { value: stats.satisfaction + "%", label: "Satisfaction" },
  ];

  return (
    <section className="stats-section">
      <div className="stats-overlay"></div>
      <div className="floating-particles"></div>

      <div className="container stats-grid">
        {items.map((item, i) => (
          <div
            key={i}
            className="stats-card"
            style={{ "--i": `${i * 0.15}s` }}
          >
            <h1>{item.value}</h1>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
