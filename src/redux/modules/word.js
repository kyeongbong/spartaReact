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

// Actions
const LOAD = "word/LOAD";
const CREATE = 'word/CREATE';
//const UPDATE = 'my-app/widgets/UPDATE';
//const REMOVE = 'my-app/widgets/REMOVE';

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

// export const createword = (word) => {
//   return { type: CREATE, word };
// };

//export function updateWidget(widget) {
// return { type: UPDATE, widget };
//}

//export function removeWidget(widget) {
//  return { type: REMOVE, widget };
//}

//middlewares

export const loadwordFB = () => {
  return async function (dispatch) {

    const word_data = await getDocs(collection(db, "word"));
    
    let word_list  = [];

    word_data.forEach((b) => {
      // console.log(b.id, b.data());
      word_list.push({ id: b.id, ...b.data() });
    });

    // console.log(word_list);
    dispatch(loadword(word_list));
  }
}

export const addwordFB = (word) => {
  return async function (dispatch) {
		// 파이어스토어에 추가하기를 기다려요!
    const docRef = await addDoc(collection(db, "word"), word);
		// 추가한 데이터 중 id를 가져와서 bucket_data를 만들어줬어요!
    const word_data = { id: docRef.id, ...word };
		// 그럼 이제 액션을 일으키자! (수정해달라고 요청하자!)
    dispatch(createword(word_data));
  }
}

// Reducer

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff

    case "word/LOAD": {
      return {list: action.word_list}
    }

    case "word/CREATE":
      {const new_word_list = [...state.list, action.word];
      return { list: new_word_list };}

    default:
      return state;
  }
}



// export  function reducer(state = initialState, action = [{}]) {
// switch (action.type) {
//   case "word/CREATE": {
//     const new_word_list = [...state.단어, action.word];
//     return { list : new_word_list };
//   }
// // do reducer stuff
// default: return state;
// }
// }