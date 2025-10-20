"use client";
import { useState } from "react";
import Styles from "./TopFilter.module.css";

function TopFilter({ showFilter, setShowFilter }) {
  
  const [selected, setSelected] = useState("");

  return (
    <>
      <hr />
      <div className={Styles.topfilter}>
        <div className={Styles.topleftfilter}>
          <h3>1111 items</h3>
          <p onClick={() => setShowFilter(!showFilter)}>
            <i
              className={`bi bi-arrow-${
                showFilter ? "left" : "right"
              }-short icon`}
            ></i>{" "}
            {showFilter ? "Hide Filters" : "Show Filters"}
          </p>
        </div>

        <div className={Styles.toprightfilter}>
          <select
            name=""
            value={selected}
            id=""
            style={{
              fontWeight: selected ? "bold" : "normal",
            }}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">Recommended</option>
            <option value="Newest First">Newest First</option>
            <option value="Popular">Popular</option>
            <option value="Price : High to Low">Price : High to Low</option>
            <option value="Price : Low to High">Price : Low to High</option>
          </select>
        </div>
      </div>
      <hr />
    </>
  );
}
export default TopFilter;
