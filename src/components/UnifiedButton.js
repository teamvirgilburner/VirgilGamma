import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function UnifiedButton({ to, label, external, className = "unified-button" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (external) {
      navigate(to); // This replaces history.push(to)
    } else {
      document.querySelector(to).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {label}
    </button>
  );
}

export default UnifiedButton;
