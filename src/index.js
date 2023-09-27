// import React, { useState, useEffect } from "react";
import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import { FaStar } from "react-icons/fa";

// const createArray = (length) => [...Array(length)];

// function StarRating({ totalStars = 0 }) {
//   const [selectedStars, setSelectedStars] = useState(0);
//   return (
//     <>
//       {createArray(totalStars).map((n, i) => (
//         <Star
//           key={i}
//           selected={selectedStars > i}
//           onSelect={() => setSelectedStars(i + 1)}
//         />
//       ))}
//       <p>
//         {selectedStars} of {totalStars}
//       </p>
//     </>
//   );
// }

// function Star({ selected = false, onSelect }) {
//   return <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />;
// }

// function App() {
//   return <StarRating totalStars={10} />;
// }

// function App() {
//   const [name, setName] = useState("Jan");
//   const [admin, setAdmin] = useState(false);

//   useEffect(() => {
//     console.log(`Celebrate ${name}`);
//   }, [name]);

//   useEffect(() => {
//     console.log(`The user is: ${admin ? "admin" : "not admin"}`);
//   }, [admin]);

//   return (
//     <section>
//       <p>Congratulations {name}!</p>
//       <button onClick={() => setName("Will")}>Chanege Winner</button>
//       <p>{admin ? "logged in" : "not logged in"}</p>
//       <button onClick={() => setAdmin(true)}>login in</button>
//     </section>
//   );
// }

// function App() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch(`https://api.github.com/users`)
//       .then((response) => response.json())
//       .then(setData);
//   }, [data]);

//   if (data) {
//     return (
//       <div>
//         <ul>
//           {data.map((user) => (
//             <li key={user.id}>{user.login}</li>
//           ))}
//         </ul>
//         <button onClick={() => setData([])}>Remove Data</button>
//       </div>
//     );
//   }

//   return <p>No Users</p>;
// }

// function App() {
//   const [number, setnumber] = useReducer(
//     (number, newNumber) => number + newNumber,
//     0
//   );
//   return <h1 onClick={() => setnumber(1)}>{number}</h1>;
// }

function App() {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "Not Checked"}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
