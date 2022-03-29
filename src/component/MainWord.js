/* eslint-disable */
import React from "react";
import "./MainWord.css"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

import {db} from "../firebase";
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc 
} from "firebase/firestore";
import { loadword, Deleteword, loadwordFB ,deletewordFB} from "../redux/modules/word";

export default function MainWord() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  React.useEffect( () => {
    dispatch(loadwordFB());
  }, []);

  
  
  const data = useSelector( (state) => state.word.list );
  
  React.useEffect(async() => {
    const docRef = doc(db, "word", "word_id");
    await deleteDoc(docRef);
    console.log(a.id)

  }, []);

  let [modal, modal변경] = useState(false);

    { modal === true ? console.log(1) : console.log(2) }

  function reload1() {
    return window.location.replace("/")
  }

  return(
    
    <div>

      <div className="nav_bar">
      MY DICTIONARY
      <button className="Add_btn" onClick = {
      () => {navigate( `/AddWord` )}}>+</button>
      </div>

      <div className="container">
        <div className="row">
          {
            data.map(function (a, i) {
              console.log( a.id )
              return (
              <div className="col-md-4" key={a}>

                <div className="mainbox">
                  <h3 className="eng">
                    { a[0] }
                  </h3>
                  <div className="imogibox">
                    <span className="imogi" onClick={ ()=>{ modal변경(!modal) } }> ✅ </span>
                    <span className="imogi" onClick={()=>{
                      window.alert("오류안나게 해주세요.....")
                    }}>🛐</span>
                    <span className="imogi" onClick={() => {
                      dispatch(deletewordFB(a.id), window.location.replace("/"));                                            
                      }}>🗑</span>
                  </div>
                    
                </div>

                <p className="kor">{ a[1] }</p>
                <p className="say">응용 문장 : { a[2] }</p>
                <p className="say">응용 해석 : { a[3] }</p>

              </div>
              )
            })
          }


          
        </div>
      </div>


    </div>
  )
}