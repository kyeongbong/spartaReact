// word.js

import { db } from "../../firebase";
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc 
} from "firebase/firestore";
import { async } from "@firebase/util";

// Actions
const LOAD = "word/LOAD";
const CREATE = 'word/CREATE';
const REMOVE = 'word/REMOVE';

const initialState = {
  list : []
}



// Action Creators
export const loadword = (word_list) => {
  return { type: LOAD, word_list};
};

export function createword(word) {
  return {type: CREATE, word: word, };
}

export function deleteword(word) {
  return { type: REMOVE, word };
}

//middlewares

export const loadwordFB = () => {
  return async function (dispatch) {

    const word_data = await getDocs(collection(db, "word"));
    
    let word_list  = [];

    word_data.forEach((b) => {
      word_list.push({ id: b.id, ...b.data() });
    });  

    dispatch(loadword(word_list));
  }
}

export const addwordFB = (word) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "word"), word);
    const word_data = { id: docRef.id, ...word };

    dispatch(createword(word_data));
  }
}

// 파이어베이스랑 통신하는 부분
export const deletewordFB = (word_id) => {
  return async function (dispatch, getState) {
    if(!word_id){
      window.alert("아이디가 없네요!");
      return;
    }
    const docRef = doc(db, "word", word_id);
    await deleteDoc(docRef);

    const _word_list = getState().word.list;
    const word_index = _word_list.findIndex((b) => {
      return b.id === word_id;
      
    });
    
    dispatch(deleteword(word_index));
  }
}
console.log('dddd')

// Reducer

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff

    case "word/LOAD": {
      return {list: action.word_list}
    }

    default:
      return state;
  }
}

