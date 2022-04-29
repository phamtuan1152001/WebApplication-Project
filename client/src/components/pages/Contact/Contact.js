// import React from "react";
// import { useState, useEffect } from "react";
// import "./Contact.css";

// function Contact() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     let componentMounted = true;
//     const getProducts = async () => {
//       setLoading(true);
//       const response = await fetch("http://localhost:5000/api/v1/products");
//       if (componentMounted) {
//         setData(await response.clone().json());
//         setLoading(false);
//       }
//       return () => {
//         componentMounted = false;
//       };
//     };

//     getProducts();
//   }, []);

//   //console.log(data.map((datas) => datas.title));

//   const Loading = () => {
//     return <>Loading....</>;
//   };
//   const Empty = () => {
//     return (
//       <>
//         <div className="container">
//           {data.map((datas) => (
//             <div>
//               <h3>{datas.Name}</h3>
//               <p>{datas.Price}</p>
//             </div>
//           ))}
//         </div>
//       </>
//     );
//   };
//   return <>{loading ? <Loading /> : <Empty />}</>;
// }
// export default Contact;
