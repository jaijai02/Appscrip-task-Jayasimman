"use client"
import Filter from "@/components/Filter";
import PageInfo from "@/components/PageInfo";
import ProductCard from "@/components/ProductCard";
import TopFilter from "@/components/TopFilter";
import { useState } from "react";

export default function Home() {

  const [showFilter,setShowFilter]=useState(false)
  
  return (
   <>
    <PageInfo/>
    <TopFilter showFilter={showFilter} setShowFilter={setShowFilter} />

    <div style={{display:'flex'}}>
      {showFilter && <div style={{width:'350px'}}><Filter/></div>}
      {/* <div> */}
         <div style={{height:'auto',width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
           <ProductCard/>
         </div>

      {/* </div> */}
    </div>

   
    </>
  );
}
