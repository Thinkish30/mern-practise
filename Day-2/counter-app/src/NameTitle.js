import React, { useState, useEffect } from "react";

function NameTitle() {
  const [name, setName] = useState("");

  useEffect(() => {
    // Browser tab ka title change karega
    if (name) {
      document.title = `Hello, ${name}`;
    } else {
      document.title = "React App";
    }
  }, [name]); // jab bhi name change hoga, yeh chalega

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Enter Your Name</h2>
      <input
        type="text"
        value={name}
        placeholder="Type here..."
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />
    </div>
  );
}

export default NameTitle;
