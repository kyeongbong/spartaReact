import React from "react";
import "./AddWord.css";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { createword } from "../redux/modules/word"

export default function AddWord() {

  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  
  const text = React.useRef(null);
  const text1 = React.useRef(null);
  const text2 = React.useRef(null);
  const text3 = React.useRef(null);
  
  const addWordList = () => {
    
    let eng = (text.current.value)
    let kor = (text1.current.value)
    let engs = (text2.current.value)
    let kors = (text3.current.value)

    return dispatch (createword([eng, kor, engs, kors]));
  };


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

          <div>
            <input type="text" className="form-control" ref={text}/>
          </div>

          <div>
            <input type="text" className="form-control" ref={text1}/>
          </div>

          <div>
            <input type="text" className="form-control" ref={text2}/>
          </div>

          <div>
            <input type="text" className="form-control" ref={text3}/>
          </div>

          <button className="addbtn" onClick = { addWordList }>추가하기</button>
          <button className="addbtn" onClick = { () => {navigate( `/` )} }>돌아가기</button>

        </div>
    </div>
  )
}