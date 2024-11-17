import React, { useEffect, useState } from "react";
import Productdetail from "../Components/Productdetail";

import Navbar from "./Navbar";
function ProductDetailPage() {
  const [data, setData] = useState([]);
  const backapi = "http://localhost:5000";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${backapi}/api/auth/getproducts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log(result)
        setData(result.products);
      }
    };

    fetchData();
  }, []);
  console.log("ALl products", data)
  return (
    <div>
      <Navbar />
          <h2>Product List</h2>
    <div className="parentproduct" style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
      
      {data.map((product, index) => (
        <Productdetail key={index} product={product} destination={product._id} />
      ))}
    </div>
    </div>

  );
}

export default ProductDetailPage;
