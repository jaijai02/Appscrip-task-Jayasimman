"use client";
import Styles from "./Filter.module.css";
import { useState } from "react";

function Filter() {
  const [open, setOpen] = useState(null);

  const filters = [
    { title: "CUSTOMIZABLE", options: ["Yes", "No"] },
    { title: "IDEAL FOR", options: ["Men", "Women", "Kids"] },
    { title: "OCCASION", options: ["Casual", "Party", "Formal"] },
    { title: "WORK", options: ["Office", "Outdoor", "Home"] },
    { title: "FABRIC", options: ["Velvet", "Cotton", "Silk", "Linen"] },
    { title: "SEGMENT", options: ["Luxury", "Regular"] },
    { title: "SUITABLE FOR", options: ["Summer", "Winter"] },
    { title: "RAW MATERIALS", options: ["Wool", "Leather", "Synthetic"] },
  ];

  return (
    <div
      style={{
        width: "300px",
        border: "1px solid #ddd",
        marginTop:'20px'
      }}
    >
      {filters.map((filter, index) => (
        <div
          key={index}
          style={{
            borderBottom: "1px solid #eee",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={() => setOpen(open === index ? null : index)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <span>{filter.title}</span>
            <i
              className={`bi bi-chevron-${open === index ? "up" : "down"}`}
            ></i>
          </div>

          {/* Show options if open */}
          {open === index && (
            <div style={{ marginTop: "8px", marginLeft: "10px" }}>
              {filter.options.map((opt) => (
                <div key={opt} style={{ margin: "4px 0", color: "#555" }}>
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Filter;

