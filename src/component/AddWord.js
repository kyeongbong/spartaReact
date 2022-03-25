import React from "react";
import "./AddWord.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { createword } from "./redux/modules/word"

export default function AddWord() {

  const navigate = useNavigate();

  // const addWordList = () => {
  //   dispatch = useDispatch(createword(text.current.value));
  // };

  return(
    <div className="body">
      <div style={{
            height: "90vh",
            width: "450px",
            margin: "20px auto",
            border: "1px solid gainsboro",
            borderRadius: "10px",
            paddingTop: "30px",
            backgroundColor: "white",
        }} >

        <h2 className="addTitle">단어 추가하기</h2>

        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
          <label for="floatingInput" className="label">단어를 입력해 주세요!</label>
        </div>

        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
          <label for="floatingInput" className="label">뜻을 입력해 주세요!</label>
        </div>

        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
          <label for="floatingInput" className="label">예문을 입력해 주세요!</label>
        </div>

        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
          <label for="floatingInput" className="label">해석을 입력해 주세요!</label>
        </div>

        <button className="addbtn" onClick = {() => {navigate( `/` )}}>추가하기</button>

        </div>
    </div>
  )
}