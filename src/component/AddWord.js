/* eslint-disable */
import React from "react";
import "./AddWord.css";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { createword } from "../redux/modules/word"

import {db} from "../firebase";
import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";

import { loadword ,addwordFB } from "../redux/modules/word";

import { Link } from "react-router-dom";



export default function AddWord() {

  const navigate = useNavigate();
  
  const dispatch = useDispatch(); 

  
  
  const text = React.useRef(null);
  const text1 = React.useRef(null);
  const text2 = React.useRef(null);
  const text3 = React.useRef(null);
  
  const addWordList = () => {
    
    let a = (text.current.value)
    let b = (text1.current.value)
    let c = (text2.current.value)
    let d = (text3.current.value)

    dispatch(addwordFB({0: a, 1: b, 2: c, 3: d}));
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

        <h2 className="addTitle" onClick={()=>{navigate( `/` )}}>단어 추가하기</h2>

          <div>
            <input type="text" className="form-control" ref={text} placeholder="영단어" />
          </div>

          <div>
            <input type="text" className="form-control" ref={text1} placeholder="해석" />
          </div>

          <div>
            <input type="text" className="form-control" ref={text2} placeholder="응용 문장" />
          </div>

          <div>
            <input type="text" className="form-control" ref={text3} placeholder="응용문장 해석" />
          </div>

          

          <Link to = "/">
            <button className="addbtn" onClick = { addWordList }>추가하기</button>
          </Link>

        </div>
    </div>
  )
}