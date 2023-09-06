import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Username() {
  const [userName, setUserName] = useState("");
  const [userNameColor, setUserNameColor] = useState("");
  const [errorUserName, setErrorUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validate userName ตรวจสอบข้อมูล
    if (userName.length >= 8) {
      setErrorUserName("");
      setUserNameColor("green");
    } else {
      setErrorUserName("กรุณาระบุชื่อผู้ใช้งานอย่างน้อย 8 ตัวอักษร");
      setUserNameColor("red");
    }
  };

  return (
    <div className="form-input" onSubmit={handleSubmit}>
      <label>Username</label>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        style={{ borderColor: userNameColor }}
      />
      <small style={{ color: userNameColor }}>{errorUserName}</small>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Username />);

export default Username;
