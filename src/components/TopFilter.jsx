"use client"
import { useState } from "react";

function TopFilter({ showFilter, setShowFilter }) {

  const [selected, setSelected] = useState("");

  return (
    <>
      <hr/>
      <div style={{height:'60px',width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>

        <div style={{display:'flex',justifyContent:'space-between',height:'100%',width:'300px',alignItems:'center',padding:'20px'}}>
          <h3>1111 items</h3>
           <p style={{cursor:'pointer'}} onClick={() => setShowFilter(!showFilter)}>
            <i className={`bi bi-arrow-${showFilter ? "left" : "right"}-short icon`}></i> {showFilter ? "Hide Filters" : "Show Filters"}
          </p>
        </div>

        <div >
          <select
          name=""
          value={selected}
          id=""
          style={{
            minWidth: "200px",
            marginRight: "20px",
            border: "none",
            outline:'none',
            cursor:'pointer',
            fontWeight: selected ? "bold" : "normal"
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
      <hr/>
    </>
  );
}
export default TopFilter;
