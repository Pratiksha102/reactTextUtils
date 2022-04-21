import React from "react";
import "./App.css";

export default function App() {
  const teacher = [
    {
      name: "pratiksha",
      age: "24",
      address: [
        { hn: "102", city: "kota" },
        { hn: "104", city: "Bangalore" },
      ],
    },
    { name: "guppu", age: "27" ,address: [
      { hn: "102", city: "kota" },
      { hn: "104", city: "Bangalore" },
    ]}
  ];

  return (
    <div className="App">
      <h1> App Component </h1>

      {teacher.map((x, i) => (
        <>
          <h2>
            Teahcer basic name is {x.name},{x.age},{i}
          </h2>
          <h3>
            Address
            {x.address.map((a) => (
              <h1 key={a.hn}> city{a.city}</h1>
            ))}
          </h3>
        </>
      ))}
    </div>
  );
}
