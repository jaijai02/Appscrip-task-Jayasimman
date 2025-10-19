import PageInfo from "@/components/PageInfo";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
   <>
    <PageInfo/>
    <div style={{height:'auto',width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
      <ProductCard/>
    </div>
    </>
  );
}
