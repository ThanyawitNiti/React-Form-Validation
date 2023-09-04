import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//form Component
// Task : Create HTML
function Form() {
  //สิ่งที่เราอยากให้ render
  //Data State
  // const [userName, setUserName] = useState("");
  //return array เราต้องถอดค่ามันออกมา
  //setUsername is Fn
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //Error State
  // const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  //color
  // const [userNameColor, setUserNameColor] = useState("");
  // สองอันนี้ ใช้ ร่วมกันไม่ได้เพราะ ถ้า username ถูก email ผิด จะแดงทั้งคู่
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [errorConfirmPasswordColor, seterrorConfirmPasswordColor] =
    useState("");

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
    //Validate Email
    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("รูปแบบ Email ไม่ถูกต้อง");
      setEmailColor("red");
    }

    //Validate Password
    if (password.length >= 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("กรุณาระบุรหัสผ่านอย่างน้อย 8 อักษร");
      setPasswordColor("red");
    }
    //Validate COnfirm password
    if (password === confirmPassword) {
      setErrorConfirmPassword("");
      seterrorConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("รหัสผ่านไม่ตรงกรุณาระบุใหม่");
      seterrorConfirmPasswordColor("red");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        {/* เมื่อ user กด submit ให้รัน fn handleSubmit */}

        {/* #1 :username */}
        <div className="form-input">
          {/* <label>Username</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ borderColor: userNameColor }}
          />

          {/* onchange ค่าที่ใส่ไปคือ Fn  ผูกกับฟังชันตัวนี้ ซึ่งเอาค่า event obj มาอัพเดคค่า e =event.obj browser จะโยนค่ามาให้ */}
          {/* onCHange ต้องใส่ฟังชัน */}
          {/* เอา userstate ใส่ตรง value ของ input จะขึ้น state แรกเริ่ม */}

          {/* <small style={{ color: userNameColor }}>{errorUserName}</small>  */}
        </div>

        {/* #2 : Email */}
        <div className="form-input">
          <label>email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: emailColor }}
          />

          {/* เอาemail มาผูกกับ input ก่อน โดยใส่ใน value ={useState} */}

          <small style={{ borderColor: emailColor }}>{errorEmail}</small>
        </div>

        {/* #3 : Password */}
        <div className="form-input">
          <label>password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: passwordColor }}
          />
          <small style={{ color: passwordColor }}>{errorPassword}</small>
        </div>

        {/* #4 : Confirm Password */}
        <div className="form-input">
          <label>confirm-password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ borderColor: errorConfirmPasswordColor }}
          />
          <small style={{ color: errorConfirmPasswordColor }}>
            {errorConfirmPassword}
          </small>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

//Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Form />);

//state
// need lib react
//import {usestate}
// เก็บค่าข้อความที่ user พิมเข้ามา
// ใช้ ภายใต้ {}

//ยุบให้เหลือ 4 state
// validate LIB
// joi , yup ,reacthookform
