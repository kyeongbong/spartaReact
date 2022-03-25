import React, { useState } from "react";
import "./MainWord.css"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MainWord() {

  //let [ 단어, 단어변경 ] = useState(['apple', 'bear', 'tomato']);

  //let [ 뜻, 뜻변경 ] = useState(['사과', '곰', '토마토']);

  //let [ 응용영어, 응용영어변경 ] = useState(['I like apple', 'bear is cute', 'tomato nomat']);
  
  //let [ 응용한글, 응용한글변경 ] = useState(['난 사과를 좋아한다', '곰은 귀엽다', '토마토 노맛']);

  const navigate = useNavigate();

  const data = useSelector( (state) => state.word.list );
  console.log(data)

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
            data.map(function (i, a) {
              return (
              <div className="col-md-4" key={i}>

                <div className="mainbox">
                  <h3 className="eng">
                    { i.단어들 }
                  </h3>
                  <div className="imogibox">
                    <span className="imogi"> ✅ </span>
                    <span className="imogi">✍️</span>
                    <span className="imogi">🗑</span>
                  </div>
                    
                </div>

                <p className="kor">{ i.뜻 }</p>
                <p className="say">응용 문장 : { i.응용영어 }</p>
                <p className="say">응용 해석 : { i.응용한글 }</p>

              </div>
              )
            })
          }


          
        </div>
      </div>


    </div>
  )
}