import React from "react";

//Emoji for the boroughs
const boroughEmojis = {
    Manhattan: "🏙️",
    Brooklyn: "🌉",
    Queens: "👑",
    Bronx: "🦅",
    "Staten Island": "⛴️",
};

function BoroughCard({ borough = "Queens", bgColor }) {
    const emoji = boroughEmojis[borough] || "";

    return (
    <div className="borough-card"
        style={{
            backgroundColor: bgColor || "gray",
        }}
    >
      <h2 className="borough-title">
        {emoji} Hello from {borough}!
      </h2>
    </div>
    );
}

export default BoroughCard;