import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
          //state เสมือนหนึ่งตัวแปร เอามาใส่ค่าและแสดงผลได้
        }
    }

    
  return (
    <>
      <label>Username</label>
      <input
        onSubmit={handleSubmit}
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        style={{ borderColor: userNameColor }}
      />
      <small style={{ color: userNameColor }}>{errorUserName}</small>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Username />);

export default Username;