import React, { useState } from "react";
import "./MainWord.css"
import { useNavigate } from "react-router-dom";

export default function MainWord() {

  let [ 단어, 단어변경 ] = useState(['apple', 'bear', 'tomato']);

  let [ 뜻, 뜻변경 ] = useState(['사과', '배', '토마토']);

  let [ 응용영어, 응용영어변경 ] = useState(['I like apple', 'bear is cute', 'tomato nomat']);
  
  let [ 응용한글, 응용한글변경 ] = useState(['난 사과를 좋아한다', '곰은 귀엽다', '토마토 노맛']);

  const navigate = useNavigate();

  return(


    <div>

      <div className="nav_bar">
      MY DICTIONARY
      <button className="Add_btn" onClick = {
      () => {navigate( `/AddWord` )}}>+</button>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-md-4">

            <div className="mainbox">
              <h3 className="eng">
                { 단어[0] }
              </h3>
              <div className="imogibox">
                <span className="imogi"> ✅ </span>
                <span className="imogi">✍️</span>
                <span className="imogi">🗑</span>
              </div>
                
            </div>

            <p className="kor">{뜻[0]}</p>
            <p className="say">응용 문장 : { 응용영어[0] }</p>
            <p className="say">응용 해석 : { 응용한글[0] }</p>

          </div>
        </div>
      </div>


    </div>
  )
}